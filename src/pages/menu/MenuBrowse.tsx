import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { DishDTO } from "../../dtos/MenuDTO"
import axios from "axios";


import fish from '../../assets/menu/fish-off.svg'
import meat from '../../assets/menu/meat-off.svg'
import veg from '../../assets/menu/veg-off.svg'


import chicken from '../../assets/chickenpie.jpeg'
import orzo from '../../assets/orzo.jpeg'


const images: Array<string> = [chicken,orzo]

// const randomIndex: number = 

function getRandomIndex(){
    return Math.floor(Math.random() * images.length);
}

type Menus = {
    id: any,
    username: string,
    name: string,
    isComplete: boolean,
    isMeat: boolean,
    isVeg: boolean,
    isFish: boolean,
    dishes: Array<DishDTO>,
    dateString: string
}

function MenuBrowse(){

    const [menus, setMenus] = useState<Menus[]>([]);

    function GetMenus() {
        axios.get("https://localhost:7101/menuitems")
              .then(res => {
                console.log("get: ",res.data)
                setMenus(res.data);
              });
      }

    useEffect(() => {
        GetMenus();
    }, []);

    
    useEffect(() => {
        console.log(menus);
    }, [menus]);

    return (
        <>
            <Header 
                title={"find a menu"}
            />
            <span className="flex justify-start mb-2">This week</span>
            
            <div className="flex"> 
                {menus.map((m,i) => {
                    return (
                    <div key={i} className="relative rounded-lg bg-yellowfade h-1/5 w-1/3 p-1 mx-2"> 
                        <span className="text-green font-bold inline-block underline decoration-2">11/07/2024</span>
                        <p className="text-green font-bold inline-block max-w-24 truncate">{m.name}</p>
                        <img className="rounded-lg mt-2 size-full max-h-20" src={images[getRandomIndex()]}></img>
                        <div className="absolute right-0 bottom-0">
                            {m.isVeg ? <img className="my-1 mx-3 h-4 w-4" src={veg} alt="" /> : <p></p>}
                            {m.isMeat ? <img className="my-1 mx-3 h-4 w-4" src={meat} alt="" /> : <p></p>}
                            {m.isFish ? <img className="my-1 mx-3 h-4 w-4" src={fish} alt="" /> : <p></p>}
                        </div>
                    </div>
                    )
                })}
            </div>

            <span className="flex justify-start mt-5 mb-2">All upcoming</span>
            <div className="flex mb-4"> 
                <div className="rounded-lg bg-yellowfade h-1/5 w-1/3 p-1 mx-2"> 
                    <span className="text-green font-bold inline-block underline decoration-2">18/08/2024</span>
                    <span className="text-green font-bold inline-block">Zach's Menu</span>
                    <img className="rounded-lg mt-2 size-full max-h-20" src={images[getRandomIndex()]}></img>
                </div>
                
                <div className="rounded-lg bg-yellowfade h-1/5 w-1/3 p-1 mx-2"> 
                    <span className="text-green font-bold inline-block underline decoration-2">19/08/2024</span>
                    <span className="text-green font-bold inline-block">Zach's Menu</span>
                    <img className="rounded-lg mt-2 size-full max-h-20" src={images[getRandomIndex()]}></img>
                </div>
                
                <div className="rounded-lg bg-yellowfade h-1/5 w-1/3 p-1 mx-2"> 
                    <span className="text-green font-bold inline-block underline decoration-2">21/08/2024</span>
                    <span className="text-green font-bold inline-block">Zach's Menu</span>
                    <img className="rounded-lg mt-2 size-full max-h-20" src={images[getRandomIndex()]}></img>
                </div>
            </div>
            <div className="flex"> 
                <div className="rounded-lg bg-yellowfade h-1/5 w-1/3 p-1 mx-2"> 
                    <span className="text-green font-bold inline-block underline decoration-2">22/08/2024</span>
                    <span className="text-green font-bold inline-block">Zach's Menu</span>
                    <img className="rounded-lg mt-2 size-full max-h-20" src={chicken}></img>
                </div>
                
                <div className="rounded-lg bg-yellowfade h-1/5 w-1/3 p-1 mx-2"> 
                    <span className="text-green font-bold inline-block underline decoration-2">24/08/2024</span>
                    <span className="text-green font-bold inline-block">Zach's Menu</span>
                    <img className="rounded-lg mt-2 size-full max-h-20" src={chicken}></img>
                </div>
                
                <div className="rounded-lg bg-yellowfade h-1/5 w-1/3 p-1 mx-2"> 
                    <span className="text-green font-bold inline-block underline decoration-2">01/09/2024</span>
                    <span className="text-green font-bold inline-block">Zach's Menu</span>
                    <img className="rounded-lg mt-2 size-full max-h-20" src={chicken}></img>
                </div>
            </div>
            
            {/* <div id="this-week" className="justify-start flex-row">
                <span>This week</span>
                <div id="this-week-upcoming flex">
                    <div className="flex">
                        
                    </div>
                </div>
            </div> */}

            {/* {people.map((element) => {
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
            })} */}

        </>
    )
}

export default MenuBrowse