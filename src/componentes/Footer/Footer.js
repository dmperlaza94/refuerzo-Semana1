import React from "react";
import styled from "styled-components";
import {
  FaFacebook,
  FaSpotify,
  FaTwitter,
  FaTelegramPlane,
  FaInstagram,
} from "react-icons/fa";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 90vw;
  align-items: center;
  padding: 40px 25px 5px 25px;

  @media (min-width: 900px) {
    flex-wrap: wrap;
  }
`;
const Footer = () => {
  return (
    <StyledFooter>
      <div className="Styledcopy"> © 2019— Hello blue pale dot </div>
      <div>
        <FaSpotify />
        <FaTwitter />
        <FaInstagram />
        <FaTelegramPlane />
        <FaFacebook />
      </div>
    </StyledFooter>
  );
};

export default Footer;
