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
  width: 95vw;
  padding: 30px 25px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    width: 100vw;
    /* flex-wrap: wrap; */
  }

  .iconos {
    display: flex;
  }
`;
const Footer = () => {
  return (
    <StyledFooter>
      <div className="Styledcopy"> © 2019— Hello blue pale dot </div>
      <div className="iconos">
        <div>
          <FaSpotify />
        </div>
        <div>
          <FaTwitter />
        </div>
        <div>
          <FaInstagram />
        </div>
        <div>
          <FaTelegramPlane />
        </div>
        <div>
          <FaFacebook />
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
