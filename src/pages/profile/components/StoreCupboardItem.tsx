import bin from "../assets/bin.svg";

type StoreCupboardItemProps = {
  id: string;
  ingredient: string;
  quantity: number;
  counter: string;
  counterIndex: number;
  updateItem: Function;
  deleteItem: Function;
  changeValue: Function;
  changeCounter: Function;
};

const StoreCupboardItem = ({
  id,
  ingredient,
  quantity,
  counter,
  updateItem,
  deleteItem,
  changeValue,
  changeCounter,
}: StoreCupboardItemProps) => {
  return (
    <div className="bg-white rounded-xl text-black my-1">
      <div className="flex justify-center">
        <input
          className=" text-black w-4/5 px-1 my-1 text-center"
          type="text"
          onChange={(e) => updateItem(id, e)}
          name="name"
          value={ingredient}
        ></input>
      </div>

      <div className="flex justify-between items-center px-2 align-middle my-1">
        <button
          name="value"
          className="bg-yellow border-black border-2 rounded-xl leading-none w-5 h-5 px-1 my-1"
          onClick={() => changeValue(id, false)}
        >
          -
        </button>
        <input
          className=" text-black w-4/5 px-1 my-1 text-center"
          type="number"
          onChange={(e) => updateItem(id, e)}
          name="quantity"
          value={quantity}
        ></input>
        <button
          className="bg-yellow border-black border-2 rounded-xl leading-none w-5 h-5 px-1 my-1"
          onClick={() => changeValue(id, true)}
        >
          +
        </button>
      </div>

      <div className="flex justify-between items-center px-2 align-middle my-1">
        <button
          className="bg-yellow border-black border-2 rounded-xl leading-none w-5 h-5 px-1 my-1"
          onClick={() => changeCounter(id, false)}
        >
          &lt;
        </button>
        <input
          className=" text-black w-4/5 px-1 my-1 text-center"
          type="text"
          onChange={(e) => updateItem(id, e)}
          name="counter"
          value={counter}
        ></input>
        <button
          className="bg-yellow border-black border-2 rounded-xl leading-none w-5 h-5 px-1 my-1"
          onClick={() => changeCounter(id, true)}
        >
          &gt;
        </button>
      </div>

      <div className="flex justify-center">
        <img
          className="h-5 w-5 my-1"
          onClick={() => deleteItem(id)}
          src={bin}
        ></img>
      </div>
    </div>
    // <div className="rounded-lg bg-white p-1 text-black">
    //     <div className="">

    //         <input
    //           className="w-4/5 my-1"
    //           type="text"
    //           onChange={(e) => updateItem(id,e)}
    //           name="ingredient"
    //           value={ingredient}
    //           placeholder="chicken"
    //         />
    //         <input
    //           className="w-4/5 my-1"
    //           type="text"
    //           onChange={(e) => updateItem(id,e)}
    //           name="quantity"
    //           value={quantity}
    //           placeholder="400"
    //         />
    //         <input
    //           className="w-4/5 my-1"
    //           type="text"
    //           onChange={(e) => updateItem(id,e)}
    //           name="counter"
    //           value={counter}
    //           placeholder="g"
    //         />
    //         <p>delete img</p>
    //         <img src="" className="w-8 h-8"></img>
    //     </div>
    // </div>
  );
};

export default StoreCupboardItem;
