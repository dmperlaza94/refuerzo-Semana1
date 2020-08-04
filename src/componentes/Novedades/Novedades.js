import React from "react";
import styled from "styled-components";

const Styledcontenedor = styled.div`
  background-image: linear-gradient(225deg, #0000ff 0%, #0000a3 100%);
  width: 100vw;
  height: 250px;
  padding-top: 200px;
  text-align: center;
`;

const StyledBoton = styled.button`
  background: #00f3bb;
  color: #060a24;
  width: 30vw;
  padding: 20px 0px;
  border: none;
  @media (max-width: 768px) {
    width: 90vw;
  }

  :hover {
    background: -webkit-linear-gradient(-30deg, #00f3bb, #0000ec);
    color: #ffffff;
  }
`;

const StyledText = styled.h1`
  color: #ffffff;
`;
const Novedades = () => {
  return (
    <Styledcontenedor>
      <StyledText>¿Querés las últimas novedades?</StyledText>
      <StyledBoton> ESCUCHÁ LOS EPISODIOS</StyledBoton>
    </Styledcontenedor>
  );
};

export default Novedades;
