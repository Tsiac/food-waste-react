import { useEffect, useState } from "react";
import { Header } from "../../components/Header";

type IngredientDTO = {
    name: string,
    quantity: string,
    counter: string
}
export const Dish = () => {

  const [title, setTitle] = useState("")
  const [ingredients, setIngredients] = useState<Array<IngredientDTO>>([])

  useEffect(() => {
  }, []);

  return (
    <>
        <Header 
            title={"Add a dish to your menu"}
            callback="/menu"
        />
        
        <div className="flex justify-evenly p-2">
            <span className="p-2">Dish</span>
            <input 
                className="p-2"
                type="text" 
                onChange={(e) => setTitle(e.target.value)}
                placeholder="What are you making?"
            />
        </div>

        {ingredients.map((ing,i) => {
                    
            return (
            <div key={i} className="flex justify-start py-2">
                
                <input
                    className="m-2 w-3/5"
                    type="text"
                    name="name" 
                    onChange={(e) => setIngredient(i, e)} 
                    value={ing.name}
                    placeholder="chicken"
                />
                <input
                    className="m-2 w-1/5"
                    type="text"
                    name="quantity" 
                    onChange={(e) => setIngredient(i, e)} 
                    value={ing.quantity}
                    placeholder="400"
                />
                <input
                    className="m-2 w-1/5"
                    type="text"
                    name="counter" 
                    onChange={(e) => setIngredient(i, e)} 
                    value={ing.counter}
                    placeholder="g"
                />

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

    function setIngredient(i: number, event: React.ChangeEvent<HTMLInputElement>)
    {
        let newIng = [...ingredients];

        let dto: IngredientDTO = {
            ...newIng[i],
            [event.target.name]: event.target.value
        };
        
        newIng[i] = dto;
        
        setIngredients(newIng);
    }
  
    function addIngredient() {
        setIngredients([...ingredients, {
            name: "",
            quantity: "",
            counter: ""
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
