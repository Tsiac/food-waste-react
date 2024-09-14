import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { MenuDTO } from "../../dtos/MenuDTO";
import axios from "axios";

import MenuCard from "./components/MenuCard";
// import { useAuth0 } from "@auth0/auth0-react";

function MenuBrowse() {
  // const { user, isAuthenticated, isLoading } = useAuth0();

  const [menus, setMenus] = useState<MenuDTO[]>([]);
  const itemRowCount = 3;

  function dateIncrementor(colIndex: number, rowIndex:number) {
    return itemRowCount * colIndex + rowIndex;
  }

  function GetMenus() {
    axios.get("https://food-waste-e3cgb0erb5bnc3am.ukwest-01.azurewebsites.net/menus").then((res) => {
      setMenus(res.data);
    });
  }

  const chunkArray = (array: MenuDTO[], chunkSize: number) => {
    const numberOfChunks = Math.ceil(array.length / chunkSize);

    return [...Array(numberOfChunks)].map((_, index) => {
      return array.slice(index * chunkSize, (index + 1) * chunkSize);
    });
  };

  useEffect(() => {
    GetMenus();
  }, []);

  useEffect(() => {
    console.log(menus);
  }, [menus]);

  return (
    <>
      <Header title={"find a menu"} />
      <span className="flex justify-start mb-2">This week</span>

      {chunkArray(menus, itemRowCount).map((menuChunk, col) => {
        return (
          <div key={col} className="flex mb-4">
            {menuChunk.map((m, row) => {
              return <MenuCard key={row} dateOffset={dateIncrementor(col,row)} menuInfo={m} />;
            })}
          </div>
        );
      })}

      <span className="flex justify-start mt-5 mb-2">All upcoming</span>

      {chunkArray(menus, itemRowCount).map((menuChunk, col) => {
        return (
          <div key={col} className="flex mb-4">
            {menuChunk.map((m, row) => {
              return <MenuCard key={row} dateOffset={dateIncrementor(col,row)} menuInfo={m} />;
            })}
          </div>
        );
      })}
    </>
  );
}

export default MenuBrowse;
