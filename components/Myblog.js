import React from "react";

function Myblog(props){
  return (
    <div>
      <p>Texto: {props.texto}</p>
      <img src={props.imgUrl}></img>
      <p>Titulo: {props.titulo} </p>
      <p>Autor: {props.autor} </p>
    </div>
  );
}

export default Myblog;
