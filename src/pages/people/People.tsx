import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { MenuDTO } from "../../dtos/MenuDTO"
import axios from "axios";

import profile from "../../assets/profile.svg"

import fish from '../../assets/menu/fish-off.svg'
import meat from '../../assets/menu/meat-off.svg'
import veg from '../../assets/menu/veg-off.svg'

interface Props {}

function People(props: Props){



    const [people, setPeople] = useState<MenuDTO[]>([]);

    function GetMenus() {
        axios.get("https://localhost:7101/menuitems")
              .then(res => {
                setPeople(res.data);
              });
      }

    useEffect(() => {
        GetMenus();
    }, []);

    
    useEffect(() => {
        console.log(people);
    }, [people]);

    return (
        <>
            <Header 
                title={"People"}
            />
            {people.map((element) => {
                return (
                <div key={element.id} className="container flex rounded-lg bg-yellowfade justify-end h=20 w-auto m-5">
                    <div className="flex-col text-green m-auto">
                        <p className="Menu">{element.username}</p>
                        <p>{element.name}</p>
                        <div className="container flex justify-between px-5">
                            {element.isVeg ? <img className="my-1 mx-3 h-4 w-4" src={veg} alt="" /> : <p></p>}
                            {element.isMeat ? <img className="my-1 mx-3 h-4 w-4" src={meat} alt="" /> : <p></p>}
                            {element.isFish ? <img className="my-1 mx-3 h-4 w-4" src={fish} alt="" /> : <p></p>}
                        </div>
                    </div>
                    <img className="object-cover rounded-t-lg h-auto w-20" src={profile} alt="" />
                </div>)
            })}
        </>
    )
}

export default People