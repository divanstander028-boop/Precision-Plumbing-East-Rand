import React from 'react';
import { Star, Quote } from 'lucide-react';

export const Reviews: React.FC = () => {
  const reviews = [
    {
      name: "Sarah Jenkins",
      area: "Bedfordview",
      text: "I've used many plumbers over the years, but Precision is the first one to actually show up at the scheduled time. They replaced a geyser for me. Neat work, no mess left behind.",
      rating: 5,
      tag: "Residential"
    },
    {
      name: "Mike Venter",
      area: "Edenvale",
      text: "Called them for a blocked drain at my restaurant. They arrived within an hour and sorted it out before the lunch rush. Professional guys who know their stuff.",
      rating: 5,
      tag: "Commercial"
    },
    {
      name: "Thabo M.",
      area: "Germiston",
      text: "Fair pricing and honest advice. Another plumber told me I needed to replumb the whole bathroom, but these guys found the specific leak and fixed it for a fraction of the cost.",
      rating: 5,
      tag: "Repair"
    },
    {
      name: "Elize Du Preez",
      area: "Boksburg",
      text: "Very polite team. They explained exactly what was wrong with the pressure valve and fixed it quickly. Highly recommended for peace of mind.",
      rating: 4,
      tag: "Maintenance"
    },
    {
      name: "Gavin S.",
      area: "Kempton Park",
      text: "Good workmanship on the pipe installation for our renovation. Communication was excellent throughout the project.",
      rating: 5,
      tag: "Renovation"
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">What Our Clients Say</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Our business is built on reputation. Most of our work comes from repeat clients and referrals.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Review Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 masonry">
            {reviews.map((review, index) => (
                <div key={index} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative shadow-sm hover:shadow-md transition">
                    <Quote className="absolute top-6 right-6 text-blue-100 w-12 h-12" />
                    <div className="flex space-x-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                            <Star 
                                key={i} 
                                className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-slate-300'}`} 
                            />
                        ))}
                    </div>
                    <p className="text-slate-700 mb-6 italic relative z-10 leading-relaxed">
                        "{review.text}"
                    </p>
                    <div className="flex items-center justify-between border-t border-slate-200 pt-4">
                        <div>
                            <p className="font-bold text-slate-900">{review.name}</p>
                            <p className="text-sm text-slate-500">{review.area}</p>
                        </div>
                        <span className="text-xs font-semibold bg-white border border-slate-200 px-3 py-1 rounded-full text-slate-600">
                            {review.tag}
                        </span>
                    </div>
                </div>
            ))}
        </div>

        {/* Review CTA */}
        <div className="mt-16 bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">We Value Your Feedback</h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                We strive for perfection on every job. If you've had a great experience with us, please let us know. If something wasn't right, tell us so we can fix it.
            </p>
            <a 
                href="https://www.google.com/search?sca_esv=6df4517c094a5336&sxsrf=AE3TifMRlpKffCDcK_e81U5pcG5p7gFx6A:1765790020662&q=plumbers+in+benoni&source=lnms&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZMLQ4RPdPjLPmOakFCN7X8EE7njRrb2FMGWExx-5ARS111S0aCk-efbRp5CqCPwW82K9KWsPEXLq0g18YrsAW61hphzWUfI6Zhy3tHgKsuxyFcRzB_3LSw87WJ6zV0p7n56uC3NFmXG3kP5WiQXWv1-ruTes_1gg9mSDfZcLTMMXmxBvi&sa=X&ved=2ahUKEwjOw7e3oL-RAxXOQUEAHV6cAbIQ0pQJegQIGBAB&biw=1366&bih=599&dpr=1&lqi=ChJwbHVtYmVycyBpbiBiZW5vbmlI26Tcr7W0gIAIWhoQABgAGAIiEnBsdW1iZXJzIGluIGJlbm9uaXoGQmVub25pkgEHcGx1bWJlcg#lkt=LocalPoiReviews&rlimm=14665104153352166122&lrd=0x1e953d2c92776f7f:0xcb84ea8746a95aea,3,,,," 
                target="_blank" 
                rel="noreferrer"
                className="inline-block bg-white text-slate-900 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition"
            >
                Leave a Review on Google
            </a>
        </div>
      </div>
    </div>
  );
};