import React from "react";

const BlogMain= () => (
  
    <div className="card bg-dark text-white m-4">
      <img
        src="https://media-cdn.tripadvisor.com/media/photo-s/0e/d2/15/e9/nuestra-vista-de-noche.jpg"
        className="card-img img-fluid rounded"
        alt="No se encontro"
      ></img>
      <div className="card-img-overlay">
        <h1 className="card-title">Monterrey</h1>
        <h4 className="card-text">
          Hay muchos lugares que te encantará conocer como El Cerro de la Silla,
          El Cerro de las Mitras, La Sierra Madre, donde están sus paisajes
          montañosos, sus aguas termales y numerosos museos. Además, la librería
          Conarte es considerada una de las más bellas de la Tierra como lo
          reconoce la revista Wired.
        </h4>
        <p className="card-text">Ultima actualización hace 3 dias</p>
        <button type="button" className="btn btn-outline-primary">
          Leer más
        </button>
      </div>
    </div>
  );

export default BlogMain;
