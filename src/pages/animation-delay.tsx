import React from "react";

const AnimationDelay = () => {
  return (
    <div className="flex h-[100vh] w-full items-center justify-center">
      <div className="flex h-20 w-20 items-center justify-center space-x-1 border">
        <div className="h-2 w-1 animate-wavey rounded-full bg-blue-400"></div>
        <div className="h-3 w-1 animate-wavey rounded-full bg-blue-400 animation-delay-400"></div>
        <div className="h-4 w-1 animate-wavey rounded-full bg-blue-400 animation-delay-[150ms]"></div>
        <div className="h-3 w-1 animate-wavey rounded-full bg-blue-400 animation-delay-200"></div>
        <div className="h-2 w-1 animate-wavey rounded-full bg-blue-400 animation-delay-[75ms]"></div>
      </div>
    </div>
  );
};

export default AnimationDelay;
