import { useEffect, useState } from "react";
import { Header } from "../../components/Header";

interface Props {
}

function Dish(props: Props){

  const [title, setTitle] = useState("")
  const [ingredients, setIngredients] = useState([
    {
        ingredientName: "test ingredient",
        ingredientAmount: 500,
        ingredientCounter: "g"
    }
  ])

  useEffect(() => {
  }, []);

  return (
    <>
        <Header 
            title={"Add a dish to your menu"}
            callback="/menu"
        />
        
        <div className="flex justify-evenly p-2">
            <span>Title</span>
            <input type="text" onChange={(e) => setTitle(e.target.value)}></input>
        </div>

        {ingredients.map((ing,i) => {
                    
            return (
            <div key={i} className="flex justify-start py-2">
                
                <input type="text" onChange={(e) => setIngredient(i, e.target.value)} value={ing.ingredientName}></input>
                <span>{ing.ingredientAmount} {ing.ingredientCounter}</span>
            </div>)
        })}

        <div className="flex justify-evenly mt-5">
            <button className="border-solid border-2 rounded-lg p-2" onClick={() => addIngredient()}>
                Add ingredient
            </button>

            <button className="border-solid border-2 rounded-lg p-2" onClick={() => addDishToMenu()}>
                Add Dish to menu
            </button>
        </div>

    </>
  )

  function setIngredient(i: number, ingredientName: string)
  {
    let newIng = [...ingredients];
    newIng[i].ingredientName = ingredientName

    setIngredients(newIng);
  }
  
    function addIngredient() {
        setIngredients([...ingredients, {
            
            ingredientName: "added test ingredient",
            ingredientAmount: 400,
            ingredientCounter: "ml"
        }])
    }

    function addDishToMenu() {
        console.log({
            title,
            ingredients
        })
    }
}


export default Dish
