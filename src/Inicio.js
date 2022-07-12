import React from "react";
import Common from "./Common";
import web from "../src/img/img01.png";

function Inicio() {
  return (
    <>
      <Common
        name="Centro Informático"
        imgsrc={web}
        visit="/servicios"
        btname="Empecemos"
      />
    </>
  );
}

export default Inicio;
