import React from "react";

import { withStorageListener } from "./withStorageListener";

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <section className="container">
        <div className="row">
          <div className="col-12 col-md-6 offset-3">
            <div className="alert alert-success" role="alert">
              <p>Hubo Cambios</p>
              <button className="btn btn-success" onClick={() => toggleShow()}>
                Volver a cargar la información
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
