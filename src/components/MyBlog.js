import React from "react";

function MyBlog(props) {
  return (
    <div>
      <p>{props.titulo} </p>
      <img src={props.imgUrl} alt="No se encontró la imagen"></img>
      <p>{props.fecha} </p>
      <p>{props.extracto} </p>
      <p>Autor: {props.autor} </p>
      <p>Categoria: {props.categoria} </p>
    </div>
  );
}

export default MyBlog;
