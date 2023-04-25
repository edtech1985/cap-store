import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import {
  BodyContainer,
  Card,
  CardCartButton,
  CardGrid,
  CardImage,
  CardInfo,
  CardPrice,
  CardRef,
  CardTitle,
} from "./CapsFemale.js";
import caps from "../../../db/femaledb.json";

function CapsMale() {
  const [femaleCartItems, setFemaleCartItems] = useState([]);

  const handleAddToCart = (item) => {
    const existingItem = femaleCartItems.find((i) => i.id === item.id);
    if (existingItem) {
      // atualizar quantidade
      const updatedCartItems = femaleCartItems.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      );
      setFemaleCartItems(updatedCartItems);
      localStorage.setItem("FemaleCartItems", JSON.stringify(updatedCartItems));
    } else {
      // adicionar novo item com quantidade igual a 1
      const newItem = { ...item, quantity: 1 };
      setFemaleCartItems([...femaleCartItems, newItem]);
      localStorage.setItem(
        "FemaleCartItems",
        JSON.stringify([...femaleCartItems, newItem])
      );
    }
  };

  return (
    <BodyContainer>
      <CardGrid>
        {caps.caps.map((cap) => (
          <Card key={cap.id}>
            <CardImage src={cap.image_url} alt={cap.name} />
            <CardInfo>
              <CardTitle>{cap.name}</CardTitle>
              <CardPrice>{`R$ ${cap.price.toFixed(2)}`}</CardPrice>
              <CardRef>{`Ref: ${cap.reference}`}</CardRef>
            </CardInfo>
            <CardCartButton onClick={() => handleAddToCart(cap)}>
              <FaShoppingCart />
            </CardCartButton>
          </Card>
        ))}
      </CardGrid>
    </BodyContainer>
  );
}

export default CapsMale;
