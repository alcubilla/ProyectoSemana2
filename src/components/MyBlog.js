import React from "react";

function MyBlog(props) {
  const { categoria } = props;

  return (
    <div className="col-sm-4">
      <div className="card-fluid">
        <img
          src={categoria.imgUrl}
          className="card-img-top"
          alt="No se encontro"
        ></img>
        <div className="card-body">
          <h5 className="card-title"> {categoria.titulo1} </h5>
          <p className="card-text m-1">{categoria.extracto}</p>
          <cite title="Source Title">Publicado por: {categoria.autor}</cite>
          <p className="card-text">
            {categoria.fecha} - {categoria.categoria}
          </p>
          <button type="button" class="btn btn-outline-primary">
            Ver mas
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyBlog;
