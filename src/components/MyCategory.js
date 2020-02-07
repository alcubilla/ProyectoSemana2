import React from "react";
import MyBlog from "./MyBlog";

function MyCategory(props) {
  const categoria = {
    titulo1: "Cancún",
    imgUrl:
      "https://cdnmundo3.img.sputniknews.com/images/105772/16/1057721612.jpg",
    fecha: "02/10/2010",
    extracto: "Este es un pequeño extracto de lo que se vera en cancun",
    autor: "Marina",
    categoria: "Destinos"
  };
  const categoria1 = {
    titulo1: "Merida",
    imgUrl:
      "https://www.visitmexico.com/viajemospormexico/assets/uploads/actividades/actividades-principales_yucatan_merida_vive-la-magia-historica-de-la-ruta-puuc_01.jpg",
    fecha: "02/10/2010",
    extracto: "Este es un pequeño extracto de lo que se vera en Merida",
    autor: "Antonio",
    categoria: "Destinos"
  };
  const categoria2 = {
    titulo1: "Veracruz",
    imgUrl:
      "https://www.visitmexico.com/viajemospormexico/assets/uploads/actividades/actividades-principales_veracruz_coatepec_explora-coatepec-ciudad-de-cafe-y-orquideas_01.jpg",
    fecha: "02/10/2010",
    extracto: "Este es un pequeño extracto de lo que se vera en Veracruz",
    autor: "Laura",
    categoria: "Destinos"
  };

  return (
    <div className="container">
      <h1>{props.Categoria}</h1>
      <div className="row">
        <MyBlog categoria={categoria} />

        <MyBlog categoria={categoria1} />

        <MyBlog categoria={categoria2} />
      </div>
    </div>
  );
}

export default MyCategory;
