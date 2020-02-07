import React from "react";

function MyBlog(props) {
  return (
    <div>
      <div class="card">
        <img src={props.imgUrl} class="card-img-top" alt="No se encontro"></img>
        <div class="card-body">
          <h5 class="card-title">{props.titulo1}</h5>
          <p class="card-text m-1">{props.extracto}</p>
          <cite title="Source Title">Publicado por: {props.autor}</cite>
          <p class="card-text m-0">
            {props.fecha} -{props.categoria}
          </p>
          <a href={undefined} class="btn btn-primary m-2">
            Leer más
          </a>
        </div>
      </div>
    </div>
  );
}

export default MyBlog;
