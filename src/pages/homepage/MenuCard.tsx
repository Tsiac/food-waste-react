import { Link } from "react-router-dom";

type CardProps = {
  text: string;
  img: string;
  link?: string;
};

export const MenuCard = ({ text, img, link = "/" }: CardProps) => (
  <Link to={link}>
    <div className="relative max-w-xl mx-auto mt-7">
      <img
        className="h-40 w-full object-cover rounded-lg drop-shadow"
        src={img}
      ></img>
      <div className="absolute -inset-0 flex items-end justify-center">
        <h1 className="text-purple font-outline-1 text-3xl font-bold">
          {text}
        </h1>
      </div>
    </div>
  </Link>
);
