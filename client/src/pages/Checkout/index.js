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
  MinusButton,
  PlusButton,
  QuantityButtons,
  RemoveButton,
} from "./Checkout";

function Checkout() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const maleItems = JSON.parse(localStorage.getItem("MaleCartItems")) || [];
    const femaleItems =
      JSON.parse(localStorage.getItem("FemaleCartItems")) || [];
    const allItems = [...maleItems, ...femaleItems];
    localStorage.setItem("CheckoutItems", JSON.stringify(allItems));
    setCartItems(allItems);
  }, []);

  const removeItem = (itemId) => {
    const updatedItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedItems);
    localStorage.setItem("CheckoutItems", JSON.stringify(updatedItems));
  };

  const updateItemQuantity = (itemId, newQuantity) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedItems);
    localStorage.setItem("CheckoutItems", JSON.stringify(updatedItems));
  };

  const combinedItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, id: item.id, quantity: item.quantity });
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
                <CheckoutTableData>
                  {item.name +
                    (item.reference.startsWith("M") ? " (M)" : " (F)")}
                </CheckoutTableData>
                <CheckoutTableDataQt>{`R$ ${item.price.toFixed(
                  2
                )}`}</CheckoutTableDataQt>
                <CheckoutTableDataQt>
                  <CheckoutTableDataQuantity>
                    <QuantityButtons>
                      <MinusButton
                        onClick={() => {
                          if (item.quantity > 0) {
                            updateItemQuantity(item.id, item.quantity - 1);
                          }
                        }}
                      >
                        -
                      </MinusButton>
                      {item.quantity}
                      <PlusButton
                        onClick={() => {
                          updateItemQuantity(item.id, item.quantity + 1);
                        }}
                      >
                        +
                      </PlusButton>
                    </QuantityButtons>
                  </CheckoutTableDataQuantity>
                </CheckoutTableDataQt>
                <CheckoutTableDataQt>
                  <RemoveButton onClick={() => removeItem(item.id)}>
                    Remover
                  </RemoveButton>
                </CheckoutTableDataQt>
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
