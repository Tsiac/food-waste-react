import { Link } from "react-router-dom";
import profile from "../assets/profile.svg";
import { BackArrow } from "./BackArrow.tsx";
import LoginCheck from "./LoginCheck.tsx";
import { useAuth0 } from "@auth0/auth0-react";

type Props = {
  title: string;
  callback?: string;
};


const { user, isAuthenticated } = useAuth0();

export const Header = ({ title, callback = "/" }: Props) => (
    
  
  <>
    {title !== "Flavour Saver" && (
      <div className="flex flex-row justify-between mb-2">
        <BackArrow callback={callback} />

        <LoginCheck />
      </div>
    )}
    <div className="flex justify-between h-20 w-auto mb-2">
      <Link to={callback} className="m-auto ">
        <div>
          <h1 className="text-4xl font-bold text-yellow mt-2">{title}</h1>
        </div>
      </Link>
      <Link to={"/profile"}>
      
      <img
      className="object-cover rounded-t-lg h-auto w-20"
      src={isAuthenticated ? user?.picture! : profile}
      alt=""
    />
      </Link>
    </div>
  </>
);
