"use client";

import React from 'react';

interface WhatsAppButtonProps {
  productName: string;
}

export default function WhatsAppButton({ productName }: WhatsAppButtonProps) {
  const handleWhatsApp = () => {
    const kemasan = (document.getElementById('kemasan') as HTMLSelectElement).value;
    const jumlah = (document.getElementById('jumlah') as HTMLInputElement).value;
    const message = `Halo, saya mau pesan *${productName}*%0A• Kemasan: ${kemasan}%0A• Jumlah: ${jumlah}`;
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button 
      onClick={handleWhatsApp}
      className="flex-1 text-center py-3 bg-black text-white rounded-lg hover:bg-gray-600 cursor-pointer"
    >
      Beli via WhatsApp
    </button>
  );
}