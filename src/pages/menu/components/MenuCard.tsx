import chicken from "../assets/chickenpie.jpeg";
import orzo from "../assets/orzo.jpeg";

import fish from "../assets/fish-off.svg";
import meat from "../assets/meat-off.svg";
import veg from "../assets/veg-off.svg";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { MenuDTO } from "../../../dtos/MenuDTO";
import { Link } from "react-router-dom";

const images: Array<string> = [chicken, orzo];

function getRandomIndex() {
  return Math.floor(Math.random() * images.length);
}

function getDate(dateOffset: number = 0) {
  const date = new Date();
  date.setDate(date.getDate() + dateOffset);
  return date.toLocaleDateString("en-GB");
}

type MenuCardProps = {
  dateOffset: number;
  menuInfo: MenuDTO;
};

const MenuCard = ({ dateOffset, menuInfo }: MenuCardProps) => {
  const { user, isAuthenticated } = useAuth0();

  const [isJoined, setIsJoined] = useState<boolean>(false);
  // const [isExpanded, setIsExpanded] = useState<boolean>(false);

  function SubscribeToMenu(id: string) {
    axios
      .get(`https://food-waste-e3cgb0erb5bnc3am.ukwest-01.azurewebsites.net/menus/join/${id}/${user?.custom_username}`)
      .then(() => {
        setIsJoined(true);
      });
  }

  useEffect(() => {
    if (menuInfo.attendees.indexOf(user?.custom_username!) > -1) {
      setIsJoined(true);
    }
  }, []);

  return (
    <>
      <Link to={`/menu/${menuInfo.id}`} className="flex-column w-1/3">
        <div className="relative rounded-lg bg-white p-1 mx-1">
          
          <p className="text-black font-bold inline-block max-w-24 h-14 break-words">
            {menuInfo.username + "'s Menu"}
          </p>
          <span className="text-black inline-block decoration-2">
            {getDate(dateOffset)}
          </span>
          <img
            className="rounded-lg mt-2 size-full max-h-20"
            src={images[getRandomIndex()]}
          ></img>
          <div className="absolute right-0 bottom-0">
            {menuInfo.isVeg ? (
              <img className="my-1 mx-3 h-4 w-4" src={veg} alt="" />
            ) : (
              <p></p>
            )}
            {menuInfo.isMeat ? (
              <img className="my-1 mx-3 h-4 w-4" src={meat} alt="" />
            ) : (
              <p></p>
            )}
            {menuInfo.isFish ? (
              <img className="my-1 mx-3 h-4 w-4" src={fish} alt="" />
            ) : (
              <p></p>
            )}
          </div>
        </div>
        {isAuthenticated && !isJoined && (
          <button
            className="bg-yellow text-sm text-black mt-1 mx-1 bpy-1 px-4 rounded-lg"
            onClick={() => SubscribeToMenu(menuInfo.id)}
          >
            Join Menu
          </button>
        )}
        {isAuthenticated && isJoined && <p>Joined!</p>}
      </Link>
    </>
  );
};

export default MenuCard;
