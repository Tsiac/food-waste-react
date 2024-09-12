import { useEffect } from "react";
import { Header } from "../../components/Header";

import BlogPostLink from "./components/BlogPostLink";

import eggshells from "./assets/eggshells.jfif";
import coffee from "./assets/download.jfif";

export const Scraps = () => {

  useEffect(() => {}, []);

  return (
    <>
      <Header title={"Scraps Help"} />

      <div className="rounded-xl bg-white text-black p-2 mt-4">
        <p>
          See the blog posts below for tips on how to reuse some leftover bits
          and pieces!
        </p>
      </div>
      <BlogPostLink name="Eggshells" img={eggshells} />
      <BlogPostLink name="Coffee" img={coffee} />
    </>
  );
};

export default Scraps;
