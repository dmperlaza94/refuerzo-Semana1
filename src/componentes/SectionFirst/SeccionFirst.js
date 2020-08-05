import React from "react";
import Text from "./Text";
import Boton from "./Boton";
import styled from "styled-components";
import wave1 from "../imagenes/wave1.svg";

const StyledSeccion = styled.div`
  margin-bottom: 50px;
  max-width: 550px;
`;

const SeccionFirst = () => {
  return (
    <StyledSeccion>
      <Text />
      <Boton />
    </StyledSeccion>
  );
};
export default SeccionFirst;
