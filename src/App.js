import React from "react";
import Navegador from "../src/componentes/Navegator/navbar";
import SeccionFirst from "../src/componentes/SectionFirst/SeccionFirst";
import GalleryEpisodios from "../src/componentes/Episodios/GalleryEpisodios";
import Historia from "../src/componentes/Venimos/Historia";
import GaleryInvitados from "../src/componentes/GaleriaInvitados/GaleryInvitados";
import NuestrosTemas from "../src/componentes/Temas/NuestrosTemas";
import Novedades from "../src/componentes/Novedades/Novedades";
import Footer from "../src/componentes/Footer/Footer";
import styled from "styled-components";

const StyledApp = styled.div`
  font-family: "IBM Plex Sans", sans-serif;
  p {
    font-family: "IBM Plex Mono", monospace;
  }
`;

function App() {
  return (
    <StyledApp>
      <Navegador />
      <SeccionFirst />
      <GalleryEpisodios />
      <Historia />
      <GaleryInvitados />
      <NuestrosTemas />
      <Novedades />
      <Footer />
    </StyledApp>
  );
}

export default App;
