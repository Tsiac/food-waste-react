import { Link } from "react-router-dom"
import profile from "../assets/profile.svg"

type Props = {
    title: string
}

export const Header = ({title}: Props) => 
    <>
        <div className="flex justify-end h-20 w-auto m-5">
            <Link to={"/"} className="m-auto">
                <div >
                    <p className="text-2xl font-bold text-yellow">{title}</p>
                </div>
            </Link>
            <Link to={"/profile"} >
                <img className="object-cover rounded-t-lg h-auto w-20" src={profile} alt="" />
            </Link>
        </div>
        
    </>




