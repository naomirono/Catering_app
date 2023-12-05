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
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p className="text-gray-600 mb-4">
        Stay updated on new chefs, promotions, and cooking tips. Don't miss out on the latest culinary experiences!
      </p>
      <div className="flex items-center">
        <input
          type="email"
          placeholder="Your Email"
          className="p-2 border border-gray-300 rounded-l focus:outline-none"
          value={email}
          onChange={handleEmailChange}
        />
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded-r hover:bg-orange-600"
          onClick={handleSubscribe}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
