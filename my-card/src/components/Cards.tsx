"use client";
import React, { useState } from "react";
import { Badge, Drawer, Grid, LinearProgress } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import useSWR from "swr";
import Item from "./Item";
import Cart from "./Cart";
export type CardItemType = {
  id: number;
  category: String;
  description: String;
  image: String;
  price: number;
  title: String;
  amount: number;
};
const fetcher = (url: string) => fetch(url).then((res) => res.json());
const Cards = () => {
  const [cardOpen, setCardOpen] = useState(false);
  const [CardItems, setCardItems] = useState([] as CardItemType[]);
  const { data, error, isLoading } = useSWR(
    `https://fakestoreapi.com/products/`,
    fetcher
  );

  const getTotalItem = (items: CardItemType[]) => {
    items.reduce((ack: Number, item) => ack + item.amount, 0);
  };
  const handleAddToCard = (clickedItem: any) => {
    setCardItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev.map((item) => {
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item;
        });
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };
  console.log(CardItems);

  const handleRemoveFromCard = () => null;
  console.log(data);

  if (error) return <div>failed to load</div>;
  if (isLoading)
    return (
      <div>
        <LinearProgress />
      </div>
    );
  return (
    <div>
      <Drawer open={cardOpen} onClose={() => setCardOpen(false)}>
        <Cart
          cartItems={CardItems}
          removeFromCard={handleRemoveFromCard}
          AddToCard={handleAddToCard}
        />
      </Drawer>
      <AddShoppingCart
        className="fixed z-100 right-5 top-5"
        onClick={() => setCardOpen(true)}
      />
      <Badge color="error">
        <AddShoppingCart />
      </Badge>
      <Grid container spacing={3}>
        {data?.map((item: CardItemType) => {
          return (
            <Grid item xs={12} sm={4} key={item.id}>
              <Item item={item} handleAddToCard={handleAddToCard} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Cards;
