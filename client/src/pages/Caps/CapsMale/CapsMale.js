import styled from "styled-components";

export const BodyContainer = styled.div`
  padding: 20px;
  box-sizing: border-box;
`;

export const CardGrid = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); */
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 20px;
`;

export const Card = styled.div`
  position: relative;
  /* overflow: hidden; */
  cursor: pointer;
  transition: transform 0.2s ease-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

export const CardInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 10px;
`;

export const CardTitle = styled.h3`
  margin: 0;
`;

export const CardPrice = styled.p`
  margin: 0;
`;

export const CardRef = styled.p`
  margin: 0;
`;

export const CardCartButton = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 10px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease-out;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
