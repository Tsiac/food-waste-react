import { useEffect, useState } from "react";
import { Header } from "../../components/Header";

import search from "./assets/veg-on.svg";
import BlogPostLink from "./components/BlogPostLink";

import eggshells from "./assets/eggshells.jfif";
import coffee from "./assets/download.jfif";

export const Scraps = () => {
  const [searchInput, setSearchInput] = useState("initial");

  useEffect(() => {}, []);

  return (
    <>
      <Header title={"Scraps Help"} />

      <div className="w-full bg-yellowfade flex">
        <input
          className="w-full h-10"
          type="text"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
        <img className="h-5 w-5 p-1" src={search}></img>
      </div>

      <BlogPostLink name="Eggshells" img={eggshells} />
      <BlogPostLink name="Coffee" img={coffee} />
    </>
  );
};

export default Scraps;
