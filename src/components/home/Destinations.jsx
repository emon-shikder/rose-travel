import React from 'react';
import { FaRegClock } from 'react-icons/fa6';
import dest1 from '../../assets/images/Rectangle 5.png';
import dest2 from '../../assets/images/Rectangle 6.png';
import dest3 from '../../assets/images/Rectangle 7.png';

const destinationsData = [
  {
    id: 1,
    title: 'Santorini, Greece',
    image: dest1,
    price: '$1,200',
    duration: '7 Days',
  },
  {
    id: 2,
    title: 'Bali, Indonesia',
    image: dest2,
    price: '$850',
    duration: '5 Days',
  },
  {
    id: 3,
    title: 'Swiss Alps, Switzerland',
    image: dest3,
    price: '$1,500',
    duration: '6 Days',
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-10 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold font-heading text-primaryDark mb-4">Top Destinations</h2>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            Explore our most popular travel spots and discover your next unforgettable adventure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinationsData.map((dest) => (
            <div key={dest.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer border border-base-200">
              <figure className="relative h-64 overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-4 py-1 rounded-full text-base-content font-bold shadow-sm">
                  {dest.price}
                </div>
              </figure>
              <div className="card-body">
                <h3 className="card-title text-2xl font-bold font-heading">{dest.title}</h3>
                
                <div className="flex justify-between items-center mt-6 pt-6 border-t border-base-200">
                  <div className="flex items-center gap-2 text-base-content/70 font-medium">
                    <FaRegClock className="h-5 w-5" />
                    {dest.duration}
                  </div>
                  <button className="btn btn-ghost text-primaryRed hover:text-primaryDark hover:bg-red-50 px-6 font-bold">
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
