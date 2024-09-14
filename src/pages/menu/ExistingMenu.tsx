import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CommentDTO, MenuDTO } from "../../dtos/MenuDTO";
import axios from "axios";
import { Header } from "../../components/Header";

import chicken from "./assets/chickenpie.jpeg";
// import Dish from "./Dish";
// import orzo from "../assets/orzo.jpeg";

import fish from "./assets/fish-off.svg";
import meat from "./assets/meat-off.svg";
import veg from "./assets/veg-off.svg";
import { useAuth0 } from "@auth0/auth0-react";

const ExistingMenu = () => {
  const { getIdTokenClaims, isAuthenticated } = useAuth0();
  const { id } = useParams();

  const [menu, setMenu] = useState<MenuDTO>();
  const [comments, setComments] = useState<CommentDTO[]>([]);
  const [comment, setComment] = useState<string>("");
  const [customUsername, setCustomUsername] = useState("");

  function ParseAndReformatDate(dateString: string) {
    if (dateString === "just now") return dateString;

    var date = new Date(dateString);
    return date.toUTCString();
  }

  function GetMenu() {
    axios.get(`https://food-waste-e3cgb0erb5bnc3am.ukwest-01.azurewebsites.net:7101/menus/${id}`).then((res) => {
      setMenu(res.data);
      setComments(res.data.comments);
      console.log(res.data);
    });
  }

  function SubmitComment() {
    let commentSubmitDTO = {
      name: customUsername,
      comment: comment,
    };
    axios
      .post(`https://food-waste-e3cgb0erb5bnc3am.ukwest-01.azurewebsites.net:7101/menus/comment/${id}`, commentSubmitDTO)
      .then(() => {
        console.log("added comment", comment);

        let currentComments = [...comments];

        let newComment: CommentDTO = {
          id: 0,
          name: customUsername,
          comment: comment,
          dateCreated: "just now",
        };
        currentComments.push(newComment);

        console.log("nc:", newComment);

        setComments(currentComments);
        setComment("");
      });
  }

  useEffect(() => {
    GetMenu();
  }, []);

  useEffect(() => {
    const fetchIdToken = async () => {
      try {
        if (isAuthenticated) {
          const claims = await getIdTokenClaims();
          setCustomUsername(claims?.custom_username!);
        }
      } catch (error) {
        console.error("Error fetching custom name:", error);
      }
    };

    fetchIdToken();
  }, [getIdTokenClaims, isAuthenticated]);

  return (
    <>
      <Header title={"Menu"} callback={"/browse-menus"} />
      <h1 className="text-xl text-yellow">{menu?.name}</h1>
      <p className="text-yellow">{menu?.dateString}</p>
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
      <div className="bg-white text-black w-full rounded-xl my-2 border-4 flex-col">
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

      <div className="bg-white text-black w-full rounded-xl my-2">
        <div className="underline font-bold">Joined Cupboards</div>
        {menu?.attendees.map((name, i) => {
          return (
            <div key={i} className="flex flex-col">
              <div className="flex underline pl-2">{name}</div>
              <div className="flex">
                <ul className="list-disc pl-6">
                  <li>chicken 400g</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white text-black w-full rounded-xl my-2 border-4 border-yellow flex-col">
        <div className="underline font-bold">Comments</div>
        <div className="divide-y">
          {comments &&
            comments.map((comment, i) => {
              return (
                <div key={i}>
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
          {isAuthenticated && (
            <div className="flex w-full">
              <textarea
                onChange={(e) => setComment(e.target.value)}
                className="w-4/5 p-1 h-12"
                rows={2}
                placeholder="Add a new comment..."
                value={comment}
              ></textarea>
              <button
                onClick={() => SubmitComment()}
                className="w-1/5 p-1 h-12 rounded-md text-yellow bg-purple"
              >
                Add
              </button>
            </div>
          )}
          {!isAuthenticated && (
            <p className="p-1 bg-yellow text-purple">
              please log in to comment
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default ExistingMenu;
