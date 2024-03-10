import React from "react";
import { CardItemType } from "./Cards";
import { Button } from "@mui/material";

type Props = {
  item: CardItemType;
  addToCard: (clicked: CardItemType) => void;
  removeFromCard: (id: number) => void;
};
const CardItem: React.FC<Props> = ({ item, addToCard, removeFromCard }) => {
  return (
    <div className=" border border-solid border-blue">
      <h3>{item.title}</h3>
      <div className="flex justify-between">
        <p>Price: ${item.price}</p>
        <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
      </div>
      <div className="flex justify-between">
        <Button
          size="small"
          color="success"
          disableElevation
          variant="contained"
          onClick={() => removeFromCard(item.id)}
        >
          -
        </Button>
        <p>{item.amount}</p>
        <Button
          size="small"
          color="success"
          disableElevation
          variant="contained"
          onClick={() => addToCard(item)}
        >
          +
        </Button>
      </div>
      <img src={item.image} alt="" width={"80px"} />
    </div>
  );
};

export default CardItem;
