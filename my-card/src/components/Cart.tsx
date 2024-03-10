import React from "react";
import { CardItemType } from "./Cards";
import CardItem from "./CardItem";

type Props = {
  cartItems: CardItemType[];
  AddToCard: (clicked: CardItemType) => void;
  removeFromCard: (id: number) => void;
};
const Cart: React.FC<Props> = ({ cartItems, AddToCard, removeFromCard }) => {
  return (
    <div>
      <h2>You shopping Card</h2>
      {cartItems.length === 0 ? <p>No items in card</p> : null}
      {cartItems?.map((item: any) => {
        console.log(item);

        return (
          <CardItem
            item={item}
            key={item.id}
            addToCard={AddToCard}
            removeFromCard={removeFromCard}
          />
        );
      })}
    </div>
  );
};

export default Cart;
