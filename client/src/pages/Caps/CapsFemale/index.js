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
import caps from "../../../db/female.json";

function CapsMale() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
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
