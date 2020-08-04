import React from "react";
import styled from "styled-components";

const StyledBoton = styled.button`
  background: #00f3bb;
  color: #060a24;
  width: 15vw;
  padding: 20px 0px;
  border: none;
  margin-left: 70px;
  @media (max-width: 768px) {
    width: 90%;
    margin-left: 20px;
  }

  :hover {
    background: -webkit-linear-gradient(-30deg, #00f3bb, #0000ec);
    color: #ffffff;
  }
`;
const Boton = () => {
  return (
    <div>
      <StyledBoton> CONOCÉ MÁS</StyledBoton>
    </div>
  );
};

export default Boton;
