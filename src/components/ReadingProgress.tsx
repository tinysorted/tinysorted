"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
const [progress, setProgress] = useState(0);

useEffect(() => {
let ticking = false;


const updateProgress = () => {
  const scrollTop =
    window.scrollY ||
    document.documentElement.scrollTop;

  const scrollHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;

  const percentage =
    scrollHeight > 0
      ? (scrollTop / scrollHeight) * 100
      : 0;

  setProgress(
    Math.min(100, Math.max(0, percentage))
  );

  ticking = false;
};

const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateProgress();
    });

    ticking = true;
  }
};

updateProgress();

window.addEventListener(
  "scroll",
  handleScroll,
  { passive: true }
);

window.addEventListener(
  "resize",
  updateProgress
);

return () => {
  window.removeEventListener(
    "scroll",
    handleScroll
  );

  window.removeEventListener(
    "resize",
    updateProgress
  );
};


}, []);

return ( <div
   className="
     fixed
     top-0
     left-0
     right-0
     h-[4px]
     z-[9999]
     bg-transparent
   "
 >
<div
className="
h-full
bg-neutral-900
shadow-sm
transition-[width]
duration-75
"
style={{
width: `${progress}%`,
}}
/> </div>
);
}
