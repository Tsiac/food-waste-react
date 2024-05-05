import { Header } from "../../components/Header"
import { Card } from "../homepage/Card"
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

interface Props {}

type MenuDTO = {
  username: string,
  name: string,
  isComplete: boolean,
  isVeg: boolean,
  isMeat: boolean,
  isFish: boolean
}

function Menu(props: Props){

  const [response, setResponse] = useState<MenuDTO>();

  const [menuName, setMenuName] = useState<string>("");

  const [isFish, setIsFish] = useState<boolean>(false);
  const [isMeat, setIsMeat] = useState<boolean>(false);
  const [isVeg, setIsVeg] = useState<boolean>(false);

  const [menuInfo, setMenuInfo] = useState<MenuDTO>({
    username: "Zach Ward",
    name: "",
    isComplete: false,
    isVeg: false,
    isMeat: false,
    isFish: false
  });
   
  const handleMenuNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMenuName(event.target.value);
  }

  useEffect(() => {
      var newMenu = menuInfo;
      newMenu.name = menuName;
      newMenu.isFish = isFish;
      newMenu.isVeg = isVeg;
      newMenu.isMeat = isMeat;

      console.log("menu: ", newMenu);
  }, [menuName, isFish, isVeg, isMeat]);

  function AddMenu() {
    axios.post("https://localhost:7101/menuitems", menuInfo)
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


        <div className="container bg-yellowfade border rounded-lg text-green font-bold pt-5">
          
          <div className="flex h-15 justify-between p-3 ">
            <p>Menu Name</p>
            <input className="text-decoration-line border border-green-300 rounded-lg px-2 focus:outline-none" onChange={handleMenuNameChange}></input>
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
