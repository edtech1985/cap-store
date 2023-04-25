import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: black;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  width: 100vw;
  max-height: 100px;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  font-size: 900;
  color: black;
`;

export const StyledLogo = styled.img`
  width: 100px;
  height: 100px;
`;

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledNavItem = styled.a`
  display: block;
  padding: 1rem;
  color: #fff;
  text-decoration: none;
  font-size: large;

  &:hover {
    background-color: #555;
    border-radius: 10px;
  }
`;

export const StyledDropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: black;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 10px;
  &:hover {
    display: block;
  }
`;

export const StyledDropdown = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${StyledDropdownContent} {
    display: block;
    background-color: black;
  }
`;

export const StyledCartDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const StyledAvatar = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
`;

export const StyledAvatarImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const StyledCart = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
`;

export const StyledCartIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 50%;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

export const StyledCartCount = styled.div`
  margin-left: 0.25rem;
  font-size: 0.8rem;
  font-weight: bold;
  color: black;
  font-size: medium;
`;
