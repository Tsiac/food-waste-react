import { Link } from "react-router-dom"

type CardProps = {
    text: string,
    img: string,
    link?: string
}

export const Card = ({text, img, link = "/"}: CardProps) => 
    <>
        <Link to={link} >
            <div className="flex flex-row items-center bg-yellowfade border rounded-lg m-5 h-20 w-auto">
                <div className="flex flex-col justify-between p-2 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-green hover:text-greenhover">{text}</h5>
                </div>
                <img className="object-cover rounded-t-lg h-auto w-24" src={img} alt="" />
            </div>
        </Link>
    </>

