import React from "react";
import styled from "styled-components";

const StyledBoton = styled.button`
  background: #00f3bb;
  color: #060a24;
  width: 15vw;
  padding: 7px 0px 7px 0px;
  margin-left: 68px;
  border: none;

  :hover {
    background: -webkit-linear-gradient(-30deg, #00f3bb,#0000ec);
    color:#FFFFFF
  }
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
