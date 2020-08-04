import React from "react";
import ReactDOM from "react-dom";
import Navegador from "../src/componentes/Navegator/navbar";
import SeccionFirst from "../src/componentes/SectionFirst/SeccionFirst";
import GalleryEpisodios from "../src/componentes/Episodios/GalleryEpisodios";
import Historia from "../src/componentes/Venimos/Historia";
import GaleryInvitados from "../src/componentes/GaleriaInvitados/GaleryInvitados";
import NuestrosTemas from "../src/componentes/Temas/NuestrosTemas";
import Novedades from "../src/componentes/Novedades/Novedades";
import Footer from "../src/componentes/Footer/Footer";

ReactDOM.render(
  <React.StrictMode>
    <Navegador />
    <SeccionFirst />
    <GalleryEpisodios />
    <Historia />
    <GaleryInvitados />
    <NuestrosTemas />
    <Novedades />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
