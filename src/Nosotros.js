import React from "react";
import Common from "./Common";
import web from "../src/img/img01.png";

function Nosotros() {
  return (
    <>
      <Common
        name="Centro Informático"
        imgsrc={web}
        visit="/contacto"
        btname="Contactanos"
      />
    </>
  );
}

export default Nosotros;
