import { useState,useEffect } from 'react'
import HowToCook from '../public/components/HowToCook'
import Navbar from '../public/components/Navbar'
import RecipeViews from '../public/components/RecipeViews'
import SearchResults from '../public/Components/SearchResults'
import HomePage from './HomePage'

export default function Home({data}) {
  const [fetchedRecipes, setFetchedRecipes]= useState([])
  
  useEffect(()=>{
    const {recipes} = data;
    console.log(recipes)
    setFetchedRecipes(recipes)
  },[])
  console.log(data)
  console.log(fetchedRecipes)


  return (
    // <div>
    //  <HomePage/>
    // </div>
    <div className='container min-h-[117rem] m-0  bg-bgContainer py-20 px-60'>
    <Navbar/>
    <div className='main__section '>
     <SearchResults fetchedRecipes={fetchedRecipes}/>
     <section className='main'>
      <RecipeViews/>
      <HowToCook/>
    </section>
    </div>
   </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`)
  const data = await res.json()
  return {
    props: {
      data,
    },
  }
}