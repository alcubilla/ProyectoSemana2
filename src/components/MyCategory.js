import React from "react";
import MyBlog from "./MyBlog";

const MyCategory = ( ) => {

  
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

  const categoria3 = {
    titulo1: "Visa o pasaporte",
    imgUrl:
      "https://cdnmundo3.img.sputniknews.com/images/105772/16/1057721612.jpg",
    fecha: "02/10/2010",
    extracto: "Este es un pequeño extracto de lo que se vera en cancun",
    autor: "Fernanda",
    categoria: "Planea tu viaje"
  };
  const categoria4 = {
    titulo1: "Antes de viajar",
    imgUrl:
      "https://www.visitmexico.com/viajemospormexico/assets/uploads/actividades/actividades-principales_yucatan_merida_vive-la-magia-historica-de-la-ruta-puuc_01.jpg",
    fecha: "02/10/2010",
    extracto: "Este es un pequeño extracto de lo que se vera en Merida",
    autor: "Cesár",
    categoria: "Planea tu viaje"
  };
  const categoria5 = {
    titulo1: "Lista de lo que no debes olvidar",
    imgUrl:
      "https://www.visitmexico.com/viajemospormexico/assets/uploads/actividades/actividades-principales_veracruz_coatepec_explora-coatepec-ciudad-de-cafe-y-orquideas_01.jpg",
    fecha: "02/10/2010",
    extracto: "Este es un pequeño extracto de lo que se vera en Veracruz",
    autor: "Oswaldo",
    categoria: "Planea tu viaje"
  };

  const categoria6 = {
    titulo1: "Lo indispensable",
    imgUrl:
      "https://cdnmundo3.img.sputniknews.com/images/105772/16/1057721612.jpg",
    fecha: "02/10/2010",
    extracto: "Este es un pequeño extracto de lo que se vera en cancun",
    autor: "Ines",
    categoria: "Que empaco"
  };
  const categoria7 = {
    titulo1: "Básico llevar",
    imgUrl:
      "https://www.visitmexico.com/viajemospormexico/assets/uploads/actividades/actividades-principales_yucatan_merida_vive-la-magia-historica-de-la-ruta-puuc_01.jpg",
    fecha: "02/10/2010",
    extracto: "Este es un pequeño extracto de lo que se vera en Merida",
    autor: "Alfredo",
    categoria: "Que empaco"
  };
  const categoria8 = {
    titulo1: "No puedes olvidar",
    imgUrl:
      "https://www.visitmexico.com/viajemospormexico/assets/uploads/actividades/actividades-principales_veracruz_coatepec_explora-coatepec-ciudad-de-cafe-y-orquideas_01.jpg",
    fecha: "02/10/2010",
    extracto: "Este es un pequeño extracto de lo que se vera en Veracruz",
    autor: "Luis",
    categoria: "Que empaco"
  };

   return (
    <div className="container">
      <h1>Destinos</h1>
      <div className="row">
        <MyBlog categoria={categoria} />
        <MyBlog categoria={categoria1} />
        <MyBlog categoria={categoria2} />
      </div>
      <h1>Plane tu viaje</h1>
      <div className="row">
        <MyBlog categoria={categoria3} />
        <MyBlog categoria={categoria4} />
        <MyBlog categoria={categoria5} />
      </div>
      <h1>Que empaco</h1>
      <div className="row">
        <MyBlog categoria={categoria6} />
        <MyBlog categoria={categoria7} />
        <MyBlog categoria={categoria8} />
      </div>
    </div>
    
  );
}

export default MyCategory;
