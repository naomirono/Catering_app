// FeaturedMenus.js

import React from 'react';

const menusData = [
  
  {
    id: 1,
    title: 'Skewed Chicken Breast',
    description: 'Treat your taste buds to our Skewed Chicken Breast, expertly prepared and grilled to perfection. Chef Sarah Kamau infuses bold flavors, creating a dish thats both succulent and savory.',
    price: '$27.99',
    chef: 'Chef Ahmed Ali',
    image: '/src/assets/CateringMenu6.png', // Replace with actual image URL
  },
  {
    id: 2,
    title: 'Nyama Choma Delight',
    description: 'Indulge in the rich flavors of Nyama Choma, a traditional Kenyan barbecue dish. Our chef grills premium cuts of meat to perfection, seasoned with a secret blend of Kenyan spices.',
    price: '$30.99',
    chef: 'Chef Wanjiku Njoroge',
    image: '/src/assets/CateringMenu1.png', // Replace with actual image URL
  },
  {
    id: 3,
    title: 'Meatballs Spaghetti Extravaganza',
    description: 'Delight in our Meatballs Spaghetti Extravaganza, a culinary masterpiece by Chef Michael Omondi. Enjoy the perfect blend of Italian-inspired spaghetti and savory meatballs, topped with rich tomato sauce.',
    price: '$32.99',
    chef: 'Chef Amina Odhiambo',
    image: '/src/assets/CateringMenu3..png', // Replace with actual image URL
  },
];

const FeaturedMenus = () => {

  const handleViewProfile = (chefName) => {
    // Navigate to the specific chef's profile page or perform any other action
    console.log(`View profile of Chef ${chefName}`);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto max-w-[800px]">
       <div className='text-center mb-14'>
       <h2 className="text-5xl font-bold  text-white">Featured <span className='text-orange-500'>Menus</span></h2>
       </div>
        
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
          {menusData.map((menu) => (
            <div key={menu.id} className="py-2 flex">
              {menu.id === 1 && (
                <>
                  <img src={menu.image} alt={menu.title} className="w-[200px] h-[200px] object-cover mr-8 " />
                  <div style={{ marginLeft: '40px' }}>
                    <h3 className="text-xl font-semibold mb-2 text-white ">{menu.title}</h3>
                    <p className="text-gray-600 mb-4">{menu.description}</p>
                    <p className="text-orange-500 font-semibold">{menu.price}</p>
                    <p className="text-sm text-gray-500 mt-2 hover:text-orange-500" onClick={() => handleViewProfile(menu.chef)}>{`By ${menu.chef}`}</p>
                  </div>
                </>
              )}
              {menu.id === 2 && (
                <>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white ">{menu.title}</h3>
                    <p className="text-gray-600 mb-4">{menu.description}</p>
                    <p className="text-orange-500 font-semibold">{menu.price}</p>
                    <p className="text-sm text-gray-500 mt-2 hover:text-orange-500" onClick={() => handleViewProfile(menu.chef)}>{`By ${menu.chef}`}</p>
                
                  </div>
                  <img src={menu.image} alt={menu.title} className="w-[200px] h-[200px] object-cover ml-8 rounded" />
                </>
              )}
              {menu.id === 3 && (
                <>
                  <img src={menu.image} alt={menu.title} className="w-[200px] h-[200px] object-cover mr-8 rounded" />
                  <div style={{ marginLeft: '40px' }}>
                    <h3 className="text-xl font-semibold mb-2 text-white ">{menu.title}</h3>
                    <p className="text-gray-600 mb-4">{menu.description}</p>
                    <p className="text-orange-500 font-semibold">{menu.price}</p>
                    <p className="text-sm text-gray-500 mt-2 hover:text-orange-500" onClick={() => handleViewProfile(menu.chef)}>{`By ${menu.chef}`}</p>
                    
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenus;
