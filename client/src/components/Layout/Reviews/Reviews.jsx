// src/Review.js
import React from 'react';

const Review = ({ name, image, rating, review }) => {
    return (
        <section className='py-16'>
      <div className="max-w-xl w-full mx-auto p-4 bg-white shadow-md my-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={image} alt={name} className="w-10 h-10 rounded-full mr-4" />
            <div>
              <p className="text-lg font-semibold">{name}</p>
              <div className="flex items-center">
                <span className="text-yellow-500">★</span>
                <span className="ml-1 text-gray-600">{rating}</span>
              </div>
            </div>
          </div>
          <div className="text-yellow-500 font-semibold">{rating}</div>
        </div>
        <p className="mt-4 text-gray-700">{review}</p>
      </div>
      </section>
    );
  };

const chefReviews = [
  {
    name: 'Alice Baker',
    image: 'https://placekitten.com/50/50',
    rating: 4.5,
    review: 'I found an amazing chef through this website! The variety of talented chefs and the ease of the search made my experience delightful.',
  },
  {
    name: 'Charlie Foodie',
    image: 'https://placekitten.com/51/51',
    rating: 5.0,
    review: 'The chef finder website exceeded my expectations. I connected with a skilled chef who prepared a fantastic meal for my event. Highly recommended!',
  },
  {
    name: 'Eva Gourmet',
    image: 'https://placekitten.com/52/52',
    rating: 4.2,
    review: 'As a food enthusiast, I appreciate the high-quality chefs available on this platform. The user-friendly interface makes it easy to discover and hire top-notch culinary talent.',
  },
];

const ReviewList = () => {
  return (
      <div className='max-w-[1100px] mx-auto'>
      <h2 className="text-5xl font-semibold text-center  text-white">Testimonials from Our <span className='text-orange-500'>Clients</span></h2>
    <div className="flex space-x-4">
      {chefReviews.map((review, index) => (
        <Review key={index} {...review} />
      ))}
    </div>
    </div>
  );
};

export default ReviewList;
