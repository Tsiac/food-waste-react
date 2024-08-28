import people from "../../assets/homepage/people.svg";
import menu from "../../assets/homepage/menu.svg";
import scraps from "../../assets/homepage/scraps.svg";

import worldveg from "./assets/world-veg.jpg";
import compost from "./assets/compost.jpg";
import recipe from "./assets/recipe.jpg";

import { Header } from "../../components/Header";
import { MenuCard } from "./MenuCard";

function HomePage() {
  return (
    <>
      <Header title={"Flavour Saver"} />

      <MenuCard link={"/browse-menus"} text={"find a menu"} img={worldveg} />
      <MenuCard link={"/menu"} text={"create your menu"} img={recipe} />
      <MenuCard link={"/scraps"} text={"scraps help"} img={compost} />
    </>
  );
}

export default HomePage;
