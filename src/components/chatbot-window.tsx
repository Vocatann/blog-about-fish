'use client'

import { BotChatMessage } from "@/types";
import { useState } from "react";

export default function ChatbotWindow() {

  const [ isChatOpen, setIsChatOpen ] = useState(false);
  const [messages, setMessages] = useState<BotChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');

  const sendHorizontalSvg = 
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send-horizontal-icon lucide-send-horizontal">
      <path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"/><path d="M6 12h16"/>
    </svg>

  const botMessageSquareSvg = 
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot-message-square-icon lucide-bot-message-square">
      <path d="M12 6V2H8"/><path d="m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"/><path d="M2 12h2"/><path d="M9 11v2"/><path d="M15 11v2"/><path d="M20 12h2"/>
    </svg>;
  
  const squareArrowOutUpLeftSvg = 
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-arrow-out-up-left-icon lucide-square-arrow-out-up-left">
      <path d="M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6"/><path d="m3 3 9 9"/><path d="M3 9V3h6"/>
    </svg>;
  
  const xSvg = 
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x">
      <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
    </svg>
  
  const handleChatOpen = () => setIsChatOpen(prev => !prev);

  const handleSendMessage = async (message : string) => {
    console.log(message)
    if (message.trim() !== '') {
      const userMessage: BotChatMessage = { sender: 'user', text: message };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInputValue('');

      const botResponseText = await getBotResponse(message);
      const botMessage: BotChatMessage = { sender: 'bot', text: botResponseText };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }
  };

  async function getBotResponse(userMessage: string): Promise<string> {
    if (userMessage === 'Tell me about this blog') {
      return '[Short information about the blog]. You could also read more on the about page';
    } else if (userMessage === 'Tell me a fun fact about fish') {
      const response = await send(userMessage);
      return response;
    } else {
      const response = await send(userMessage);
      return response;
    }
  }

  async function send(input : string) {
    const res = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ prompt: input }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    return data.choices[0].message.content
  }

  return (
    <div className="fixed right-5 bottom-5 w-[350px] space-y-2">
      <div className="flex justify-end">
        <div className={` rounded-xl overflow-hidden p-3 transition-all ease-in-out duration-300 flex flex-col justify-between ${isChatOpen ? 'w-[350px] h-[500px] bg-accent text-text' : 'h-0 w-0 text-bg'}`}>
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
          <div className="mb-auto h-full overflow-y-auto scrollbar-hidden">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
              >
                <span
                  className={`inline-block p-2 rounded-3xl ${
                    message.sender === 'user' ? 'bg-accent-secondary text-text' : 'bg-bg text-text'
                  }`}
                >
                  {message.text}
                </span>
              </div>
            ))}
          </div>
          <div>
            {messages.length === 0 && (
              <div className="flex justify-center space-x-1 m-2 bottom-0">
                <button 
                  onClick={() => handleSendMessage('Tell me about this blog')}
                  className="p-1 text-sm rounded-3xl bg-bg hover:opacity-75 hover:cursor-pointer"
                >
                  Tell me about this blog
                </button>
                <button 
                  onClick={() => handleSendMessage('Tell me a fun fact about fish')}
                  className="p-1 text-sm rounded-3xl bg-bg hover:opacity-75 hover:cursor-pointer"
                >
                  Tell me a fun fact about fish
                </button>
              </div>
            )}
            <div className="flex space-x-1">
              <input 
                type="search" 
                placeholder="Message..." 
                className="bg-bg rounded-2xl p-2 w-full"
                value={inputValue}
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