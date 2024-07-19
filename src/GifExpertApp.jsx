import { useState } from "react"
import { AddCategory, GifDrid } from "./components";

export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(["Naruto"])
  
  const onAddCategory = (newCategory) =>{
    if(categories.includes(newCategory)) return;
    //setCategories([...categories, "Valorant"]);
    setCategories([newCategory, ...categories]);
    //setCategories(cat => [...cat, "Valorant"]);
  }

  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/** Input */}
        <AddCategory onNewCategory={onAddCategory} />

        {/* lista de gif */}
        <button onClick={onAddCategory}>Agregar</button>

          {
            categories.map(category => (<GifDrid key={category} category={category}/>)
            )
          }

    </>
  )
}
