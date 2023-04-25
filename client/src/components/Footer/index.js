import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import {
  StyledDevelopedBy,
  StyledFooter,
  StyledIconItem,
  StyledIconList,
  StyledRightsReserved,
} from "./Footer";

function Footer() {
  return (
    <StyledFooter>
      <StyledIconList>
        <StyledIconItem>
          <a
            href="https://github.com/edtech1985"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </StyledIconItem>
        <StyledIconItem>
          <a
            href="https://www.instagram.com/edtech1985/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </StyledIconItem>
        <StyledIconItem>
          <a
            href="https://www.linkedin.com/in/edtech1985/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </StyledIconItem>
        <StyledIconItem>
          <a
            href="https://wa.me/5551992002595"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>
        </StyledIconItem>
      </StyledIconList>
      <StyledRightsReserved>© 2023 Direitos Reservados</StyledRightsReserved>
      <StyledDevelopedBy>Developed by edtech1985</StyledDevelopedBy>
    </StyledFooter>
  );
}

export default Footer;
