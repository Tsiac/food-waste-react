import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MenuDTO } from "../../dtos/MenuDTO";
import axios from "axios";
import { Header } from "../../components/Header";

import chicken from "./assets/chickenpie.jpeg";
import Dish from "./Dish";
// import orzo from "../assets/orzo.jpeg";

import fish from "./assets/fish-off.svg";
import meat from "./assets/meat-off.svg";
import veg from "./assets/veg-off.svg";
import { useAuth0 } from "@auth0/auth0-react";

const ExistingMenu = () => {
  const { user, isAuthenticated } = useAuth0();
  const { id } = useParams();

  const [menu, setMenu] = useState<MenuDTO>();
  const [comment, setComment] = useState<string>("");

  function ParseAndReformatDate(dateString: string) {
    var date = new Date(dateString);

    console.log(date.toUTCString());

    return date.toUTCString();
  }

  function GetMenu() {
    axios.get(`https://localhost:7101/menus/${id}`).then((res) => {
      console.log("menu data", res.data);
      setMenu(res.data);
    });
  }

  function SubmitComment() {
    let commentSubmitDTO = {
      name: user?.sub!,
      comment: comment,
    };
    axios
      .post(`https://localhost:7101/menus/comment/${id}`, commentSubmitDTO)
      .then((res) => {
        console.log("added comment", comment);
        setComment("");
      });
  }

  useEffect(() => {
    GetMenu();
  }, []);

  return (
    <>
      <Header title={"Menu"} callback={"/browse-menus"} />
      <h1 className="text-xl text-yellow underline">{menu?.name}</h1>
      <div className="relative">
        <img src={chicken} className="w-full h-40 rounded-xl my-2"></img>

        <div className="absolute right-0 bottom-0">
          {menu?.isVeg ? (
            <img className="my-1 mx-3 h-4 w-4" src={veg} alt="" />
          ) : (
            <p></p>
          )}
          {menu?.isMeat ? (
            <img className="my-1 mx-3 h-4 w-4" src={meat} alt="" />
          ) : (
            <p></p>
          )}
          {menu?.isFish ? (
            <img className="my-1 mx-3 h-4 w-4" src={fish} alt="" />
          ) : (
            <p></p>
          )}
        </div>
      </div>
      <div className="bg-white text-black w-full rounded-xl my-2 border-4 border-yellow flex-col">
        <div className="underline font-bold">Ingredients List</div>
        <div>
          {menu?.dishes.map((dish, i) => {
            return (
              <div key={i} className="flex-column">
                <div className="text-left underline pl-2">{dish.name}</div>
                {dish.ingredients.map((ing, j) => {
                  return (
                    <div key={j} className="flex">
                      <ul className="list-disc pl-6">
                        <li>
                          {ing.name} {ing.quantity}
                          {ing.counter}
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white text-black w-full rounded-xl my-2 border-4 border-yellow flex-col">
        <div className="underline font-bold">Comments</div>
        <div className="divide-y">
          {menu?.comments.map((comment, i) => {
            return (
              <div>
                <div className="text-left underline text-xs">
                  {ParseAndReformatDate(comment.dateCreated)}
                </div>
                <div className="flex text-left">
                  <div className="w-1/5">{comment.name}:</div>
                  <div className="w-4/5">{comment.comment}</div>
                </div>
              </div>
            );
          })}

          <div className="flex w-full">
            <textarea
              onChange={(e) => setComment(e.target.value)}
              className="w-4/5 p-1 h-12"
              rows="2"
              placeholder="Add a new comment..."
            ></textarea>
            <button
              onClick={() => SubmitComment()}
              className="w-1/5 p-1 h-12 rounded-md text-yellow bg-purple"
            >
              Add
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white text-black w-full rounded-xl my-2 border-4 border-yellow flex-col">
        <div>Add a comment</div>
      </div>
    </>
  );
};

export default ExistingMenu;
