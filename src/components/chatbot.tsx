'use client'

import { useState } from "react";

export default function Chatbot() {

  const [ isChatOpen, setIsChatOpen ] = useState(false);

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

  return (
    <div className="absolute right-5 bottom-5 w-[350px] space-y-2">
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
          <div className="mb-auto h-full">

          </div>
          <div className="flex space-x-1">
            <input 
              type="search" 
              placeholder="Message..." 
              className="bg-bg rounded-2xl p-2 w-full"
            />
            <button className="flex justify-center items-center  p-2 rounded-3xl bg-bg hover:opacity-75 hover:cursor-pointer">
              {sendHorizontalSvg}
            </button>
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