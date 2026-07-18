import React from 'react';
import { FaPlaneDeparture, FaHotel, FaSuitcaseRolling, FaMapLocationDot } from 'react-icons/fa6';

const services = [
  {
    id: 1,
    title: 'Flight Booking',
    description: 'We offer the best prices on flights to your favorite destinations worldwide.',
    icon: <FaPlaneDeparture className="h-10 w-10 text-primaryRed" />,
  },
  {
    id: 2,
    title: 'Hotel Reservations',
    description: 'Find luxury and comfort with our partnered hotels across the globe.',
    icon: <FaHotel className="h-10 w-10 text-primaryRed" />,
  },
  {
    id: 3,
    title: 'Custom Packages',
    description: 'Tailor-made travel packages designed to fit your unique preferences and budget.',
    icon: <FaSuitcaseRolling className="h-10 w-10 text-primaryRed" />,
  },
  {
    id: 4,
    title: 'Tour Guides',
    description: 'Explore with our expert local guides who know all the hidden gems.',
    icon: <FaMapLocationDot className="h-10 w-10 text-primaryRed" />,
  },
];

const Services = () => {
  return (
    <section className="pt-32 pb-8 bg-white relative z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primaryRed font-bold tracking-wider uppercase text-sm">What We Offer</span>
          <h2 className="text-4xl font-extrabold font-heading text-primaryDark mt-2 mb-4">Our Premium Services</h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            We provide everything you need for a seamless and unforgettable journey. Let us take care of the details.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="card bg-base-100 border border-base-200 hover:border-primaryRed/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group">
              <div className="card-body items-center">
                <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center mb-4 group-hover:bg-primaryRed group-hover:text-white transition-colors duration-300">
                  <div className="group-hover:text-white group-hover:[&>svg]:text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="card-title text-xl font-bold font-heading text-primaryDark">{service.title}</h3>
                <p className="text-base-content/70 mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
