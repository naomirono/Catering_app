import Header from './components/Layout/Header/Header'
import Hero from './components/Layout/Hero/Hero'
import FeaturedChefsSection from './components/Layout/Featured/FeaturedChefsSection'
import HowItWorks from './components/Layout/HowItWorks/HowItWorks'
import Blog from './components/Layout/Blog/Blog'
import FeaturedMenus from './components/Layout/Featured/FeaturedMenu'
import SpecialOccasions from './components/Layout/SpecialOcassion/SpecialOccasion'
import DownloadApp from './components/Layout/Download/Download'
import Newsletter from './components/Layout/NewsLetter/Newsletter'
import ReviewList from './components/Layout/Reviews/Reviews'
import Footer from './components/Layout/Footer/Footer'

function App() {

  return (
    <>
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
      
      </>
  )
}

export default App
