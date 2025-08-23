export const circleLoadingSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <radialGradient
      id="a10"
      cx=".66"
      fx=".66"
      cy=".3125"
      fy=".3125"
      gradientTransform="scale(1.5)"
    >
      <stop offset="0" stopColor="#3B82F6" />
      <stop offset=".3" stopColor="#3B82F6" stopOpacity=".9" />
      <stop offset=".6" stopColor="#3B82F6" stopOpacity=".6" />
      <stop offset=".8" stopColor="#3B82F6" stopOpacity=".3" />
      <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
    </radialGradient>

    <circle
      fill="none"
      stroke="url(#a10)"
      strokeWidth={15}
      strokeLinecap="round"
      strokeDasharray="200 1000"
      strokeDashoffset="0"
      cx={100}
      cy={100}
      r={70}
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        dur="2s"
        values="360 100 100;0 100 100"
        repeatCount="indefinite"
      />
    </circle>

    <circle
      fill="none"
      opacity=".2"
      stroke="#3B82F6"
      strokeWidth={15}
      strokeLinecap="round"
      cx={100}
      cy={100}
      r={70}
    />
  </svg>
);

export const threeDotsTypingSvg = (
  <svg width="40" height="10" viewBox="0 0 60 20" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor">
    <circle cx="10" cy="10" r="5">
      <animate 
        attributeName="r" 
        values="5;2;5" 
        dur="0.8s" 
        repeatCount="indefinite" 
        begin="0s"/>
    </circle>
    <circle cx="30" cy="10" r="5">
      <animate 
        attributeName="r" 
        values="5;2;5" 
        dur="0.8s" 
        repeatCount="indefinite" 
        begin="0.2s"/>
    </circle>
    <circle cx="50" cy="10" r="5">
      <animate 
        attributeName="r" 
        values="5;2;5" 
        dur="0.8s" 
        repeatCount="indefinite" 
        begin="0.4s"/>
    </circle>
  </svg>
);


export const sendHorizontalSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send-horizontal-icon lucide-send-horizontal">
    <path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"/><path d="M6 12h16"/>
  </svg>
);

export const botMessageSquareSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot-message-square-icon lucide-bot-message-square">
    <path d="M12 6V2H8"/><path d="m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"/><path d="M2 12h2"/><path d="M9 11v2"/><path d="M15 11v2"/><path d="M20 12h2"/>
  </svg>
);

export const squareArrowOutUpLeftSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-arrow-out-up-left-icon lucide-square-arrow-out-up-left">
    <path d="M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6"/><path d="m3 3 9 9"/><path d="M3 9V3h6"/>
  </svg>
);

export const xSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x">
    <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
  </svg>
);