// FeaturedMenus.js

import React from 'react';

const menusData = [
  {
    id: 1,
    title: 'Nyama Choma Delight',
    description: 'Indulge in the rich flavors of Nyama Choma, a traditional Kenyan barbecue dish. Our chef grills premium cuts of meat to perfection, seasoned with a secret blend of Kenyan spices.',
    price: '$30.99',
    chef: 'Chef Wanjiku Njoroge',
    image: '/src/assets/CateringMenu1.png', // Replace with actual image URL
  },
  {
    id: 2,
    title: 'Sukuma Wiki Fusion',
    description: 'Experience the fusion of Sukuma Wiki, a popular Kenyan collard greens dish, with international flavors. Chef Ahmed Ali brings a unique twist to this classic dish, making it a culinary delight.',
    price: '$24.99',
    chef: 'Chef Ahmed Ali',
    image: '/src/assets/CateringMenu6.png', // Replace with actual image URL
  },
  {
    id: 3,
    title: 'Ugali Paradise',
    description: 'Embark on a journey to Ugali Paradise with Chef Amina Odhiambo. Our chef crafts the perfect Ugali, a staple Kenyan dish, served with an array of mouth-watering accompaniments.',
    price: '$22.99',
    chef: 'Chef Amina Odhiambo',
    image: '/src/assets/CateringMenu3..png', // Replace with actual image URL
  },
];

const FeaturedMenus = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-[900px]">
       <div className='text-center'>
       <h2 className="text-5xl font-bold mb-12 text-white">Featured Kenyan Menus</h2>
       </div>
        
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
          {menusData.map((menu) => (
            <div key={menu.id} className="bg-white rounded-lg shadow-md flex">
              {menu.id === 1 && (
                <>
                  <img src={menu.image} alt={menu.title} className="w-[200px] h-[200px] object-cover mr-8 rounded border" />
                  <div className=' border pl-4'>
                    <h3 className="text-xl font-semibold mb-2">{menu.title}</h3>
                    <p className="text-gray-600 mb-4">{menu.description}</p>
                    <p className="text-orange-500 font-semibold">{menu.price}</p>
                    <p className="text-sm text-gray-500 mt-2">{`By ${menu.chef}`}</p>
                  </div>
                </>
              )}
              {menu.id === 2 && (
                <>
                  <div className=' border '>
                    <h3 className="text-xl font-semibold mb-2">{menu.title}</h3>
                    <p className="text-gray-600 mb-4">{menu.description}</p>
                    <p className="text-orange-500 font-semibold">{menu.price}</p>
                    <p className="text-sm text-gray-500 mt-2">{`By ${menu.chef}`}</p>
                  </div>
                  <img src={menu.image} alt={menu.title} className="w-[200px] h-[200px] object-cover ml-8 rounded  border" />
                </>
              )}
              {menu.id === 3 && (
                <>
                  <img src={menu.image} alt={menu.title} className="w-[200px] h-[200px] object-cover mr-8 rounded  border" />
                  <div className=' border'>
                    <h3 className="text-xl font-semibold mb-2">{menu.title}</h3>
                    <p className="text-gray-600 mb-4">{menu.description}</p>
                    <p className="text-orange-500 font-semibold">{menu.price}</p>
                    <p className="text-sm text-gray-500 mt-2">{`By ${menu.chef}`}</p>
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
