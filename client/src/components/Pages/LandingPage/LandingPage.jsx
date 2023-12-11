import React from 'react'
import Header from '../../Layout/Header/Header'
import Hero from '../../Layout/Hero/Hero';
import FeaturedChefsSection from '../../Layout/Featured/FeaturedChefsSection'
import HowItWorks from '../../Layout/HowItWorks/HowItWorks'
import Blog from '../../Layout/Blog/Blog'
import FeaturedMenus from '../../Layout/Featured/FeaturedMenu'
import SpecialOccasions from '../../Layout/SpecialOcassion/SpecialOccasion'
import DownloadApp from '../../Layout/Download/Download'
import Newsletter from '../../Layout/NewsLetter/Newsletter'
import ReviewList from '../../Layout/Reviews/Reviews'
import Footer from '../../Layout/Footer/Footer';

function LandingPage() {
  return (
    <div>
      <Header/>
      <Hero/>
      <HowItWorks/>
      <FeaturedChefsSection/>
      <FeaturedMenus/>
      <Blog/>
      <SpecialOccasions/>
      <DownloadApp/>
      <Newsletter/>
      <ReviewList/>
      <Footer/>
    </div>
  )
}

export default LandingPage
