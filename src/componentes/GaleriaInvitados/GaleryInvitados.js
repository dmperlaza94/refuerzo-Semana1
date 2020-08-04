import React from "react";
import Invitado1 from "../imagenes/Invitado1.png";
import Invitado2 from "../imagenes/Invitado2.png";
import Invitado3 from "../imagenes/Invitado3.png";
import Invitado4 from "../imagenes/Invitado4.png";
import Invitado5 from "../imagenes/Invitado5.png";
import Invitado6 from "../imagenes/Invitado6.png";
import styled from "styled-components";

const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  img {
    width: 33vw;
    @media (max-width: 768px) {
      width: 100vw;
    }
  }
`;

const StyledTittle = styled.h2`
  font-size: 48px;
  text-align: center;
`;

const GaleryInvitados = () => {
  return (
    <div>
      <StyledTittle> Invitadas/os estelares</StyledTittle>
      <StyledGallery>
        <article>
          <img src={Invitado1} />
        </article>
        <article>
          <img src={Invitado2} />
        </article>
        <article>
          <img src={Invitado3} />
        </article>
        <article>
          <img src={Invitado4} />
        </article>
        <article>
          <img src={Invitado5} />
        </article>
        <article>
          <img src={Invitado6} />
        </article>
      </StyledGallery>
    </div>
  );
};

export default GaleryInvitados;
