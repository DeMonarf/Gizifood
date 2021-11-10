import React,{useEffect,useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () =>{
  const APP_ID = 'c358e138';
  const APP_KEY = 'a2fee1e5376dacaa61cec35e4cad3634';

  const [recipes, setRecipe] = useState([])
  const [search,setSearch] = useState('')
  const [query, setQuery] = useState('egg')

  useEffect(async ()=>{
    getRecipe()
  },[query])

  const getRecipe = async () =>{
    const response = await fetch('https://api.edamam.com/api/recipes/v2/?type=public&q='+ query +'&app_id='+ APP_ID +'&app_key='+APP_KEY)
    const data = await response.json();
    setRecipe(data.hits)
    console.log(data.hits)
  }

  const updateSearch = e =>{
    setSearch(e.target.value)
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search)
    setSearch('')
  }
  return(
    <div className='App'>
      <div className='Title'>
      <h1>Gizi&nbsp;</h1><img  src='./1094675.png'/><h1>&nbsp;Food</h1>
      </div>
      <p className='Title-Descrip'>Desired Food Recipe</p>
      <form className='search-form' onSubmit={getSearch}>
        <input className='search-input' type="text" placeholder='Food or Type Food or Ingredients' value={search} onChange={updateSearch}/>
        <button className='search-button' type="Submit">Search</button>
      </form>

      <div className = "recipe">
        {recipes.map(recipe=>(
          <Recipe key={recipe.recipe.label}
                  title={recipe.recipe.label} 
                  calories={recipe.recipe.calories}
                  image={recipe.recipe.image}
                  link={recipe.recipe.url}
                  ingredients={recipe.recipe.ingredients}
                  nutrients={recipe.recipe.totalNutrients}/>
        ))}
      </div>
    </div>
  )
}

export default App;
