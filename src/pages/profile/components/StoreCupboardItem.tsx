type StoreCupboardItemProps = {
    id: string,
    ingredient: string,
    quantity: string,
    counter: string,
    updateItem: Function
}

const StoreCupboardItem = ({id, ingredient, quantity, counter, updateItem}: StoreCupboardItemProps) => {

  return (
    <div className="rounded-lg bg-yellowfade p-1 text-black">
        <div className="">
            <input
              className="w-4/5 my-1"
              type="text"
              onChange={(e) => updateItem(id,e)} 
              name="ingredient" 
              value={ingredient}
              placeholder="chicken"
            />
            <input
              className="w-4/5 my-1"
              type="text"
              onChange={(e) => updateItem(id,e)}
              name="quantity" 
              value={quantity}
              placeholder="400"
            />
            <input
              className="w-4/5 my-1"
              type="text"
              onChange={(e) => updateItem(id,e)}
              name="counter" 
              value={counter}
              placeholder="g"
            />
            <p>delete img</p>
            <img src="" className="w-8 h-8"></img>
        </div>
    </div>
    
  );
};

export default StoreCupboardItem;