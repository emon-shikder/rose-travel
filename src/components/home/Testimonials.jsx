import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa6';
import user1 from '../../assets/images/Group 39.png'; // Using available images as avatars
import user2 from '../../assets/images/Group 40.png';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Adventure Enthusiast',
    avatar: user1,
    content: 'RoseTravel completely exceeded my expectations. The itinerary was perfectly balanced between sightseeing and relaxation. I can\'t wait to book my next trip with them!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael & Emily',
    role: 'Honeymooners',
    avatar: user2,
    content: 'Our honeymoon to the Maldives was absolutely flawless. The RoseTravel team handled every detail, allowing us to just enjoy our special time together without any stress.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-primaryRed/5 opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-accentGold/10 opacity-50 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primaryRed font-bold tracking-wider uppercase text-sm">Testimonials</span>
          <h2 className="text-4xl font-extrabold font-heading text-primaryDark mt-2 mb-4">What Our Travelers Say</h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Don't just take our word for it. Read the stories of travelers who have experienced the magic of RoseTravel.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card bg-base-100 shadow-xl border border-base-200 relative mt-8">
              {/* Quote Icon */}
              <div className="absolute -top-6 left-8 bg-primaryRed text-white p-4 rounded-full shadow-lg">
                <FaQuoteLeft className="h-4 w-4" />
              </div>
              
              <div className="card-body pt-12">
                {/* Rating */}
                <div className="flex gap-1 text-accentGold mt-4 md:mt-0">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="h-4 w-4" />
                  ))}
                </div>
                
                <p className="text-base-content/80 text-lg italic mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className="avatar">
                    <div className="w-14 rounded-full border-2 border-primaryRed shadow-sm">
                      <img src={testimonial.avatar} alt={testimonial.name} className="object-cover" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-primaryDark text-lg font-heading">{testimonial.name}</h4>
                    <span className="text-sm text-base-content/60">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
