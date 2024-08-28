import { Link } from "react-router-dom"
import profile from "../assets/profile.svg"
import { BackArrow } from "./BackArrow.tsx"

type Props = {
    title: string,
    callback?: string
}

export const Header = ({title, callback = "/"}: Props) => 
    <>
        {title !== "Flavour Saver"  && 
            <BackArrow callback={callback} />
        }

        <div className="flex justify-end h-20 w-auto mx-5 mb-2 ">
            <Link to={callback} className="m-auto ">
                <div >
                    <h1 className="text-4xl font-bold text-yellow">{title}</h1>
                    <h2 className="text-basic">SAVING TASTE FROM WASTE</h2>
                </div>
            </Link>
            <Link to={"/profile"} >
                <img className="object-cover rounded-t-lg h-auto w-20" src={profile} alt="" />
            </Link>
        </div>
    </>




