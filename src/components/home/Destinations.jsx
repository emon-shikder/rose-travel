import React from 'react';
import { FaRegClock } from 'react-icons/fa6';
import dest1 from '../../assets/images/Rectangle 5.png';
import dest2 from '../../assets/images/Rectangle 6.png';
import dest3 from '../../assets/images/Rectangle 7.png';
import dest4 from '../../assets/images/Rectangle 8.png';
import dest5 from '../../assets/images/Rectangle 9.png';

const destinationsData = [
  {
    id: 1,
    title: 'Santorini, Greece',
    image: dest1,
    price: '$1,200',
    duration: '7 Days',
    description: 'Experience stunning sunsets and iconic white-washed architecture.',
  },
  {
    id: 2,
    title: 'Bali, Indonesia',
    image: dest2,
    price: '$850',
    duration: '5 Days',
    description: 'Relax on beautiful beaches and explore ancient temples.',
  },
  {
    id: 3,
    title: 'Swiss Alps',
    image: dest3,
    price: '$1,500',
    duration: '6 Days',
    description: 'Enjoy world-class skiing and breathtaking mountain views.',
  },
  {
    id: 4,
    title: 'Maldives',
    image: dest4,
    price: '$2,100',
    duration: '5 Days',
    description: 'Unwind in luxury overwater bungalows over crystal waters.',
  },
  {
    id: 5,
    title: 'Kyoto, Japan',
    image: dest5,
    price: '$1,300',
    duration: '8 Days',
    description: 'Discover serene bamboo forests and historic shrines.',
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {destinationsData.map((dest) => (
            <div key={dest.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer border border-base-200">
              <figure className="relative h-40 overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-0.5 rounded-full text-base-content font-bold shadow-sm text-sm">
                  {dest.price}
                </div>
              </figure>
              <div className="card-body p-5">
                <h3 className="card-title text-lg font-bold font-heading leading-tight">{dest.title}</h3>
                <p className="text-sm text-base-content/70 mt-1 mb-2 leading-snug">{dest.description}</p>
                
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-base-200">
                  <div className="flex items-center gap-1.5 text-base-content/70 font-medium text-sm">
                    <FaRegClock className="h-4 w-4" />
                    {dest.duration}
                  </div>
                  <button className="btn btn-ghost btn-sm text-primaryRed hover:text-primaryDark hover:bg-red-50 px-3 font-bold">
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
