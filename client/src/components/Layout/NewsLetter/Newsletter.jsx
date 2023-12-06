// NewsletterSubscription.js

import React, { useState } from 'react';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    // Implement logic to send the email to your backend for subscription handling
    console.log(`Subscribed with email: ${email}`);
    // You can make an API call to your backend to handle the subscription
    // (e.g., using fetch or axios)
  };

  return (
    <section className="py-16">
      <div className="container mx-auto max-w-[1000px] relative rounded-lg shadow-md text-center"
        style={{
          backgroundImage: "url('/src/assets/catering1.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="p-16 relative z-10 flex flex-col items-center justify-center max-w-[800px] mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-white">Subscribe to Our Newsletter </h2>
          <p className="text-gray-400 mb-14">
            Stay updated on new chefs, promotions, and cooking tips. Don't miss out on the latest culinary experiences!
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 border border-gray-300 rounded-l focus:outline-none w-[400px]"
              value={email}
              onChange={handleEmailChange}
            />
            <button
              className="bg-orange-500 text-white px-4 py-2.5 rounded-r hover:bg-orange-600"
              onClick={handleSubscribe}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscription;
