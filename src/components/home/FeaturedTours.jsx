import React from 'react';
import { FaStar, FaRegClock } from 'react-icons/fa6';
import tour1 from '../../assets/images/Rectangle 8.png';
import tour2 from '../../assets/images/Rectangle 9.png';
import tour3 from '../../assets/images/Rectangle 10.png';

const tours = [
  {
    id: 1,
    title: 'Majestic Paris Experience',
    image: tour1,
    rating: 4.9,
    reviews: 124,
    days: '5 Days',
    price: '$1,899',
  },
  {
    id: 2,
    title: 'Tropical Maldives Escape',
    image: tour2,
    rating: 5.0,
    reviews: 89,
    days: '7 Days',
    price: '$2,450',
  },
  {
    id: 3,
    title: 'Historical Rome Tour',
    image: tour3,
    rating: 4.8,
    reviews: 210,
    days: '4 Days',
    price: '$1,350',
  },
];

const FeaturedTours = () => {
  return (
    <section className="py-12 bg-base-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <span className="text-primaryRed font-bold tracking-wider uppercase text-sm">Exclusive Packages</span>
            <h2 className="text-4xl font-extrabold font-heading text-primaryDark mt-2 mb-4">Our Featured Tours</h2>
            <p className="text-lg text-base-content/70">
              Handpicked destinations with curated itineraries for the most memorable vacations.
            </p>
          </div>
          <button className="btn btn-outline text-primaryRed hover:bg-primaryRed hover:text-white hover:border-primaryRed mt-6 md:mt-0 px-8 rounded-full">
            View All Tours
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div key={tour.id} className="card bg-base-100 shadow-xl overflow-hidden group">
              <figure className="relative h-72 w-full overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="badge badge-error text-white border-none font-bold py-3 px-4 rounded-full shadow-md">
                    Featured
                  </span>
                </div>
              </figure>
              <div className="card-body p-8">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-1 text-accentGold">
                    <FaStar className="h-5 w-5" />
                    <span className="font-bold text-base-content">{tour.rating}</span>
                    <span className="text-base-content/50 text-sm">({tour.reviews} reviews)</span>
                  </div>
                  <div className="text-primaryRed font-bold flex items-center gap-1">
                    <FaRegClock className="h-5 w-5" />
                    {tour.days}
                  </div>
                </div>
                
                <h3 className="card-title text-2xl font-bold font-heading text-primaryDark mt-2 mb-4 hover:text-primaryRed cursor-pointer transition-colors">
                  {tour.title}
                </h3>
                
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-base-200">
                  <div>
                    <span className="text-base-content/50 text-sm block">Starting from</span>
                    <span className="text-2xl font-bold text-primaryRed">{tour.price}</span>
                  </div>
                  <button className="btn bg-primaryRed text-white hover:bg-primaryDark border-none rounded-full px-6">
                    Book Now
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

export default FeaturedTours;
