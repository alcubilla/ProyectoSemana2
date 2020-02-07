import React from "react";

function MyFooter() {
  return (
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
          <div class="form-group col-md-4">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MyFooter;
