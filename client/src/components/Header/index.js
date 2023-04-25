import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";
import {
  StyledHeader,
  StyledLogo,
  StyledNavbar,
  StyledNavItem,
  StyledDropdown,
  StyledDropdownContent,
  StyledAvatar,
  StyledAvatarImage,
  StyledCartIcon,
  StyledCartDiv,
  StyledCartCount,
} from "./Header";
import logo from "../../img/logo1.jpeg";
import avatar from "../../img/logo2.jpg";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [checkoutItems, setCheckoutItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("CheckoutItems"));
    if (items) {
      setCheckoutItems(items);
    }
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <StyledHeader>
      <StyledLogo src={logo} alt="Logo da loja" />
      <StyledNavbar>
        <StyledNavItem href="/">Home</StyledNavItem>
        <StyledDropdown
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <StyledNavItem>Caps</StyledNavItem>
          <StyledDropdownContent>
            <StyledNavItem href="/caps/male">Masculino</StyledNavItem>
            <StyledNavItem href="/caps/female">Feminino</StyledNavItem>
          </StyledDropdownContent>
        </StyledDropdown>
        <StyledNavItem href="/checkout">Checkout</StyledNavItem>
      </StyledNavbar>
      <StyledCartDiv>
        <Link to="/checkout">
          <StyledCartIcon>
            <FaShoppingCart />
            <StyledCartCount>{checkoutItems.length}</StyledCartCount>
          </StyledCartIcon>
        </Link>
        <StyledAvatar>
          <StyledAvatarImage src={avatar} alt="Avatar" />
        </StyledAvatar>
      </StyledCartDiv>
    </StyledHeader>
  );
}

export default Header;
