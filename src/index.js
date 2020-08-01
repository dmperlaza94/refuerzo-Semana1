import React from "react";
import ReactDOM from "react-dom";
import Navegador from "../src/componentes/Navegator/navbar";
import Text from "../src/componentes/SectionFirst/Text";
ReactDOM.render(
  <React.StrictMode>
    <Navegador />
    <Text />
  </React.StrictMode>,
  document.getElementById("root")
);
