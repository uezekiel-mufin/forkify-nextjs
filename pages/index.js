import { useState,useEffect } from 'react'
import HowToCook from '../public/components/HowToCook'
import Navbar from '../public/components/Navbar'
import RecipeViews from '../public/components/RecipeViews'
import SearchResults from '../public/Components/SearchResults'
import HomePage from './HomePage'
import AddRecipe from '../public/components/AddRecipe'

export default function Home() {
  const [searchDetails,setSearchDetails]=useState('')
  const [fetchedRecipes, setFetchedRecipes]= useState([])
  const [currentPage, setCurrentPage]=useState(1)
  const [recipeDetails, setRecipeDetails]=useState()
  const [recipeIngredients, setRecipeIngredients]=useState([])
  const [recipeServings, setRecipeServings]=useState(undefined)
  const [modal,setModal]=useState(false)
  const [bookmark,setBookmark]=useState([])
 

console.log(searchDetails)
const getRecipes =async()=>{
  
  try {
    const response =  await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchDetails}`)
    // const response =  await fetch(`https://forkify-api.herokuapp.com/api/v2/recipe?search=${searchDetails}`)
    const data = await response.json()
    const {recipes} = data.data;
    setFetchedRecipes(recipes)

  } catch (error) {
    console.log(error)
  }
}

const getRecipeDetails =async(id)=>{
  try {
    const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
    const data = await response.json()
    let {recipe} = data.data
    recipe={
      time: recipe.cooking_time,
      id: recipe.id,
      image: recipe.image_url,
      ingredients: recipe.ingredients,
      title: recipe.title,
      servings:recipe.servings,
    }
    console.log(recipe)
    setRecipeDetails(recipe)
    setRecipeIngredients(recipe.ingredients)
    setRecipeServings(recipe.servings)
  } catch (error) {
    console.log(error)
  }
}

useEffect(()=>{
  searchDetails && getRecipes()
},[searchDetails])
console.log(fetchedRecipes)

  // useEffect(()=>{
  //   const {recipes} = data;
  //   console.log(recipes)
  //   setFetchedRecipes(recipes)
  // },[])
  // console.log(data)
  // console.log(fetchedRecipes)


  return (
    // <div>
    //  <HomePage/>
    // </div>
    <div className='relative container min-h-[117rem] m-0  bg-bgContainer py-20 px-60'>
   { modal && <AddRecipe modal={modal} setModal={setModal}/>}
    <Navbar modal={modal} setModal={setModal} setSearchDetails={setSearchDetails} currentPage={currentPage} setCurrentPage={setCurrentPage} bookmark={bookmark} setBookmark={setBookmark}/>
    <div className='main__section '>
     <SearchResults fetchedRecipes={fetchedRecipes} currentPage={currentPage} setCurrentPage={setCurrentPage} getRecipeDetails={getRecipeDetails}/>
     <section className='main'>
      <RecipeViews recipeDetails={recipeDetails} setRecipeDetails={setRecipeDetails} recipeIngredients={recipeIngredients} setRecipeIngredients={setRecipeIngredients} recipeServings={recipeServings} setRecipeServings={setRecipeServings} bookmark={bookmark} setBookmark={setBookmark} />
      <HowToCook/>
    </section>
    </div>
   </div>
  )
}

// export async function getStaticProps() {
//   const res = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`)
//   const data = await res.json()
//   return {
//     props: {
//       data,
//     },
//   }
// }