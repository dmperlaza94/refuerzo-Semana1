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
  padding: 50px 120px;
  margin-top: 50px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    margin-left: 100px;
    padding: 0px;
  }
  img {
    width: 70px;
    padding-left: 25px;
    @media (max-width: 768px) {
      width: 40vw;
      padding: 0px;
    }
  }
  h4 {
    font-size: 24px;
    font-family: Arial, Helvetica, sans-serif;
    color: #060a24;
  }
`;
// const StyledWave = styled.div`
//   width: 100%;
//   img {
//     width: 100px;
//   }
// `;

const StyledTittle = styled.h2`
  font-size: 48px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  color: #060a24;
`;
const NuestrosTemas = () => {
  return (
    <div>
      <StyledTittle>Algunos de nuestros temas</StyledTittle>
      <StyledTemas>
        <article>
          <img src={icono1} />
          <h4>Trabajo remoto</h4>
        </article>
        <article>
          <img src={icono2} />
          <h4>Repensando la programación</h4>
        </article>
        <article>
          <img src={icono3} />
          <h4>Bases del código</h4>
        </article>
        <article>
          <img src={icono4} />
          <h4>Seguridad informática</h4>
        </article>
      </StyledTemas>
      {/* <StyledWave>
        <img className="wave1" src={wave1} />
      </StyledWave> */}
    </div>
  );
};

export default NuestrosTemas;
