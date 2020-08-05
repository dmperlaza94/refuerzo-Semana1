import React from "react";
import styled from "styled-components";
import icono1 from "../imagenes/icon1.svg";
import icono2 from "../imagenes/icon2.svg";
import icono3 from "../imagenes/icon3.svg";
import icono4 from "../imagenes/icon4.svg";
// import wave1 from "../imagenes/wave1.svg";

const StyledTemas = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 80px;
  flex-wrap: wrap;
`;
//

const StyledTittle = styled.h1`
  text-align: center;
  /* font-family: Arial, Helvetica, sans-serif; */
  color: #060a24;
`;
const NuestrosTemas = () => {
  return (
    <div>
      <StyledTittle>Algunos de nuestros temas</StyledTittle>
      <StyledTemas>
        <article>
          <img src={icono1} />
          <h3>Trabajo remoto</h3>
        </article>
        <article>
          <img src={icono2} />
          <h3>Repensando la programación</h3>
        </article>
        <article>
          <img src={icono3} />
          <h3>Bases del código</h3>
        </article>
        <article>
          <img src={icono4} />
          <h3>Seguridad informática</h3>
        </article>
      </StyledTemas>
      {/* <StyledWave>
        <img className="wave1" src={wave1} />
      </StyledWave> */}
    </div>
  );
};

export default NuestrosTemas;
