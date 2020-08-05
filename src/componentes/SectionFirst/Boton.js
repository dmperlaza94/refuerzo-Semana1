import React from "react";
import styled from "styled-components";

const StyledBoton = styled.button`
  display: block;
  background: #00f3bb;
  color: #060a24;
  width: 280px;
  margin: 0 auto;
  padding: 20px 0px;
  border: none;
  text-transform: uppercase;

  @media (min-width: 768px) {
    margin: 0;
  }
  :hover {
    background: -webkit-linear-gradient(-30deg, #00f3bb, #0000ec);
    color: #ffffff;
  }
`;

const Boton = () => <StyledBoton>Conocé más</StyledBoton>;

export default Boton;
