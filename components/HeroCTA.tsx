"use client";
import React, { useState } from 'react';
import AnimatedButton from './AnimatedButton';
import DemoModal from './DemoModal';
import Toast from './Toast';

export default function HeroCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  return (
    <div className="mt-4" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
      <AnimatedButton 
        text="Free Consultation" 
        onClick={() => setIsModalOpen(true)} 
        className="fw-bold border-0"
        bgColor="#FFAB00"
        textColor="#000"
        style={{ minWidth: '320px', height: '65px' }}
      />
      
      <DemoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSuccess={() => setToastVisible(true)} 
      />
      <Toast 
        isVisible={toastVisible} 
        message="Consultation booked successfully!" 
        onClose={() => setToastVisible(false)} 
      />
    </div>
  );
}
