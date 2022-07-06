import { useState,useEffect,useLayoutEffect } from 'react'
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
    const data = await response.json()
    const {recipes} = data.data;
    setFetchedRecipes(recipes)

  } catch (error) {
    console.log(error)
  }
}

const getLocalStorage=()=>{
  const storage =localStorage.getItem('bookmarks')
  if(storage)setBookmark(JSON.parse(storage))
}

const clearLocalStorage=()=>{
  localStorage.clear('bookmarks')
}


useLayoutEffect(()=>{
getLocalStorage()
clearLocalStorage()
},[])
console.log(bookmark)

const getRecipeDetails =async(id)=>{
  try {
    const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
    const data = await response.json()
    let {recipe} = data.data
    console.log(recipe)
    recipe={
      time: recipe.cooking_time,
      id: recipe.id,
      image: recipe.image_url,
      ingredients: recipe.ingredients,
      title: recipe.title,
      publisher:recipe.publisher,
      servings:recipe.servings,
      source: recipe.source_url
    }
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

const displayBookmark=(id)=>{
 const selectedBookmark = bookmark.filter((item)=>(
  item.id === id)
  )
  console.log(selectedBookmark)
  setRecipeDetails(selectedBookmark[0])
  setRecipeIngredients(selectedBookmark[0].ingredients)
  setRecipeServings(selectedBookmark[0].servings)
}

  return (
    <div className='relative container min-h-[117rem] m-0  bg-bgContainer py-20 px-60'>
   { modal && <AddRecipe modal={modal} setModal={setModal}/>}
    <Navbar modal={modal} setModal={setModal} setSearchDetails={setSearchDetails} currentPage={currentPage} setCurrentPage={setCurrentPage} bookmark={bookmark} setBookmark={setBookmark} displayBookmark={displayBookmark}/>
    <div className='main__section '>
     <SearchResults fetchedRecipes={fetchedRecipes} currentPage={currentPage} setCurrentPage={setCurrentPage} getRecipeDetails={getRecipeDetails}/>
     <section className='main'>
      <RecipeViews recipeDetails={recipeDetails} setRecipeDetails={setRecipeDetails} recipeIngredients={recipeIngredients} setRecipeIngredients={setRecipeIngredients} recipeServings={recipeServings} setRecipeServings={setRecipeServings} bookmark={bookmark} setBookmark={setBookmark} />
      <HowToCook recipeDetails={recipeDetails}/>
    </section>
    </div>
   </div>
  )
}
