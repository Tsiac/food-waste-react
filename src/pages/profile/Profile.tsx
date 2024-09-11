import { Header } from "../../components/Header";

import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "../../components/Footer";
import StoreCupboardItem from "./components/StoreCupboardItem";
import axios from "axios";
import { IngredientDTO } from "../../dtos/MenuDTO";

function Profile(){
  const { getIdTokenClaims, user, isAuthenticated, isLoading } = useAuth0();
  
  const thisthing = [1,2,3,4,5].map((x,i) => {
    const item: IngredientDTO = {
      id: i.toString(),
      name: x.toString(),
      quantity: x.toString(),
      counter: x.toString()
    }
    return item;
  })

  const [storeCupboard, setStoreCupboard] = useState<IngredientDTO[]>(thisthing);
  // const [customUsername, setCustomUsername] = useState("");
  
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  
  // function GetUserStoreCupboard() {
  //   axios.get("https://localhost:7101/storecupboard/"+ user?.sub!)
  //         .then(res => {
  //           console.log(`get {user?.sub!} store cupboard: `,res.data)
  //           setStoreCupboard(res.data);
  //         });
  // }

  function UpdateUserStoreCupboard() {
    console.log('store cupboard: ', storeCupboard)

    axios.post("https://localhost:7101/storecupboard/"+ user?.sub!, storeCupboard)
          .then(res => {
            console.log(`updated {user?.sub!} store cupboard: `,res)
          });
  }

  function SetStoreCupboardItem(id: string, event: React.ChangeEvent<HTMLInputElement>)
  {
    const newStoreCupboardItems = storeCupboard.map(item => {
      if (item.id === id) {
        return {...item, [event.target.name]: event.target.value}
      }

      return item;
    });

    setStoreCupboard(newStoreCupboardItems);
    
  }

  function AddNewItem(){
    const newStoreCupboard = [...storeCupboard];

    newStoreCupboard.push({
      id: storeCupboard.length.toString(),
      quantity: "",
      counter: "",
      name: ""
    })

    setStoreCupboard(newStoreCupboard)
  }

  useEffect(() => {
      // GetUserStoreCupboard();
      console.log('store cupboard: ', storeCupboard)

      console.log(user)
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
      <Header 
          title={"Profile"}
      />

<h1 className="mt-5 text-2xl font-bold text-green">YOUR STORE CUPBOARD</h1>


      {/* add this section to isAuthenticated */}
      <div className="mt-5 mb-2 grid grid-cols-3 gap-3">
        
        {storeCupboard && storeCupboard.map((x,i) => {
          return <div key={i}>
              <StoreCupboardItem
                id={x.id}
                ingredient={x.name}
                quantity={x.quantity}
                counter={x.counter}
                updateItem={SetStoreCupboardItem}
              />
            </div>
            
        })}
        
      <div className="text-green rounded-lg p-1 mx-2 text-black">
        <div className="">
            <button onClick={() => AddNewItem()}>Add new item</button>
            <img src="" className="w-4/5 h-4/5"></img>
        </div>

        <button className="b-1" onClick={() => UpdateUserStoreCupboard()}>Save</button>

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
      <Footer />
    </>
  )
}

export default Profile