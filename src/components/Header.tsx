import { Link } from "react-router-dom"
import profile from "../assets/profile.svg"
import backArrow from "../assets/chevron-left-solid.svg"

type Props = {
    title: string,
    callback?: string
}

function getCallbackLocationName(callback: string)
{
    let location = callback.substring(1);

    if(location === "")
        return "Home"
    
    return location;
}

export const Header = ({title, callback = "/"}: Props) => 
    <>
        <div className="flex justify-start h-7 w-auto ml-5">
            <Link to={callback}>
                <div className="flex align-middle">
                    <img src={backArrow} className="m-1 h-4 w-4 bg-white"></img>
                    <span>Back to {getCallbackLocationName(callback)}</span>
                </div>
            </Link>
        </div>
        <div className="flex justify-end h-20 w-auto mx-5 mb-2 ">
            <Link to={callback} className="m-auto ">
                <div >
                    <p className="text-2xl font-bold text-yellow">{title}</p>
                </div>
            </Link>
            <Link to={"/profile"} >
                <img className="object-cover rounded-t-lg h-auto w-20" src={profile} alt="" />
            </Link>
        </div>
        
    </>




