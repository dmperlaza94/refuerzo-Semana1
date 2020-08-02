import React from "react";
import ReactDOM from "react-dom";
import Navegador from "../src/componentes/Navegator/navbar";
import SeccionFirst from "../src/componentes/SectionFirst/SeccionFirst";
ReactDOM.render(
  <React.StrictMode>
    <Navegador />
    <SeccionFirst />
  </React.StrictMode>,
  document.getElementById("root")
);
