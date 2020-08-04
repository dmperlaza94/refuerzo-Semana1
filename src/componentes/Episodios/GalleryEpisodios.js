import React from "react";
import styled from "styled-components";
import embed1 from "../imagenes/embed1.png";
import embed2 from "../imagenes/embed2.png";
import embed3 from "../imagenes/embed3.png";
import embed4 from "../imagenes/embed4.png";
import embed1_ from "../imagenes/embed1_.png";
import embed2_ from "../imagenes/embed2_.png";
import embed3_ from "../imagenes/embed3_.png";

const Contenedor = styled.div`
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  background-color: blue;
  height: 600px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: 1000px;
    grid-gap: 10px;
  }
`;
const StyledImagen1 = styled.div`
  background-image: url(${embed1});
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    background-image: url(${embed1_});
    background-repeat: no-repeat;
  }
`;
const StyledImagen2 = styled.div`
  background-image: url(${embed2});
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    background-image: url(${embed2_});
    background-repeat: no-repeat;
  }
`;
const StyledImagen3 = styled.div`
  background-image: url(${embed3});
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    background-image: url(${embed3_});
    background-repeat: no-repeat;
  }
`;
const StyledImagen4 = styled.div`
  background-image: url(${embed4});
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    background-image: url(${embed3_});
    background-repeat: no-repeat;
  }
`;

const GalleryEpisodios = () => {
  return (
    <Contenedor>
      <StyledImagen1></StyledImagen1>
      <StyledImagen2></StyledImagen2>
      <StyledImagen3></StyledImagen3>
      <StyledImagen4></StyledImagen4>
    </Contenedor>
  );
};

export default GalleryEpisodios;
