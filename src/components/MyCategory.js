import React from "react";
import MyBlog from "./MyBlog";

function MyCategory(props) {
  return (
    <div>
      <div class="container">
        <h1>Categoria {props.Categoria}</h1>

        <div class="row justify-content-center">
          <div class="col-4">
            <MyBlog
              titulo="titulo1"
              imgUrl="http://picsum.photos/200"
              fecha="02/10/2010"
              extracto="Este es un pequeño extracto de lo que se vera en el blog"
              autor="autor"
              categoria="Deportes"
            />
          </div>
          <div class="col-4">
            <MyBlog
              titulo="titulo2"
              imgUrl="http://picsum.photos/200"
              fecha="02/10/2010"
              extracto="Este es un pequeño extracto de lo que se vera en el blog"
              autor="autor"
              categoria="Deportes"
            />
          </div>
          <div class="col-4">
            <MyBlog
              titulo="titulo3"
              imgUrl="http://picsum.photos/200"
              fecha="02/10/2010"
              extracto="Este es un pequeño extracto de lo que se vera en el blog"
              autor="autor"
              categoria="Deportes"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCategory;
