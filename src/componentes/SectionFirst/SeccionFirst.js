import React from "react";
import Text from "./Text";
import Boton from "./Boton";
import styled from "styled-components";

const StyledSeccion = styled.div`
  margin-bottom: 10px;
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
