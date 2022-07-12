import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router-dom";
import Inicio from "./Inicio";
import Nosotros from "./Nosotros";
import Contacto from "./Contacto";
import Servicios from "./Servicios";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/nosotros" component={Nosotros} />
        <Route exact path="/servicios" component={Servicios} />
        <Route exact path="/contacto" component={Contacto} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
