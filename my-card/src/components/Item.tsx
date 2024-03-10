import { Button } from "@mui/material";
import React from "react";
type Props = {
  item: any;
  handleAddToCard: any;
};
const Item: React.FC<Props> = ({ item, handleAddToCard }) => {
  return (
    <div className="flex justify-between flex-col w-full border border-solid border-blue rounded-[20px] h-full  ">
      <img
        className="max-h-60 object-cover"
        style={{ borderRadius: "0 0 20px 20px" }}
        src={item.image}
        alt={item.title}
      />
      <div className="p-4 h-full">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      <Button
        style={{ borderRadius: "0 0 20px 20px" }}
        onClick={() => handleAddToCard(item)}
      >
        Add to card
      </Button>
    </div>
  );
};

export default Item;
