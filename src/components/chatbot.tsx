'use client'

import { useState } from "react";

export default function Chatbot() {

  const [ isChatOpen, setIsChatOpen ] = useState(false);

  const messageCircleSvg = 
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle-more-icon lucide-message-circle-more">
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/>
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
        <div className={`text-text rounded-xl overflow-hidden p-3 transition-all ease-in-out duration-300 ${isChatOpen ? 'w-[350px] h-[500px] bg-accent' : 'h-0 w-0'}`}>
          <div className="flex justify-between border-b-2 border-border pb-2">
            {squareArrowOutUpLeftSvg}
            {xSvg}
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button 
          type="button" 
          onClick={handleChatOpen}
          className="rounded-3xl bg-accent hover:opacity-75 hover:scale-105 w-[55px] h-[55px] flex justify-center items-center text-text"
        >
          {messageCircleSvg}
        </button>
      </div>
    </div>
  )
}