import { Header } from "../../components/Header";

import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import StoreCupboardItem from "./components/StoreCupboardItem";
import axios from "axios";
import { Ingredient2DTO } from "../../dtos/MenuDTO";

function Profile() {
  // const { getIdTokenClaims, user, isAuthenticated, isLoading } = useAuth0();
  const { user, isLoading } = useAuth0();

  // const thisthing: Ingredient2DTO[] = [
  //   {
  //     id: crypto.randomUUID(),  
  //     name: "chicken",
  //     quantity: 400,
  //     counter: "g",
  //     currentCounterIndex: 0,
  //   },
  //   {
  //     id: crypto.randomUUID(),
  //     name: "lemon",
  //     quantity: 1,
  //     counter: "",
  //     currentCounterIndex: 0,
  //   },
  // ];

  const cookingMeasurements = [
    "g", // gram
    "kg", // kilogram
    "ml", // milliliter
    "l", // liter
    "tsp", // teaspoon
    "tbsp", // tablespoon
    "", // blank - i.e. 1 lemon
  ];

  function UpdateCounter(id: string, increase: boolean) {
    const newStoreCupboardItems = storeCupboard.map((item) => {
      if (item.id === id) {
        let valueChange = increase ? 1 : -1;
        let index = item.currentCounterIndex;
        let newIndex = (index + valueChange) % cookingMeasurements.length;

        return {
          ...item,
          counter: cookingMeasurements[newIndex],
          currentCounterIndex: newIndex,
        };
      }

      return item;
    });

    setStoreCupboard(newStoreCupboardItems);
  }

  function UpdateValue(id: string, increase: boolean) {
    const newStoreCupboardItems = storeCupboard.map((item) => {
      if (item.id === id) {
        let directionChange = increase ? 1 : -1;
        let value = Number(item.quantity);
        let newValue = value + 10 * directionChange;

        console.log(id, increase, directionChange, value, newValue)
        return { ...item, quantity: newValue };
      }

      return item;
    });

    setStoreCupboard(newStoreCupboardItems);
  }

  const [storeCupboard, setStoreCupboard] =
    useState<Ingredient2DTO[]>([]);
  // const [customUsername, setCustomUsername] = useState("");

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  function GetUserStoreCupboard() {
    axios.get("https://food-waste-e3cgb0erb5bnc3am.ukwest-01.azurewebsites.net/storecupboard/"+ user?.custom_username!)
          .then(res => {
            console.log(`get ${user?.custom_username!} store cupboard: `,res.data.storeCupboard)
            setStoreCupboard(res.data.storeCupboard);
          });
  }

  function UpdateUserStoreCupboard() {

    axios
      .post("https://food-waste-e3cgb0erb5bnc3am.ukwest-01.azurewebsites.net/storecupboard/" + user?.custom_username!, storeCupboard)
      .then((res) => {
        console.log(`updated ${user?.custom_username!} store cupboard: `, res);
        // setStoreCupboard(res.data);
      });
  }

  function SetStoreCupboardItem(
    id: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const newStoreCupboardItems = storeCupboard.map((item) => {
      if (item.id === id) {
        return { ...item, [event.target.name]: event.target.value };
      }

      return item;
    });

    setStoreCupboard(newStoreCupboardItems);
  }

  function AddNewItem() {
    const newStoreCupboard = [...storeCupboard];

    newStoreCupboard.push({
      id: crypto.randomUUID(),
      quantity: 0,
      counter: "g",
      name: "name",
      currentCounterIndex: 0,
    });

    setStoreCupboard(newStoreCupboard);
  }
  function DeleteItem(id: string) {
    const newStoreCupboard = [...storeCupboard];

    let removed = newStoreCupboard.filter((item) => item.id !== id);

    setStoreCupboard(removed);
  }
  useEffect(() => {
    GetUserStoreCupboard();
    // console.log(user);
  }, []);

  return (
    <>
      <Header title={"Profile"} />

      <h1 className="mt-5 text-2xl font-bold text-yellow">
        YOUR STORE CUPBOARD
      </h1>

      <div className="mt-5 mb-2 grid grid-cols-3 gap-3">
        {storeCupboard &&
          storeCupboard.map((x, i) => {
            return (
              <div key={i}>
                <StoreCupboardItem
                  id={x.id}
                  ingredient={x.name}
                  quantity={x.quantity}
                  counter={x.counter}
                  counterIndex={x.currentCounterIndex}
                  updateItem={SetStoreCupboardItem}
                  deleteItem={DeleteItem}
                  changeCounter={UpdateCounter}
                  changeValue={UpdateValue}
                />
              </div>
            );
          })}

        <div className="text-white rounded-lg p-1 mx-2">
          <div className="">
            <button onClick={() => AddNewItem()}>Add new item</button>
            <img src="" className="w-4/5 h-4/5"></img>
          </div>

          <button className="b-1" onClick={() => UpdateUserStoreCupboard()}>
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default Profile;
