import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa6';
import user1 from '../../assets/images/Group 39.png';
import user2 from '../../assets/images/Group 40.png';

const testimonialsRow1 = [
  { id: 1, name: 'Sarah Jenkins', role: 'Adventure Enthusiast', avatar: user1, rating: 5, content: 'RoseTravel completely exceeded my expectations. The itinerary was perfectly balanced.' },
  { id: 2, name: 'Michael & Emily', role: 'Honeymooners', avatar: user2, rating: 5, content: 'Our honeymoon to the Maldives was absolutely flawless. Highly recommend them!' },
  { id: 3, name: 'David Chen', role: 'Solo Traveler', avatar: user1, rating: 4, content: 'Great experience in Japan. The guides were knowledgeable and very friendly.' },
  { id: 4, name: 'Anna Smith', role: 'Family Trip', avatar: user2, rating: 5, content: 'The best family vacation we ever had. Everything was organized seamlessly.' },
  { id: 5, name: 'Chris Evans', role: 'Photographer', avatar: user1, rating: 5, content: 'Breathtaking locations chosen by RoseTravel. A photographer\'s absolute dream.' },
  { id: 6, name: 'Laura & James', role: 'Couples Retreat', avatar: user2, rating: 5, content: 'A truly romantic and stress-free getaway. We will definitely book again.' },
];

const testimonialsRow2 = [
  { id: 7, name: 'Oliver Twist', role: 'Backpacker', avatar: user1, rating: 4, content: 'Affordable yet luxurious. Found hidden gems thanks to the amazing local guides.' },
  { id: 8, name: 'Sophia Loren', role: 'Foodie', avatar: user2, rating: 5, content: 'The culinary tour in Italy was to die for. Every meal was a new adventure.' },
  { id: 9, name: 'Liam Neeson', role: 'Action Seeker', avatar: user1, rating: 5, content: 'Thrilling excursions and top-notch safety. The Alpine trek was unforgettable.' },
  { id: 10, name: 'Emma Watson', role: 'Culture Lover', avatar: user2, rating: 5, content: 'Immersive cultural experiences that you just can\'t get with typical tours.' },
  { id: 11, name: 'Noah Centineo', role: 'Vlogger', avatar: user1, rating: 4, content: 'Captured amazing footage. The logistics were handled perfectly by the team.' },
  { id: 12, name: 'Mia Wallace', role: 'Relaxation Seeker', avatar: user2, rating: 5, content: 'Five-star spa treatments and beautiful resorts. I came back completely refreshed.' },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="card bg-base-100 shadow-xl border border-base-200 relative w-[240px] md:w-[260px] h-[260px] flex-shrink-0 mx-2 flex flex-col">
    <div className="card-body p-5">
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-1 text-accentGold mt-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <FaStar key={i} className="h-3 w-3" />
          ))}
        </div>
        <div className="bg-primaryRed/10 text-primaryRed p-2 rounded-full">
          <FaQuoteLeft className="h-3 w-3" />
        </div>
      </div>
      
      <p className="text-base-content/80 text-sm italic mb-5 leading-relaxed line-clamp-4 h-[84px]">
        "{testimonial.content}"
      </p>
      
      <div className="flex items-center gap-3">
        <div className="avatar">
          <div className="w-12 h-12 rounded-full border-2 border-primaryRed shadow-sm">
            <img src={testimonial.avatar} alt={testimonial.name} className="object-cover" />
          </div>
        </div>
        <div>
          <h4 className="font-bold text-primaryDark text-base font-heading">{testimonial.name}</h4>
          <span className="text-xs text-base-content/60">{testimonial.role}</span>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-primaryRed/5 opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-accentGold/10 opacity-50 blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-12 px-4">
          <span className="text-primaryRed font-bold tracking-wider uppercase text-sm">Testimonials</span>
          <h2 className="text-4xl font-extrabold font-heading text-primaryDark mt-2 mb-4">What Our Travelers Say</h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Don't just take our word for it. Read the stories of travelers who have experienced the magic of RoseTravel.
          </p>
        </div>
        
        {/* Row 1: Left to Right */}
        <div className="w-full overflow-hidden flex pb-8 pt-4">
          <div className="flex w-max animate-scroll-right hover:[animation-play-state:paused]">
            {/* Original set */}
            {testimonialsRow1.map((t) => <TestimonialCard key={t.id} testimonial={t} />)}
            {/* Duplicated set for seamless loop */}
            {testimonialsRow1.map((t) => <TestimonialCard key={`dup-${t.id}`} testimonial={t} />)}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="w-full overflow-hidden flex pb-8 pt-4">
          <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused]">
            {/* Original set */}
            {testimonialsRow2.map((t) => <TestimonialCard key={t.id} testimonial={t} />)}
            {/* Duplicated set for seamless loop */}
            {testimonialsRow2.map((t) => <TestimonialCard key={`dup-${t.id}`} testimonial={t} />)}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Testimonials;
