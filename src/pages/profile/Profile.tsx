import { Header } from "../../components/Header";

import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import StoreCupboardItem from "./components/StoreCupboardItem";
import axios from "axios";
import { Ingredient2DTO, IngredientDTO } from "../../dtos/MenuDTO";

function Profile() {
  // const { getIdTokenClaims, user, isAuthenticated, isLoading } = useAuth0();
  const { user, isLoading } = useAuth0();

  // const thisthing = [1, 2, 3, 4, 5].map((x, i) => {
  //   const item: IngredientDTO = {
  //     id: i.toString(),
  //     name: x.toString(),
  //     quantity: x.toString(),
  //     counter: x.toString(),
  //   };
  //   return item;
  // });

  const thisthing: Ingredient2DTO[] = [
    {
      id: "1",
      name: "chicken",
      quantity: 400,
      counter: "g",
    },
    {
      id: "2",
      name: "lemon",
      quantity: 1,
      counter: "",
    }
  ];

  const [storeCupboard, setStoreCupboard] =
    useState<Ingredient2DTO[]>(thisthing);
  // const [customUsername, setCustomUsername] = useState("");

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  // const [index, setIndex] = useState<number>(0);
  // const [value, setValue] = useState<number>(0);
  // const [text, setText] = useState<string>("chicken");

  // function ChangeValueSelection(increase: boolean) {
  //   let directionChange = increase ? 1 : -1;
  //   let newValue = value + 10 * directionChange;
  //   console.log(newValue);
  //   setValue(newValue);
  // }

  // function ChangeMeasurementSelection(
  //   // storeCupboardIndex:number,
  //   // measurementIndex:number,
  //   increase: boolean
  // ) {
  //   let valueChange = increase ? 1 : -1;
  //   let newIndex = (index + valueChange) % cookingMeasurements.length;

  //   setIndex(newIndex);
  // }

  // function GetUserStoreCupboard() {
  //   axios.get("https://localhost:7101/storecupboard/"+ user?.sub!)
  //         .then(res => {
  //           console.log(`get {user?.sub!} store cupboard: `,res.data)
  //           setStoreCupboard(res.data);
  //         });
  // }

  function UpdateUserStoreCupboard() {
    console.log("store cupboard: ", storeCupboard);

    axios
      .post("https://localhost:7101/storecupboard/" + user?.sub!, storeCupboard)
      .then((res) => {
        console.log(`updated {user?.sub!} store cupboard: `, res);
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
      id: storeCupboard.length.toString(),
      quantity: 0,
      counter: "",
      name: "name",
    });

    setStoreCupboard(newStoreCupboard);
  }
  function DeleteItem(id: string){
    const newStoreCupboard = [...storeCupboard];

    let removed = newStoreCupboard.filter(item => item.id !== id)
    
    setStoreCupboard(removed);
  }
  useEffect(() => {
    // GetUserStoreCupboard();
    console.log("store cupboard: ", storeCupboard);

    console.log(user);
  }, [storeCupboard]);

  // useEffect(() => {
  //   const fetchIdToken = async () => {
  //     try {
  //       if (isAuthenticated) {
  //         const claims = await getIdTokenClaims();
  //         setCustomUsername(claims?.custom_username!);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching custom name:', error);
  //     }
  //   };

  //   fetchIdToken();
  // }, [getIdTokenClaims, isAuthenticated]);

  return (
    <>
      <Header title={"Profile"} />

      <h1 className="mt-5 text-2xl font-bold text-yellow">
        YOUR STORE CUPBOARD
      </h1>

      {/* <div className="bg-green mt-2 grid grid-cols-3 gap-3">
        <div className="bg-white rounded-xl text-black my-1">
          <div className="flex justify-center">
            <input
              className=" text-black w-4/5 px-1 my-1 text-center"
              type="text"
              onChange={(e) => setText(e.target.value)}
              name="ingredient"
              value={text}
            ></input>
          </div>

          <div className="flex justify-between items-center px-2 align-middle my-1">
            <button
              className="bg-yellow border-black border-2 rounded-xl leading-none w-5 h-5 px-1 my-1"
              onClick={() => ChangeValueSelection(false)}
            >
              -
            </button>
            <input
              className=" text-black w-4/5 px-1 my-1 text-center"
              type="number"
              onChange={(e) => setValue(Number(e.target.value))}
              name="v"
              value={value}
            ></input>
            <button
              className="bg-yellow border-black border-2 rounded-xl leading-none w-5 h-5 px-1 my-1"
              onClick={() => ChangeValueSelection(true)}
            >
              +
            </button>
          </div>

          <div className="flex justify-between items-center px-2 align-middle my-1">
            <button
              className="bg-yellow border-black border-2 rounded-xl leading-none w-5 h-5 px-1 my-1"
              onClick={() => ChangeMeasurementSelection(false)}
            >
              &lt;
            </button>
            <div className="items-center">{cookingMeasurements[index]}</div>
            <button
              className="bg-yellow border-black border-2 rounded-xl leading-none w-5 h-5 px-1 my-1"
              onClick={() => ChangeMeasurementSelection(true)}
            >
              &gt;
            </button>
          </div>

          <div className="flex justify-center">
            <img className="h-5 w-5 my-1" src={bin}></img>
          </div>
        </div>
      </div> */}

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
                  updateItem={SetStoreCupboardItem}
                  deleteItem={DeleteItem}
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

      {/* {isAuthenticated && 
        <div className="mt-10">
          <p>username: {user!.name}</p>
          <p>nickname: {user!.username}</p>
          <p>email: {user!.email}</p>
          <p>user_id: {user!.sub}</p>
          <p>idToken: {customUsername}</p>
          
        <div>{JSON.stringify(user)}</div>
        </div>}
       */}
    </>
  );
}

export default Profile;
