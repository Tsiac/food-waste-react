import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { MenuDTO } from "../../dtos/MenuDTO"
import axios from "axios";


import MenuCard from "./components/MenuCard";
import Footer from "../../components/Footer";
// import { useAuth0 } from "@auth0/auth0-react";

function MenuBrowse(){
    // const { user, isAuthenticated, isLoading } = useAuth0();

    const [menus, setMenus] = useState<MenuDTO[]>([]);

    function GetMenus() {
        axios.get("https://localhost:7101/menus")
            .then(res => {
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
                        <MenuCard key={i} dateOffset={i} menuInfo={m}/>
                    )
                })}
            </div>

            <span className="flex justify-start mt-5 mb-2">All upcoming</span>
            <div className="flex mb-4"> 
                {menus.map((m,i) => {
                        return (
                            <MenuCard key={i} dateOffset={i} menuInfo={m}/>
                        )
                    })}
            </div>
            <div className="flex mb-2"> 
                {menus.map((m,i) => {
                        return (
                            <MenuCard key={i} dateOffset={i} menuInfo={m}/>
                        )
                    })}
            </div>
<Footer />
        </>
    )
}

export default MenuBrowse