// Hero.js
import React from 'react';
import { FaStar } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="about" className="py-14 md:py-20 max-w-[1100px] mx-auto items-center">
      <div className="container mx-auto md:my-8 md:px-4 lg:px-0 px-4">
      
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2  mt-8 md:mt-0 md:ml-20">
          <h2 className="text-3xl font-bold mb-4">Welcome to Chef Connect</h2>
          <p className="mb-4">
            Discover the best chefs in town and experience delightful cuisines at your doorstep.
          </p>

            <div className="about_info flex justify-center mb-6">
              <div className="text-center mx-4">
                <span className="about_info-title">01+</span>
                <span className="about_info-name block">Years experience</span>
              </div>

              <div className="text-center mx-4">
                <span className="about_info-title">5+</span>
                <span className="about_info-name block">Completed projects</span>
              </div>

              <div className="text-center mx-4">
                <span className="about_info-title">01</span>
                <span className="about_info-name block">Companies worked</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 pb-36 hidden lg:block">

          <div className="relative">
            {/* <div
                className="w-full md:w-5/6 h-[250px] md:max-w-md about_div rounded-2xl"
              /> */}
              <img
                src="/src/assets/chef2.jpg"
                alt="Image"
                className="w-full md:w-5/6 h-[400px] md:max-w-md about_div rounded-2xl"
              />
              
              <img
                src="/src/assets/CateringImg2.png"
                alt="Image"
                className="w-full  h-[250px] md:w-5/6 absolute top-24 left-24 md:mr-[-10%] md:mb-[-17%]  rounded-2xl"
              />
            </div>

            

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
