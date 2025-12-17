import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, DollarSign, ShieldCheck, ArrowRight, Droplets, Wrench, Warehouse } from 'lucide-react';
import { PHONE_DISPLAY, WHATSAPP_NUMBER } from '../constants';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
             <img 
                src="https://picsum.photos/seed/plumbing_hero/1600/900" 
                alt="Plumbing work background" 
                className="w-full h-full object-cover"
            />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-block bg-blue-600/90 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-4">
              PIRB Registered • Based in Benoni
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Respectable Plumbing Services with Heart & Soul.
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light">
              Servicing the entire Gauteng and nationwide. Open 24 hours a day, 7 days a week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`tel:${PHONE_DISPLAY}`}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-center transition shadow-lg flex items-center justify-center gap-2"
              >
                Call Now: {PHONE_DISPLAY}
              </a>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                className="bg-white text-slate-900 hover:bg-slate-100 font-bold py-4 px-8 rounded-lg text-center transition shadow-lg border border-transparent"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-slate-50 py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                    <div className="bg-blue-50 p-3 rounded-full">
                        <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-800">Open 24 Hours</h3>
                        <p className="text-slate-600 text-sm">Available anytime, day or night.</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                    <div className="bg-green-50 p-3 rounded-full">
                        <DollarSign className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-800">Transparent Pricing</h3>
                        <p className="text-slate-600 text-sm">Ethical charging. No overcharging.</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                    <div className="bg-orange-50 p-3 rounded-full">
                        <ShieldCheck className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-800">PIRB Registered</h3>
                        <p className="text-slate-600 text-sm">Accountable to high standards.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Services</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    From emergency repairs to commercial maintenance, we handle all plumbing requirements with precision.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { title: 'Emergency Repairs', icon: Clock, desc: 'Burst pipes and overflowing drains fixed fast.' },
                    { title: 'Leak Detection', icon: Droplets, desc: 'Advanced detection to find leaks without damage.' },
                    { title: 'Commercial Plumbing', icon: Warehouse, desc: 'Maintenance for offices, restaurants, and retail.' },
                    { title: 'Residential Plumbing', icon: Wrench, desc: 'Tap washers, toilets, basins, and showers.' },
                    { title: 'Pipe Replacement', icon: Wrench, desc: 'Copper and plastic pipe repairs and upgrades.' },
                    { title: 'General Maintenance', icon: CheckCircle, desc: 'Regular checks to prevent costly disasters.' },
                ].map((service, idx) => (
                    <div key={idx} className="group p-6 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition duration-300">
                        <service.icon className="w-10 h-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                        <p className="text-slate-600 mb-4">{service.desc}</p>
                        <Link to="/services" className="text-blue-600 font-medium inline-flex items-center hover:underline">
                            Learn more <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <Link to="/services" className="btn-secondary inline-flex items-center font-semibold text-slate-600 border border-slate-300 px-6 py-3 rounded-lg hover:bg-slate-50 transition">
                    View All Services
                </Link>
            </div>
        </div>
      </section>

      {/* Reviews Summary / Why Choose Us */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-6">Overseers of Your Property</h2>
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="bg-blue-600/20 p-2 rounded-lg mt-1 mr-4">
                                <CheckCircle className="w-5 h-5 text-blue-400" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Heart & Soul</h4>
                                <p className="text-slate-400">We respect your property as if it was our own.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-blue-600/20 p-2 rounded-lg mt-1 mr-4">
                                <CheckCircle className="w-5 h-5 text-blue-400" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Honest Business Ethics</h4>
                                <p className="text-slate-400">We protect you from being overcharged.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-blue-600/20 p-2 rounded-lg mt-1 mr-4">
                                <CheckCircle className="w-5 h-5 text-blue-400" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Qualified & Registered</h4>
                                <p className="text-slate-400">PIRB registered for your peace of mind.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-800 p-8 rounded-2xl relative">
                    <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-4 rounded-lg shadow-xl">
                        <span className="text-2xl font-bold">4.9/5</span>
                        <div className="text-xs opacity-90">Google Rating</div>
                    </div>
                    <blockquote className="text-lg text-slate-300 italic mb-6">
                        "Finally a plumber who actually respects my home. They arrived on time in Benoni and fixed the issue without trying to upsell me. Highly recommended."
                    </blockquote>
                    <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-slate-600 flex items-center justify-center font-bold text-slate-300 mr-3">
                            JD
                        </div>
                        <div>
                            <div className="font-bold text-white">James D.</div>
                            <div className="text-sm text-slate-500">Homeowner, Benoni</div>
                        </div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-slate-700">
                        <Link to="/reviews" className="text-blue-400 hover:text-blue-300 font-medium">Read more reviews &rarr;</Link>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Need a Plumber Fast?</h2>
            <p className="text-xl mb-8 text-blue-100">
                Don't let a small leak turn into a big problem. Contact us for fast, reliable assistance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <a 
                href={`tel:${PHONE_DISPLAY}`}
                className="bg-white text-blue-600 hover:bg-slate-100 font-bold py-3 px-8 rounded-lg shadow-md transition"
              >
                Call {PHONE_DISPLAY}
              </a>
              <Link 
                to="/contact"
                className="bg-transparent border-2 border-white text-white hover:bg-blue-700 font-bold py-3 px-8 rounded-lg transition"
              >
                Contact Us
              </Link>
            </div>
        </div>
      </section>
    </div>
  );
};