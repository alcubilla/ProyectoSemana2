import React from "react";

const MyFooter= () => (
    <div className="container">
      <div className="custom-file m-4">
        <hr></hr>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">
              Dejanos tu correo para suscribirte
            </label>
            <div className="form-group col-md-6">
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
              ></input>
            </div>

            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#myModal"
            >
              Suscribete
            </button>

            <div className="modal fade" id="myModal">
              <div className="modal-dialog modal-sm">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">
                      Ya eres parte de nuesto público
                    </h4>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                    >
                      &times;
                    </button>
                  </div>

                  <div className="modal-body">
                    Estamos felices de tenerte con nosotros
                  </div>

                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );


export default MyFooter;
