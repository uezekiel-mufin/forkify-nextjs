import React,{useState,useEffect} from 'react'

const AddRecipe = ({modal, setModal}) => {
    
  return (
    <div className=' modal__container'>
        <div className='modal__content flex flex-col bg-white w-3/5  rounded-sm'>
            <span onClick={()=>setModal(false)} className='btn--close-modal'>X</span>
            <form className=''>
                <div className='grid grid-cols-2 gap-24'>
                        <div className='flex flex-col gap-4'>
                         <h3 className='text-start text-[2.25rem] font-bold mb-[1rem]'>Recipe Data</h3>
                         <div className='recipe__input'>
                         <label className='recipe__label'  htmlFor="title" >Title</label><input id='title' type="text" className='text-[1.5rem] py-[0.8rem] px-[1rem] border-2 border-solid border-[#dddddd] rounded-lg trarecipe__input nsition-all duration-200 ease-in-out focus:bg-[#dddddd] focus:border-orange-600'  />
                         </div>
                         <div className='recipe__input'>
                         <label className='recipe__label'  htmlFor="url">Url</label> <input id='url' type="text" className='text-[1.5rem] py-[0.8rem] px-[1rem] border-2 border-solid border-[#dddddd] rounded-lg transition-all duration-200 ease-in-out focus:bg-[#dddddd] focus:border-orange-600'  />
                         </div>
                         <div className='recipe__input'>                        
                         <label className='recipe__label'  htmlFor="image">Image</label> <input id='image' type="text" className='text-[1.5rem] py-[0.8rem] px-[1rem] border-2 border-solid border-[#dddddd] rounded-lg transition-all duration-200 ease-in-out focus:bg-[#dddddd] focus:border-orange-600'  />
                         </div>
                         <div className='recipe__input'>
                         <label  className='recipe__label' htmlFor="publisher">Publisher</label> <input id='publisher' type="text" className='text-[1.5rem] py-[0.8rem] px-[1rem] border-2 border-solid border-[#dddddd] rounded-lg transition-all duration-200 ease-in-out focus:bg-[#dddddd] focus:border-orange-600'  />
                         </div>
                         <div className='recipe__input'>
                          <label  className='recipe__label' htmlFor="prep__time">Prep Time</label> <input id='prep__time' type="text" className='text-[1.5rem] py-[0.8rem] px-[1rem] border-2 border-solid border-[#dddddd] rounded-lg transition-all duration-200 ease-in-out focus:bg-[#dddddd] focus:border-orange-600'  />
                         </div>
                          <div className='recipe__input'>
                          <label  className='recipe__label' htmlFor="servings">Servings</label> <input id='servings' type="text" className='text-[1.5rem] py-[0.8rem] px-[1rem] border-2 border-solid border-[#dddddd] rounded-lg transition-all duration-200 ease-in-outfocus:bg-[#dddddd] focus:border-orange-600'   />
                          </div>
                        </div>

                    <div  className='flex flex-col gap-4'>
                        <h3 className='text-start text-[2.25rem] font-bold mb-[1rem]'>Ingredients</h3>
                        <div className='recipe__input'>
                        <label className='recipe__label' htmlFor="ingredient1">Ingredients 1</label><input id='ingredient1' type="text" className='text-[1.5rem] py-[0.8rem] px-[1rem] border-2 border-solirecipe__input d border-[#dddddd] rounded-lg transition-all duration-200 ease-in-out focus:bg-[#dddddd] focus:border-orange-600'  />
                        </div>
                        <div className='recipe__input'>
                        <label className='recipe__label' htmlFor="ingredient2">Ingredients 2</label><input id='ingredient2' type="text" className='text-[1.5rem] py-[0.8rem] px-[1rem] border-2 border-solirecipe__input d border-[#dddddd] rounded-lg transition-all duration-200 ease-in-out focus:bg-[#dddddd] focus:border-orange-600'  />
                        </div>
                        <div className='recipe__input'>
                        <label className='recipe__label' htmlFor="ingredient3">Ingredients 3</label><input id='ingredient3' type="text" className='text-[1.5rem] py-[0.8rem] px-[1rem] border-2 border-solirecipe__input d border-[#dddddd] rounded-lg transition-all duration-200 ease-in-out focus:bg-[#dddddd] focus:border-orange-600'  />
                        </div>
 
                        <div className='recipe__input'>                      
                         <label className='recipe__label' htmlFor="ingredient4">Ingredients 4</label><input placeholder='format,quantity,unit,description' id='ingredient4' type="text" className='recipe__input text-[1.5rem] py-[0.8rem] px-[1rem] border-2 border-solid border-[#dddddd] rounded-lg transition-all duration-200 ease-in-out focus:bg-[#dddddd] focus:border-orange-600'  />
                        </div>
 
                        <div className='recipe__input'>                       
                        <label className='recipe__label' htmlFor="ingredient5">Ingredients 5</label><input placeholder='format,quantity,unit,description' id='ingredient5' type="text" className='recipe__input text-[1.5rem] py-[0.8rem] px-[1rem] border-2 border-solid border-[#dddddd] rounded-lg transition-all duration-200 ease-in-out focus:bg-[#dddddd] focus:border-orange-600'  />
                        </div>
 
                        <div className='recipe__input'>                     
                          <label className='recipe__label' htmlFor="ingredient6">Ingredients 6</label><input placeholder='format,quantity,unit,description' id='ingredient6' type="text" className='recipe__input text-[1.5rem] py-[0.8rem] px-[1rem] border-2 border-solid border-[#dddddd] rounded-lg transition-all duration-200 ease-in-out focus:bg-[#dddddd] focus:border-orange-600'  />
                        </div>                     
                    </div>
                </div>
            <button className='flex mt-[3rem] text-[1.5rem] font-semibold px-[4rem] py-[1.5rem] bg-bgUploadBtn text-white rounded-[10rem] text-center justify-items-center'>Upload</button>
            </form>
        </div>
        </div>
  )
}

export default AddRecipe