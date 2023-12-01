// BlogRecipeSection.js

import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      title: '10 Tips for Perfecting Your Grilling Skills',
      content: 'Master the art of grilling with these expert tips. From choosing the right charcoal to achieving the perfect sear, Chef John Doe shares his secrets to elevate your barbecue game.',
      author: 'Chef John Doe',
      date: 'December 15, 2023',
    },
    {
      title: 'Delicious Holiday Dessert Recipes',
      content: 'Satisfy your sweet tooth this holiday season with these delightful dessert recipes. Chef Jane Smith showcases a variety of festive treats that will impress your guests and leave them craving more.',
      author: 'Chef Jane Smith',
      date: 'December 10, 2023',
    },
    {
      title: 'Behind the Scenes: A Day in the Life of a Culinary Artist',
      content: 'Ever wondered what goes on behind the kitchen doors? Join Chef Alex Johnson on a culinary journey as he provides a glimpse into the hectic yet rewarding life of a professional chef.',
      author: 'Chef Alex Johnson',
      date: 'December 5, 2023',
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto max-w-[1100px]">
        <div className='text-center mb-8'>
          <h2 className="text-5xl font-bold text-white">Chef Tips and <span className='text-orange-500'>Recipes</span> </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.content}</p>
              <p className="text-sm text-gray-500 mb-4">{`By ${post.author} on ${post.date}`}</p>
              <div className="mt-4">
                <a
                  href="#"
                  className="block text-orange-500 hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
