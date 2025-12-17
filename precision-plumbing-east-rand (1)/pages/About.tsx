import React from 'react';
import { Shield, Users, MapPin, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-20">
       {/* Simple Hero */}
       <div className="relative bg-slate-900 py-24 px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Respect Your Property</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Qualified, accountable, and transparent plumbing services based in Benoni.
            </p>
       </div>

       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100">
                <div className="prose prose-lg text-slate-600 mx-auto">
                    <p className="lead text-xl text-slate-800 font-medium mb-6">
                        Based in Benoni, we service the entire Gauteng region, having no limitations, and working as far as Cape Town, Eastern Cape, Northern Cape, Free State, and more.
                    </p>
                    <p className="mb-6">
                        Precision Plumbing delivers a respectable service where we become overseers of your property. Our motto is:
                    </p>
                    <blockquote className="border-l-4 border-blue-600 pl-4 italic text-slate-800 font-semibold mb-6">
                        "We believe by putting our heart and soul in respecting your property as if it was our own"
                    </blockquote>
                    <p className="mb-6">
                        Qualified in the technical field of plumbing, our company is registered with <strong>PIRB (Plumbing Industry Registration Board)</strong>. This makes us accountable to higher organizations that maintain the quality of workmanship in this country.
                    </p>
                    <p>
                        Our trade strives to protect you as the consumer. Precision Plumbing believes in honest business ethics, maintaining a transparent charging system to protect the consumer from being overcharged for services.
                    </p>
                </div>
            </div>
       </div>

       {/* Values */}
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Why Choose Precision Plumbing?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-6">
                    <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Award className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">PIRB Registered</h3>
                    <p className="text-slate-600">
                        We are accountable for our workmanship and adhere to national standards.
                    </p>
                </div>
                <div className="p-6">
                    <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                        <MapPin className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">No Limitations</h3>
                    <p className="text-slate-600">
                        Based in Benoni but servicing Gauteng and beyond. We go where you need us.
                    </p>
                </div>
                <div className="p-6">
                    <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Users className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Heart & Soul</h3>
                    <p className="text-slate-600">
                        We treat your property with the utmost respect, exactly as if it were our own.
                    </p>
                </div>
            </div>
            
            <div className="text-center mt-12">
                <Link to="/contact" className="text-blue-600 font-bold hover:text-blue-800 text-lg">
                    Speak to the team &rarr;
                </Link>
            </div>
       </div>
    </div>
  );
};