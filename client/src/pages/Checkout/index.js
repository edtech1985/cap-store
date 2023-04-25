import React, { useState, useEffect } from "react";
import {
  CheckoutButton,
  CheckoutContainer,
  CheckoutSummary,
  CheckoutSummaryText,
  CheckoutSummaryValue,
  CheckoutTable,
  CheckoutTableData,
  CheckoutTableDataName,
  CheckoutTableDataPrice,
  CheckoutTableDataQt,
  CheckoutTableDataQuantity,
  CheckoutTableHead,
  CheckoutTableRow,
  DivButton,
} from "./Checkout";

function Checkout() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems"));
    if (items) {
      setCartItems(items);
    }
  }, []);

  const combinedItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  const getTotalPrice = () => {
    return combinedItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <>
      <CheckoutContainer>
        <CheckoutTable>
          <CheckoutTableHead>
            <CheckoutTableDataName>Produto</CheckoutTableDataName>
            <CheckoutTableDataPrice>Preço</CheckoutTableDataPrice>
            <CheckoutTableDataQuantity>Quantidade</CheckoutTableDataQuantity>
          </CheckoutTableHead>
          <tbody>
            {combinedItems.map((item) => (
              <CheckoutTableRow key={item.id}>
                <CheckoutTableData>{item.name}</CheckoutTableData>
                <CheckoutTableDataQt>{`R$ ${item.price.toFixed(
                  2
                )}`}</CheckoutTableDataQt>
                <CheckoutTableDataQt>{item.quantity}</CheckoutTableDataQt>
              </CheckoutTableRow>
            ))}
          </tbody>
        </CheckoutTable>
        <CheckoutSummary>
          <CheckoutSummaryText>Total:</CheckoutSummaryText>
          <CheckoutSummaryValue>{`R$ ${getTotalPrice().toFixed(
            2
          )}`}</CheckoutSummaryValue>
        </CheckoutSummary>
        <DivButton>
          <CheckoutButton>Finalizar Compra</CheckoutButton>
        </DivButton>
      </CheckoutContainer>
    </>
  );
}

export default Checkout;
