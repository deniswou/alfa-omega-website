import React from "react";
import Card from "./Card";
import img1 from "../src/img/img1.png";
import img2 from "../src/img/img2.png";
import img3 from "../src/img/img3.png";
import img4 from "../src/img/img4.png";
import img5 from "../src/img/img5.png";
import img6 from "../src/img/img6.png";

function Servicios() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Servicios</h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <Card title="Desarrollo de Aplicaciones" imgsrc={img1} />
              <Card title="Desarrollo Web" imgsrc={img2} />
              <Card title="Servicio Técnico" imgsrc={img3} />
              <Card title="Venta de Equipos Informáticos" imgsrc={img4} />
              <Card title="Networking & CCTV" imgsrc={img5} />
              <Card title="Asesoramiento" imgsrc={img6} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Servicios;
