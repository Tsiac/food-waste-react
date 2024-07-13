import { Header } from "../../components/Header"
import { Card } from "../homepage/card"
import people from '../../assets/homepage/people.svg'

import fish_on from '../../assets/menu/fish-on.svg'
import meat_on from '../../assets/menu/meat-on.svg'
import veg_on from '../../assets/menu/veg-on.svg'
import fish_off from '../../assets/menu/fish-off.svg'
import meat_off from '../../assets/menu/meat-off.svg'
import veg_off from '../../assets/menu/veg-off.svg'

import plus from '../../assets/menu/plus-solid.svg'
import minus from '../../assets/menu/minus-solid.svg'

import { useEffect, useState } from "react"
import axios from "axios"

import { Link } from "react-router-dom"

interface Props {}

type MenuDTO = {
  username: string,
  name: string,
  isComplete: boolean,
  isVeg: boolean,
  isMeat: boolean,
  isFish: boolean
}

type IngredientDTO = {
  name: string,
  quantity: number,
  counnter: string
}

type DishDTO = {
  name: string,
  ingredients: IngredientDTO[]
}

function Menu(props: Props){

  const [response, setResponse] = useState<MenuDTO>();

  const [menuName, setMenuName] = useState<string>("");

  const [isFish, setIsFish] = useState<boolean>(false);
  const [isMeat, setIsMeat] = useState<boolean>(false);
  const [isVeg, setIsVeg] = useState<boolean>(false);

  const [dishes, setDishes] = useState<DishDTO[]>([]);
  const [menuInfo, setMenuInfo] = useState<MenuDTO>({
    username: "Zach Ward",
    name: "",
    isComplete: false,
    isVeg: false,
    isMeat: false,
    isFish: false
  });
   
  const [newDishName, setNewDishName] = useState<string>("");



  const handleMenuNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMenuName(event.target.value);
  }

  useEffect(() => {
      var newMenu = menuInfo;
      newMenu.name = menuName;
      newMenu.isFish = isFish;
      newMenu.isVeg = isVeg;
      newMenu.isMeat = isMeat;

      console.log("rerender")
  }, [menuName, isFish, isVeg, isMeat, dishes]);

  function AddMenu() {
    axios.post("https://localhost:7101/menuitems", menuInfo)
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.log(e);
      });
  }

  function AddDish(name: string) {
    const dish = {
      name: name,
      ingredients: []
    };

    let newDishes = [...dishes];
    newDishes.push(dish);

    setDishes(newDishes);
    console.log("add dish", newDishes)
  }


  return (
    <>
        <Header 
            title={"Create your menu"}
        />

        <div className="container bg-yellowfade border rounded-lg text-green font-bold pt-5">
          
          <div className="flex h-15 justify-evenly p-3">
            <p>Menu Name</p>
            <input className="text-decoration-line border-b-2 border-green-300 bg-yellowfade px-2 focus:outline-none" onChange={handleMenuNameChange}></input>
          </div>
          
          <div className="flex m-2 py-2 border-y-2 justify-evenly">
          {dishes.map((dish, i) => {
            return (
              <div key={i} >
                <p className="underline">{dish.name}</p>
                <p>Ing 1</p>
                <p>Ing 1</p>
                <p>Ing 1</p>
                <p>Ing 1</p>
                <button className="border-solid border-2 rounded-full m-2 p-2" onClick={() => AddDish("deesh")}>+</button>
              </div>
            );
          })}
          </div>

          <div>
            <Link to={"/dish"} >
            <button className="border-solid border-2 rounded-lg p-2">Add a new dish</button>
            </Link>

            
            
          </div>

          <div className="container flex justify-between px-5">
                <img className="m-5 h-6 w-6" src={isMeat ? meat_on : meat_off} alt="" onClick={() => setIsMeat(!isMeat)}/>
                <img className="m-5 h-6 w-6" src={isVeg ? veg_on : veg_off} alt="" onClick={() => setIsVeg(!isVeg)}/>
                <img className="m-5 h-6 w-6" src={isFish ? fish_on : fish_off} alt="" onClick={() => setIsFish(!isFish)}/>
                <a onClick={() => AddMenu()}>
                  <img className="m-5 h-6 w-6" src={plus} alt="" />
                </a>
          </div>
        </div>
    </>
  )
}

export default Menu
