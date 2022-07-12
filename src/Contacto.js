import React from "react";

function onClickButton(event) {
  event.preventDefault();
}

function Contacto() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contacto</h1>
      </div>

      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
              <div className="form-group">
                <label for="exampleFormControlInput1">Datos</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="ingresar nombre y apellido"
                />
              </div>
              <div className="form-group pt-3">
                <label for="exampleFormControlInput1">Número telefónico</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="+595-"
                />
              </div>
              <div className="form-group pt-3">
                <label for="exampleFormControlInput1">Correo electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="nombre@ejemplo.com"
                />
              </div>

              <div className="form-group pt-3">
                <label for="exampleFormControlTextarea1">
                  Mensaje
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Escribir mensaje aquí"
                ></textarea>
              </div>

              <div className="col-12 pt-3">
                <button
                  onClick={onClickButton}
                  className="btn btn-outline-dark"
                  type="submit"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacto;
