import React from 'react';
import { MapPin, Check, Globe } from 'lucide-react';
import { SERVICE_AREAS } from '../constants';

export const ServiceAreas: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Areas We Serve</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Based in Benoni, servicing the entire Gauteng region and major projects nationwide.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Service List */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <MapPin className="w-6 h-6 text-blue-600 mr-2" />
              Service Reach
            </h2>
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 mb-8">
              <p className="text-slate-600 mb-6">
                We have no limitations. While our head office is in Morehill, Benoni, our teams operate throughout Gauteng and travel for major projects across South Africa.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SERVICE_AREAS.map((area) => (
                  <li key={area} className="flex items-center p-3 bg-slate-50 rounded-lg">
                    <Check className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                    <span className="font-medium text-slate-800">{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 flex items-start space-x-4">
                <Globe className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <div>
                    <h3 className="font-bold text-blue-900 mb-2">Nationwide Availability</h3>
                    <p className="text-blue-800 text-sm">
                        For larger projects, we work as far as Cape Town, Eastern Cape, Northern Cape, and the Free State. Contact us to discuss your requirements.
                    </p>
                </div>
            </div>
          </div>

          {/* Map Visual */}
          <div className="h-full min-h-[400px] bg-slate-200 rounded-xl overflow-hidden relative shadow-inner border border-slate-300">
             <iframe 
               className="absolute inset-0 w-full h-full border-0"
               title="Precision Plumbing Location"
               src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=23%20Phoenix%20Ave,%20Morehill,%20Benoni,%201501+(Precision%20Plumbing%20East%20Rand)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
               allowFullScreen
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
};