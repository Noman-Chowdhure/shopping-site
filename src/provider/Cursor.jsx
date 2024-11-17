import React, { createContext, useEffect } from 'react';
import gsap from 'gsap';

const Cursor = ({ children }) => {
  const CursorProvider = createContext(); 

  useEffect(() => {
    const handleMouseMove = (e) => {
      gsap.to('#cursor', {
        x: e.clientX, 
        y: e.clientY, 
        ease: 'power3.out',
        duration: 0.3, 
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); 

  const sama = {}; 

  return (
    <CursorProvider.Provider value={sama}>
      <div
        id="cursor"
        className="w-4 h-4 bg-zinc-900 z-50 rounded-full fixed pointer-events-none"
        style={{ transform: 'translate(-50%, -50%)' }} 
      ></div>
      {children}
    </CursorProvider.Provider>
  );
};

export default Cursor;
