import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
`;

export const StyledIconList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;

export const StyledIconItem = styled.li`
  margin-right: 1rem;
  list-style-type: none;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    color: gray;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const StyledRightsReserved = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

export const StyledDevelopedBy = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;
