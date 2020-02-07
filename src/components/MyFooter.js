import React from "react";

function MyFooter() {
  return (
    <div class="container">
      <div class="custom-file m-4">
        <h1 m-2>-----</h1>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">
              Dejanos tu correo para suscribirte
            </label>
            <div class="form-group col-md-6">
              <input type="email" class="form-control" id="inputEmail4"></input>
            </div>

            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#myModal"
            >
              Suscribete
            </button>

            <div class="modal fade" id="myModal">
              <div class="modal-dialog modal-sm">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title">Ya eres parte de nuesto público</h4>
                    <button type="button" class="close" data-dismiss="modal">
                      &times;
                    </button>
                  </div>

                  <div class="modal-body">
                    Estamos felices de tenerte con nosotros
                  </div>

                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
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
}

export default MyFooter;
