import { Header } from "../../components/Header";

import fish_on from "../../assets/menu/fish-on.svg";
import meat_on from "../../assets/menu/meat-on.svg";
import veg_on from "../../assets/menu/veg-on.svg";
import fish_off from "../../assets/menu/fish-off.svg";
import meat_off from "../../assets/menu/meat-off.svg";
import veg_off from "../../assets/menu/veg-off.svg";

import plus from "../../assets/menu/plus-solid.svg";

import { useEffect, useState } from "react";
import axios from "axios";

import {
  MobileDatePicker,
} from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { DishDTO, IngredientDTO, MenuDTO } from "../../dtos/MenuDTO";
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "../../components/Footer";

function Menu() {
  
  const { user, isAuthenticated } = useAuth0();
  
  const [menuName, setMenuName] = useState<string>("");

  const [isFish, setIsFish] = useState<boolean>(false);
  const [isMeat, setIsMeat] = useState<boolean>(false);
  const [isVeg, setIsVeg] = useState<boolean>(false);

  const currentDate = new Date().toDateString();
  const [date, setDate] = useState(dayjs(currentDate));

  const [menuInfo, setMenuInfo] = useState<MenuDTO>({
    id: crypto.randomUUID(),
    username: user?.sub!,
    name: "",
    isComplete: false,
    isVeg: false,
    isMeat: false,
    isFish: false,
    maxAttendees: 1,
    attendees: [
      user?.sub!
    ],
    dishes: [],
    comments: []
  });
  const [dishes, setDishes] = useState<Array<DishDTO>>([]);

  const handleMenuNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMenuName(event.target.value);
  };

  useEffect(() => {
    var newMenu = menuInfo;
    newMenu.name = menuName;
    newMenu.isFish = isFish;
    newMenu.isVeg = isVeg;
    newMenu.isMeat = isMeat;

    setMenuInfo(newMenu);
  }, [menuName, isFish, isVeg, isMeat, dishes]);

  return (
    <>
      <Header title={"Create your menu"} />

      
      {isAuthenticated && <div className="mt-8 container bg-white border rounded-lg text-black font-bold pt-2">
        <div className="flex h-15 justify-evenly p-3">
          <input
            className="w-2/5 text-decoration-line border-b-2 border-green-300 bg-white px-2 focus:outline-none"
            onChange={handleMenuNameChange}
            placeholder="Menu Name"
          ></input>
          <div className="w-2/5">
            <MobileDatePicker
              label="When?"
              value={date}
              onChange={(newVal) => setDate(newVal!)}
              format="DD-MM-YYYY"
            />
          </div>
        </div>

        {dishes.map((dish, i) => {
          return (
            <div className="m-2 py-2 border-y-2 justify-evenly" key={i}>
              <div className="flex justify-evenly p-2">
                <span className="p-2">Dish</span>
                <input
                  className="p-2"
                  type="text"
                  onChange={(e) => setDishName(i, e.target.value)}
                  placeholder="What are you making?"
                />
              </div>

              {dish.ingredients.map((ing, j) => {
                return (
                  <div key={j} className="flex justify-start">
                    <input
                      className="m-2 w-3/5"
                      type="text"
                      name="name"
                      onChange={(e) => setIngredient(i, j, e)}
                      value={ing.name}
                      placeholder="chicken"
                    />
                    <input
                      className="m-2 w-1/5"
                      type="text"
                      name="quantity"
                      onChange={(e) => setIngredient(i, j, e)}
                      value={ing.quantity}
                      placeholder="400"
                    />
                    <input
                      className="m-2 w-1/5"
                      type="text"
                      name="counter"
                      onChange={(e) => setIngredient(i, j, e)}
                      value={ing.counter}
                      placeholder="g"
                    />
                  </div>
                );
              })}

              <div className="flex justify-evenly mt-1">
                <button
                  className="border-solid border-2 rounded-lg p-2"
                  onClick={() => addIngredient(i)}
                >
                  Add ingredient
                </button>
              </div>
            </div>
          );
        })}

        <div className="flex justify-evenly">
          <button
            className="border-solid border-2 rounded-lg p-2"
            onClick={() => addNewDish()}
          >
            Add a new dish
          </button>
          <button
            className="border-solid border-2 rounded-lg p-2"
            onClick={() => addDishToMenu()}
          >
            Submit
          </button>
        </div>

        <div className="container flex justify-between px-5">
          <img
            className="m-5 h-6 w-6"
            src={isMeat ? meat_on : meat_off}
            alt=""
            onClick={() => setMealType(MealType.Meat)}
          />
          <img
            className="m-5 h-6 w-6"
            src={isVeg ? veg_on : veg_off}
            alt=""
            onClick={() => setMealType(MealType.Veg)}
          />
          <img
            className="m-5 h-6 w-6"
            src={isFish ? fish_on : fish_off}
            alt=""
            onClick={() => setMealType(MealType.Fish)}
          />
          <a onClick={() => AddMenu()}>
            <img className="m-5 h-6 w-6" src={plus} alt="" />
          </a>
        </div>
      </div>}
      {!isAuthenticated && <p className="mt-5">Please log in to create a new menu</p>}
      
      <Footer />
    </>
  );
 
  function addNewDish() {
    const dish = {
      id: crypto.randomUUID(),
      name: "",
      ingredients: [],
    };

    let newDishes = [...dishes];
    newDishes.push(dish);

    setDishes(newDishes);
  }

  enum MealType {
    Meat,
    Veg,
    Fish,
  }

  function setMealType(type: MealType) {
    setIsMeat(type === MealType.Meat);
    setIsVeg(type === MealType.Veg);
    setIsFish(type === MealType.Fish);
  }

  function AddMenu() {
    axios
      .post("https://localhost:7101/menus", menuInfo)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function setIngredient(
    dishNumber: number,
    ingredientNumber: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    let newDishes = [...dishes];

    let dto: IngredientDTO = {
      ...newDishes[dishNumber].ingredients[ingredientNumber],
      [event.target.name]: event.target.value,
    };

    newDishes[dishNumber].ingredients[ingredientNumber] = dto;

    setDishes(newDishes);
  }

  function setDishName(dishNumber: number, dishName: string) {
    let newDishes = [...dishes];

    newDishes[dishNumber].name = dishName;

    setDishes(newDishes);
  }

  function addIngredient(dishNumber: number) {
    let newDishes = [...dishes];

    let ingredients = [
      ...newDishes[dishNumber].ingredients,
      {
        id: crypto.randomUUID(),
        name: "",
        quantity: "",
        counter: "",
      },
    ];

    newDishes[dishNumber].ingredients = ingredients;

    setDishes(newDishes);
  }

  function addDishToMenu() {
    console.log(date)
    let dateString = date.format('DD-MM-YYYY');

    let request = {
      ...menuInfo,
      dishes,
      dateString
    }

    console.log("sending: ", request);

    axios
      .post("https://localhost:7101/menus", request)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }
}

export default Menu;
