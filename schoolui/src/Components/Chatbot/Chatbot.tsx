import React, { useEffect, useRef, useState } from "react";

type Message = {
  from: "user" | "bot";
  text: string;
  time: string;
};

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [typing, setTyping] = useState<boolean>(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "Hello 👋 I’m your School Assistant. How can I help?",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = async () => {
    
    if (!input.trim()) return; // 👈 only block empty input

    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const userText = input.trim();
    console.log("User question:", userText);

    // UI updates
    setMessages((prev) => [
      ...prev,
      { from: "user", text: userText, time },
    ]);
    setInput("");
    setTyping(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/chatbot/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      });

      if (!res.ok) {
        throw new Error(`Server responded with ${res.status}`);
      }

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: data.answer ?? "I couldn't find an answer.",
          time,
        },
      ]);
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "⚠️ Backend not reachable",
          time,
        },
      ]);
    } finally {
      setTyping(false);
    }
  };


  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-black to-yellow-600 text-white rounded-full shadow-xl flex items-center justify-center text-2xl hover:bg-blue-700 transition z-[9999]"
      >
        🤖
      </button>


      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-[360px] h-[520px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-[9999]">
          {/* Header */}
          <div className="bg-gradient-to-r from-black to-yellow-600 text-white px-4 py-3 flex justify-between items-center">
            <div>
              <div className="font-semibold text-sm">School Assistant</div>
              <div className="text-xs opacity-80">Online</div>
            </div>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          {/* Messages */}
          <div className="flex-1 px-3 py-2 overflow-y-auto space-y-3 bg-gray-50">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.from === "user" ? "justify-end" : "justify-start"
                  }`}
              >
                <div
                  className={`max-w-[75%] px-3 py-2 rounded-xl text-sm shadow ${m.from === "user"
                    ? "bg-gradient-to-r from-black to-yellow-600 text-white rounded-br-none"
                    : "bg-gradient-to-r from-black to-yellow-600 text-white rounded-bl-none"
                    }`}
                >
                  {m.text}
                  <div className="text-[10px] mt-1 opacity-60 text-right">
                    {m.time}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-2 rounded-xl shadow text-sm flex gap-1">
                  <span className="animate-bounce">.</span>
                  <span className="animate-bounce delay-150">.</span>
                  <span className="animate-bounce delay-300">.</span>
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Footer */}
          <div className="p-3 border-t bg-white flex gap-2">
            <input
              className="flex-1 border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ask something..."
              value={input}
              disabled={typing}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              disabled={typing}
              className="bg-gradient-to-r from-black to-yellow-600 text-white px-4 py-2 apparent rounded-lg text-sm disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
