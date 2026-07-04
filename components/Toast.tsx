"use client";

import React, { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  type?: 'success' | 'error';
}

export default function Toast({ message, isVisible, onClose, type = 'success' }: ToastProps) {
  const [isRendered, setIsRendered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsRendered(true);
      setTimeout(() => setIsAnimating(true), 10);
      
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setTimeout(onClose, 300); // wait for exit animation
      }, 4000);
      
      return () => clearTimeout(timer);
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => setIsRendered(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isRendered) return null;

  return (
    <div 
      className={`position-fixed bottom-0 start-50 translate-middle-x mb-5 d-flex align-items-center gap-3 px-4 py-3 rounded-pill shadow-lg bg-dark text-white toast-container ${isAnimating ? 'show' : ''}`}
      style={{ zIndex: 1100, minWidth: '320px' }}
    >
      <div className="d-flex align-items-center justify-content-center bg-white rounded-circle flex-shrink-0" style={{ width: '24px', height: '24px' }}>
        <iconify-icon 
          icon={type === 'success' ? "lucide:check" : "lucide:x"} 
          className="text-dark fs-6"
        ></iconify-icon>
      </div>
      <span className="fw-medium text-nowrap" style={{ fontSize: '14px', letterSpacing: '0.3px' }}>{message}</span>
      <button 
        type="button"
        className="btn-close btn-close-white ms-auto shadow-none" 
        onClick={() => {
          setIsAnimating(false);
          setTimeout(onClose, 300);
        }} 
        style={{ backgroundSize: '10px' }}
        aria-label="Close"
      ></button>

      <style jsx>{`
        .toast-container {
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform: translate(-50%, 100px);
          opacity: 0;
        }
        .toast-container.show {
          transform: translate(-50%, 0);
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
