import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { PHONE_DISPLAY, WHATSAPP_NUMBER } from '../constants';

export const StickyMobileCTA: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-3 z-50 flex space-x-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <a 
        href={`tel:${PHONE_DISPLAY}`}
        className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 px-4 rounded-lg font-bold shadow-sm active:bg-blue-700 transition"
      >
        <Phone className="h-5 w-5" />
        <span>Call Now</span>
      </a>
      <a 
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        className="flex-1 flex items-center justify-center space-x-2 bg-green-500 text-white py-3 px-4 rounded-lg font-bold shadow-sm active:bg-green-600 transition"
      >
        <MessageCircle className="h-5 w-5" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};