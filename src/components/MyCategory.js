import React from "react";
import MyBlog from "./MyBlog";

function MyCategory(props) {
  return (
    <div>
      <div class="container">
        <h1>{props.Categoria}</h1>

        <div class="row justify-content-center">
          <div class="col-4">
            <MyBlog
              titulo1="Cancún"
              imgUrl="https://cdnmundo3.img.sputniknews.com/images/105772/16/1057721612.jpg"
              fecha="02/10/2010"
              extracto="Este es un pequeño extracto de lo que se vera en cancun"
              autor="Marina"
              categoria="Destinos"
            />
          </div>
          <div class="col-4">
            <MyBlog
              titulo1="Merida"
              imgUrl="https://www.visitmexico.com/viajemospormexico/assets/uploads/actividades/actividades-principales_yucatan_merida_vive-la-magia-historica-de-la-ruta-puuc_01.jpg"
              fecha="10/02/2015"
              extracto="Este es un pequeño extracto de lo que se vera en el Merida"
              autor="Claudia"
              categoria="Destinos"
            />
          </div>
          <div class="col-4">
            <MyBlog
              titulo1="Veracruz"
              imgUrl="https://www.visitmexico.com/viajemospormexico/assets/uploads/actividades/actividades-principales_veracruz_coatepec_explora-coatepec-ciudad-de-cafe-y-orquideas_01.jpg"
              fecha="09/12/2019"
              extracto="Este es un pequeño extracto de lo que se vera en Veracruz"
              autor="Laura"
              categoria="Destinos"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCategory;
