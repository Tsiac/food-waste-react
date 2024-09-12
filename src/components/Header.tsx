import { Link } from "react-router-dom";
import profile from "../assets/profile.svg";
import { BackArrow } from "./BackArrow.tsx";
import LoginCheck from "./LoginCheck.tsx";
import { useAuth0 } from "@auth0/auth0-react";

type Props = {
  title: string;
  callback?: string;
};

export const Header = ({ title, callback = "/" }: Props) => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      {title !== "Flavour Saver" && (
        <div className="flex flex-row justify-between mb-2">
          <BackArrow callback={callback} />

          <LoginCheck />
        </div>
      )}
      <div className="flex justify-between h-20 w-auto mb-2 items-center">
        <Link to={callback} className="m-auto ">
          <div>
            <h1 className="text-4xl font-bold text-yellow mt-2">{title}</h1>
          </div>
        </Link>
        <Link to={"/profile"}>
          <img
            className="object-cover rounded-lg h-10 w-10"
            src={isAuthenticated ? user?.picture! : profile}
            alt=""
          />
        </Link>
      </div>
    </>
  );
};
