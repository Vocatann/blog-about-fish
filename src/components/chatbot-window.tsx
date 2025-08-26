'use client'

import { BotChatMessage } from "@/types";
import { useState, useRef, useEffect } from "react";
import { squareArrowOutUpLeftSvg, sendHorizontalSvg, xSvg, threeDotsTypingSvg, botMessageSquareSvg } from "@/lib/svgs";
import remarkGfm from "remark-gfm";
import ReactMarkdown from 'react-markdown';
import { baseComponents } from "../../mdx-components";

export default function ChatbotWindow() {
  const [ isChatOpen, setIsChatOpen ] = useState(false);
  const [messages, setMessages] = useState<BotChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  
  const handleChatOpen = () => setIsChatOpen(prev => !prev);

  const handleSendMessage = async (message : string) => {
    if (message.trim() !== '') {
      const userMessage: BotChatMessage = { sender: 'user', text: message };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInputValue('');

      setIsLoading(true);

      const botResponseText = await getBotResponse(message);
      const botMessage: BotChatMessage = { sender: 'bot', text: botResponseText };

      setMessages((prevMessages) => [...prevMessages, botMessage]);

      setIsLoading(false);
    }
  };

  async function getBotResponse(userMessage: string) {
    const res = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ chatLog: [...messages, { sender: 'user', text: userMessage }] }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    return data.message;
  }

  const handleSubmitButtonKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage(inputValue);
    }
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="fixed right-5 bottom-5 space-y-2">
      <div className="flex justify-end">
        <div className={` rounded-xl overflow-hidden p-3 transition-all ease-in-out duration-300 flex flex-col justify-between ${isChatOpen ? 'w-[350px] h-[500px] md:w-[500px] md:h-[600px] bg-accent text-text' : 'h-0 w-0 text-bg'}`}>
          <div className="flex justify-between border-b-2 border-border pb-2">
            <button
              type="button"
              className="hover:opacity-25 hover:cursor-pointer"
            >
              {squareArrowOutUpLeftSvg}
            </button>
            <button 
              type="button" 
              onClick={handleChatOpen}
              className="hover:opacity-25 hover:cursor-pointer"
            >
              {xSvg}
            </button>
          </div>
          <div ref={chatRef} className="mb-auto h-full overflow-y-auto scrollbar-hidden">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
              >
                {message.sender === 'user' ? (
                  <div
                    className='inline-block p-2 rounded-3xl bg-accent-secondary text-text'
                  >
                    {message.text}
                  </div>
                ) : (
                  <div
                    className='inline-block p-2 rounded-3xl bg-bg text-text'
                  >
                    <ReactMarkdown remarkPlugins={[remarkGfm]} components={baseComponents}>
                      {message.text}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="p-2 text-left">
                <span className="inline-block p-2 rounded-3xl bg-bg text-text">
                  {threeDotsTypingSvg}
                </span>
              </div>
            )}
          </div>
          <div>
            {messages.length === 0 && (
              <div className="flex justify-center space-x-1 m-2 bottom-0">
                <button 
                  onClick={() => handleSendMessage('Suggest me which fish I should read about')}
                  className="p-1 md:p-2 text-sm rounded-3xl bg-bg hover:opacity-75 hover:cursor-pointer"
                >
                  Suggest me which fish I should read about
                </button>
                <button 
                  onClick={() => handleSendMessage('Tell me a fun fact about fish')}
                  className="p-1 md:p-2 text-sm rounded-3xl bg-bg hover:opacity-75 hover:cursor-pointer"
                >
                  Tell me a fun fact about fish
                </button>
              </div>
            )}
            <div className="flex space-x-1">
              <input 
                type="input" 
                placeholder="Message..." 
                className="bg-bg rounded-2xl p-2 w-full"
                value={inputValue}
                onKeyDown={handleSubmitButtonKeyDown}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button 
                onClick={() => handleSendMessage(inputValue)}
                className="flex justify-center items-center  p-2 rounded-3xl bg-bg hover:opacity-75 hover:cursor-pointer"
              >
                {sendHorizontalSvg}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button 
          type="button" 
          onClick={handleChatOpen}
          className="rounded-3xl bg-accent hover:opacity-75 hover:scale-105 w-[55px] h-[55px] flex justify-center items-center text-text hover:cursor-pointer"
        >
          {botMessageSquareSvg}
        </button>
      </div>
    </div>
  )
}