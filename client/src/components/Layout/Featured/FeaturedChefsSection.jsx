import React from 'react';
import FeaturedChef from './FeaturedChef';

const FeaturedChefsSection = () => {
  const chefs = [
    {
      name: 'Chef John Doe',
      expertise: 'Italian Cuisine',
      location: 'Mombasa, Kenya',
      imageSrc: '/src/assets/chef2.jpg',
    },
    {
      name: 'Chef Jane Smith',
      expertise: 'Asian Fusion',
      location: 'Nairobi, Kenya',
      imageSrc: '/src/assets/CateringF1.jpg',
    },
    {
        name: 'Chef John Doe',
        expertise: 'Swahili Cuisine',
        location: 'Mombasa, Kenya',
        imageSrc: '/src/assets/CateringF2.jpg',
      },
      {
        name: 'Chef Jane Smith',
        expertise: 'Kikuyu Delicacies',
        location: 'Nakuru, Kenya',
        imageSrc: '/src/assets/chef2.jpg',
      }
  ];

  return (
    <section className=" py-12">
      <div className="container mx-auto max-w-[1100px]">
        <h2 className="text-5xl font-bold text-center mt-12 mb-4 text-white">Featured <span className='text-orange-500'>Chefs</span> </h2>
        <p className="text-center text-gray-500 mb-12 max-w-[900px] mx-auto">
          Meet our talented chefs who bring a world of flavors to your doorstep. Each chef is a culinary artist, ready to create a memorable dining experience for you and your guests. Explore their profiles and discover the perfect chef to elevate your next meal.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {chefs.map((chef, index) => (
            <FeaturedChef key={index} {...chef} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedChefsSection;
