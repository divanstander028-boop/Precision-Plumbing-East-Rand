import React from 'react';
import { Wrench, Warehouse, Home, AlertTriangle, Droplets, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: "Emergency Plumbing",
      icon: AlertTriangle,
      color: "text-red-500",
      description: "When disaster strikes, we are just a phone call away. We prioritize emergencies to minimize damage to your property.",
      items: ["Burst pipes", "Blocked drains", "Overflowing toilets", "No hot water", "Geyser failures"]
    },
    {
      title: "Residential Plumbing",
      icon: Home,
      color: "text-blue-500",
      description: "Comprehensive plumbing solutions for your home. We treat your house with respect and get the job done efficiently.",
      items: ["Tap repairs & replacements", "Toilet repairs", "Shower installations", "Appliance connections (washing machines/dishwashers)", "Bathroom renovations"]
    },
    {
      title: "Commercial Plumbing",
      icon: Warehouse,
      color: "text-slate-700",
      description: "Reliable service for businesses, restaurants, and office parks. We understand that plumbing issues affect your bottom line.",
      items: ["Urinal sensors & repairs", "Industrial pipework", "Staff bathroom maintenance", "Grease trap clearing", "Preventative maintenance contracts"]
    },
    {
      title: "Specialized Services",
      icon: Droplets,
      color: "text-cyan-600",
      description: "Advanced plumbing solutions requiring specialized equipment and expertise.",
      items: ["Leak detection", "Water pressure balancing", "Heat pump installation", "Solar geyser maintenance", "Backup water systems"]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Professional solutions for every plumbing need. Honest advice, fair pricing, and quality workmanship guaranteed.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="space-y-8">
          {serviceCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="md:flex">
                <div className="p-8 md:w-2/5 bg-slate-50 border-r border-slate-100 flex flex-col justify-center">
                  <category.icon className={`w-12 h-12 mb-4 ${category.color}`} />
                  <h2 className="text-2xl font-bold text-slate-800 mb-2">{category.title}</h2>
                  <p className="text-slate-600">{category.description}</p>
                </div>
                <div className="p-8 md:w-3/5">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">What we do</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note Box */}
        <div className="mt-12 bg-blue-50 border border-blue-100 rounded-lg p-6 flex items-start space-x-4">
            <Wrench className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
            <div>
                <h4 className="font-bold text-blue-900 mb-1">Honest Advice Policy</h4>
                <p className="text-blue-800 text-sm">
                    We don't promise what we can't deliver. If a job requires specialized structural work or municipal intervention, we will tell you upfront and guide you in the right direction.
                </p>
            </div>
        </div>

        <div className="mt-12 text-center">
            <Link to="/contact" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
                Request a Quote
            </Link>
        </div>
      </div>
    </div>
  );
};