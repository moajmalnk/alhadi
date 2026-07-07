"use client";
import React from 'react';
import AnimatedButton from './AnimatedButton';
import { useLeadModal } from './LeadModalProvider';

export default function HeroCTA() {
  const { openLeadModal } = useLeadModal();

  return (
    <div className="mt-4" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
      <AnimatedButton 
        text="Free Consultation" 
        onClick={openLeadModal} 
        className="fw-bold border-0"
        bgColor="#FF6F20"
        textColor="#ffffff"
        style={{ minWidth: '320px', height: '65px' }}
      />
    </div>
  );
}
