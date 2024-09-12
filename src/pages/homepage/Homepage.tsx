import worldveg from "./assets/world-veg.jpg";
import compost from "./assets/compost.jpg";
import recipe from "./assets/recipe.jpg";

import { Header } from "../../components/Header";
import { HomePageCard } from "./HomePageCard";

function HomePage() {
  return (
    <>
      <Header title={"Flavour Saver"} />
      <h2 className="text-basic mt-5">SAVING TASTE FROM WASTE</h2>

      <HomePageCard link={"/browse-menus"} text={"find a menu"} img={worldveg} />
      <HomePageCard link={"/menu"} text={"create your menu"} img={recipe} />
      <HomePageCard link={"/scraps"} text={"scraps help"} img={compost} />
    </>
  );
}

export default HomePage;
