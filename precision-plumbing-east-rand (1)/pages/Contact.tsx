import React from 'react';
import { Phone, Mail, MessageCircle, MapPin, Clock } from 'lucide-react';
import { PHONE_DISPLAY, WHATSAPP_NUMBER, EMAIL_ADDRESS, COMPANY_ADDRESS } from '../constants';

export const Contact: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-slate-300 text-lg">
            Open 24 Hours. Fast response. Clear communication.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Contact Details Column */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                <h3 className="font-bold text-xl mb-6 text-slate-800">Get in Touch</h3>
                <ul className="space-y-6">
                    <li className="flex items-start">
                        <Phone className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                        <div>
                            <span className="block text-sm text-slate-500 font-medium">Phone</span>
                            <a href={`tel:${PHONE_DISPLAY}`} className="text-xl font-bold text-slate-800 hover:text-blue-600">{PHONE_DISPLAY}</a>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <MessageCircle className="w-6 h-6 text-green-500 mr-4 mt-1" />
                        <div>
                            <span className="block text-sm text-slate-500 font-medium">WhatsApp</span>
                            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="text-xl font-bold text-slate-800 hover:text-green-600">Chat with us</a>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <Mail className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                        <div>
                            <span className="block text-sm text-slate-500 font-medium">Email</span>
                            <a href={`mailto:${EMAIL_ADDRESS}`} className="text-xl font-bold text-slate-800 hover:text-blue-600 break-all">{EMAIL_ADDRESS}</a>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-slate-400 mr-4 mt-1" />
                    <div>
                        <h3 className="font-bold text-xl text-slate-800 mb-2">Physical Address</h3>
                        <p className="text-slate-600 text-base leading-relaxed">
                            {COMPANY_ADDRESS}
                        </p>
                    </div>
                </div>
            </div>
          </div>

          {/* Business Hours Column */}
          <div className="h-full">
             <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 h-full">
                <h3 className="font-bold text-xl mb-6 text-slate-800">Business Hours</h3>
                <div className="flex items-start">
                    <Clock className="w-6 h-6 text-slate-400 mr-4 mt-1" />
                    <ul className="text-slate-600 text-base space-y-4 w-full">
                        <li className="flex justify-between w-full border-b border-slate-50 pb-2">
                            <span>Monday</span> <span className="font-bold text-green-600">Open 24 hours</span>
                        </li>
                        <li className="flex justify-between w-full border-b border-slate-50 pb-2">
                            <span>Tuesday</span> <span className="font-bold text-green-600">Open 24 hours</span>
                        </li>
                        <li className="flex justify-between w-full border-b border-slate-50 pb-2">
                            <span>Wednesday</span> <span className="font-bold text-green-600">Open 24 hours</span>
                        </li>
                        <li className="flex justify-between w-full border-b border-slate-50 pb-2">
                            <span>Thursday</span> <span className="font-bold text-green-600">Open 24 hours</span>
                        </li>
                        <li className="flex justify-between w-full border-b border-slate-50 pb-2">
                            <span>Friday</span> <span className="font-bold text-green-600">Open 24 hours</span>
                        </li>
                        <li className="flex justify-between w-full border-b border-slate-50 pb-2">
                            <span>Saturday</span> <span className="font-bold text-green-600">Open 24 hours</span>
                        </li>
                        <li className="flex justify-between w-full pb-2">
                            <span>Sunday</span> <span className="font-bold text-green-600">Open 24 hours</span>
                        </li>
                    </ul>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};