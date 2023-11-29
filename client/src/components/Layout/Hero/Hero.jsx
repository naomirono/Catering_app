import React from 'react';

const Hero = () => {
  return (
    <section
      id="about"
      className="py-8 mx-auto items-center relative h-[90vh]"
      style={{
        backgroundImage: "url('/src/assets/catering1.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      
      <div className="absolute inset-0 bg-black opacity-90"></div>

      <div className="container max-w-[1100px] mx-auto md:my-8 md:px-4 lg:px-0 px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 mt-8 mb-28 md:mt-0 md:ml-20 text-white">
            <h2 className="text-5xl font-extrabold mb-4">
              Unleash Culinary Magic with Chef Connect
            </h2>
            <p className="text-xl mb-4">
              Dive into a realm of flavors and aromas. Chef Connect brings the finest chefs to your doorstep, turning every meal into a celebration of taste and innovation.
            </p>

            <button className="bg-blue-500 text-white py-2 px-4 mb-12 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
              Get Started
            </button>

            <div className="about_info flex justify-center mb-6">
              <div className="text-center mx-4">
                <h3 className="text-2xl font-bold">1,000+</h3>
                <p>Happy Customers</p>
              </div>

              <div className="text-center mx-4">
                <h3 className="text-2xl font-bold">4.8</h3>
                <p>Average Ratings</p>
              </div>

              <div className="text-center mx-4">
                <h3 className="text-2xl font-bold">200+</h3>
                <p>Chefs Available</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 pb-36 hidden lg:block">
            <div className="relative">
              <img
                src="/src/assets/chef2.jpg"
                alt="Image"
                className="w-full md:w-5/6 h-[500px] md:max-w-md ml-[80px] hero-img"
              />
              <img
                src="/src/assets/Chefbg9.png"
                alt="Image"
                className="w-full h-[200px] md:w-5/6 absolute bottom-[25px] left-[-100px] md:mr-[-10%] md:mb-[-17%]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center z-10 absolute bottom-[-45px] right-[250px]">
  <div className="bg-white bg-opacity-40 backdrop-filter backdrop-blur-l p-4 rounded shadow-lg max-w-[1100px] mx-auto ">
    <h2 className="text-3xl font-bold mb-4">Chef Connect</h2>

    {/* Filters */}
    <div className="flex items-center space-x-4">
      <select
        className=" px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 bg-white bg-opacity-40 backdrop-filter backdrop-blur-l"
      >
        <option value="">Select Cuisine</option>
        {/* Add your cuisine options here */}
      </select>

      <select
        className=" px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 bg-white bg-opacity-40 backdrop-filter backdrop-blur-l"
      >
        <option value="">Select Rating</option>
        {/* Add your rating options here */}
      </select>

      <select
        className=" px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 bg-white bg-opacity-40 backdrop-filter backdrop-blur-l"
      >
        <option value="">Select Availability</option>
        {/* Add your availability options here */}
      </select>

      <input
        type="text"
        placeholder="Enter Location"
        className=" px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 bg-white bg-opacity-40 backdrop-filter backdrop-blur-l"
      />

      {/* Get Started Button */}
      <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
        Search
      </button>
    </div>
  </div>
</div>


    </section>
  );
};

export default Hero;
