import styled from "styled-components";

export const CheckoutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const CheckoutTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin: 2rem 0;
`;

export const CheckoutTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const CheckoutTableHead = styled.thead`
  background-color: #f2f2f2;
`;

export const CheckoutTableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

export const CheckoutTableData = styled.td`
  padding: 1rem;
  text-align: left;
`;

export const CheckoutTableDataQt = styled.td`
  padding: 1rem;
  text-align: right;
`;

export const CheckoutTableDataName = styled(CheckoutTableData)`
  width: 20vw;
`;

export const CheckoutTableDataPrice = styled(CheckoutTableData)`
  width: 10vw;
`;

export const CheckoutTableDataQuantity = styled(CheckoutTableData)`
  width: 10vw;
  text-align: right;
`;

export const CheckoutSummary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

export const CheckoutSummaryText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

export const CheckoutSummaryValue = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1rem;
`;

export const CheckoutButton = styled.button`
  background-color: #4caf50;
  border: none;
  border-radius: 15px;
  color: white;
  padding: 1rem 2rem;
  margin-top: 2rem;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    background-color: #3e8e41;
  }
`;

export const DivButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
`;
