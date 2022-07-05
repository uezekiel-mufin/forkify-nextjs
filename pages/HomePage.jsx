import React from 'react'
import HowToCook from '../public/components/HowToCook'
import Navbar from '../public/components/Navbar'
import RecipeViews from '../public/components/RecipeViews'
import SearchResults from '../public/Components/SearchResults'
const Home = () => {
  return (
    <div className='container min-h-[117rem] m-0  bg-bgContainer py-20 px-60'>
     <Navbar/>
     <div className='main__section '>
      <SearchResults/>
      <section className='main'>
       <RecipeViews/>
       <HowToCook/>
     </section>
     </div>
    </div>
   
  )
}

export default Home