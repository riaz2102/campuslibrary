"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageSquare, FiX, FiSend } from "react-icons/fi";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "bot", text: "হ্যালো! আমি ক্যাম্পাস লাইব্রেরি অ্যাসিস্ট্যান্ট। আপনাকে কীভাবে সাহায্য করতে পারি? 😊" }
  ]);
  const chatEndRef = useRef(null);

  // অটো-স্ক্রোল নিচে নামানোর জন্য
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // ১. ইউজারের মেসেজ লিস্টে যোগ করা
    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // ২. AI উত্তরের জন্য লোডিং স্টেট (ঐচ্ছিক)
    // এখানে আপনি সত্যিকারের API কল করবেন। আপাতত একটি ডামি উত্তর সেট করছি:
    setTimeout(() => {
      const botReply = { 
        role: "bot", 
        text: `আপনি জানতে চেয়েছেন: "${input}"। আমি এই বিষয়ে তথ্য খুঁজছি। (এখানে আপনার AI API কানেক্ট করলে আসল উত্তর আসবে)` 
      };
      setMessages((prev) => [...prev, botReply]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-80 md:w-96 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div style={{ backgroundColor: "#FFBB8A" }} className="p-5 text-white flex justify-between items-center">
              <h3 className="font-bold text-lg">Library AI</h3>
              <button onClick={() => setIsOpen(false)} className="text-xl"><FiX /></button>
            </div>

            {/* Chat Area */}
            <div className="h-80 p-4 bg-slate-50 overflow-y-auto space-y-3">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl ${
                    msg.role === "user" 
                    ? "bg-[#FFBB8A] text-white rounded-tr-none" 
                    : "bg-white text-slate-700 shadow-sm rounded-tl-none border border-slate-100"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Input Area */}
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
              className="p-4 bg-white border-t flex gap-2"
            >
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="কিছু লিখুন..." 
                className="flex-1 bg-slate-100 rounded-xl px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-[#FFBB8A]"
              />
              <button type="submit" style={{ backgroundColor: "#FFBB8A" }} className="p-2 rounded-xl text-white">
                <FiSend />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{ backgroundColor: "#FFBB8A" }}
        className="w-16 h-16 rounded-full shadow-xl flex items-center justify-center text-white text-3xl"
      >
        {isOpen ? <FiX /> : <FiMessageSquare />}
      </motion.button>
    </div>
  );
}