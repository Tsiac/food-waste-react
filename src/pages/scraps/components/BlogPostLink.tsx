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
    <div className="pt-1 rounded-xl bg-yellowfade text-green my-2">
      <p>{name}</p>
      <p>12/13/2024 </p>
      <img
        className="mt-1 w-full h-20 object-cover rounded-b-xl"
        src={img}
      ></img>
    </div>
  </Link>  );
};

export default BlogPostLink;
