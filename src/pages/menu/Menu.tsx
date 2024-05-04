import { Header } from "../../components/Header"
import { Card } from "../homepage/Card"
import people from '../../assets/homepage/people.svg'

import fish from '../../assets/menu/fish-off.svg'
import meat from '../../assets/menu/meat-off.svg'
import veg from '../../assets/menu/veg-off.svg'

import plus from '../../assets/menu/plus-solid.svg'
import minus from '../../assets/menu/minus-solid.svg'

import { useEffect, useState } from "react"
import axios from "axios"

interface Props {}

type MenuDTO = {
  name: string,
  isComplete: boolean
}

function Menu(props: Props){

  const [response, setResponse] = useState(null);
  
  const dto: MenuDTO = {
    name: "Veggie Bonanza",
    username: "Zach",
    isComplete: false,
    isVeg: true
  }

  useEffect(() => {
  // If you want do do some other action after
  // the response is set do it here. This useEffect will only fire
  // when response changes.
  }, [response]); // Makes the useEffect dependent on response.

  function AddMenu() {
    axios.post("https://localhost:7101/menuitems", dto)
      .then(res => {
        console.log(res);

        axios.get("https://localhost:7101/menuitems")
          .then(res => {
            console.log(res);
          });
      })
      .catch(e => {
        console.log(e);
      });
  }

  return (
    <>
        <Header 
            title={"Create your menu"}
        />
        <div className="container bg-yellowfade border rounded-lg">
          <h1 className="text-green font-bold pt-5">This is my menu</h1>

          <Card
            text={"find your people"}
              img={people}
          />
          <Card
            text={"find your people"}
              img={people}
          />
          <Card
            text={"find your people"}
              img={people}
          />
          <Card
            text={"find your people"}
              img={people}
          />

          <div className="container flex justify-between px-5">
                <img className="m-5 h-6 w-6" src={meat} alt="" />
                <img className="m-5 h-6 w-6" src={veg} alt="" />
                <img className="m-5 h-6 w-6" src={fish} alt="" />
                <a onClick={() => AddMenu()}>
                  <img className="m-5 h-6 w-6" src={plus} alt="" />
                </a>
          </div>
        </div>
    </>
  )
}

export default Menu
