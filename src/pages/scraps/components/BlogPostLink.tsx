import { useEffect } from "react";
import { Link } from "react-router-dom";


type BlogPostLinkParams = {
  name: string
  img: string
}


export const BlogPostLink = ({name, img} : BlogPostLinkParams) => {

  
  useEffect(() => {}, []);

  return (

    <Link to={`/blog-post/${name}`}>
    <div className="pt-1 rounded-xl bg-white text-yellow my-2">
      <p className="font-bold text-xl">{name}</p>
      <p className="text-black">13/12/2024 </p>
      <img
        className="mt-1 w-full h-40 object-cover rounded-b-xl"
        src={img}
      ></img>
    </div>
  </Link>  );
};

export default BlogPostLink;
