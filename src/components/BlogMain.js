import React from "react";

function BlogName() {
  return (
    <div class="card bg-dark text-white m-4">
      <img
        src="https://media-cdn.tripadvisor.com/media/photo-s/0e/d2/15/e9/nuestra-vista-de-noche.jpg"
        class="card-img img-fluid rounded"
        alt="No se encontro"
        id="MainPhoto"
      ></img>
      <div class="card-img-overlay">
        <h1 class="card-title">Monterrey</h1>
        <h4 class="card-text">
          Hay muchos lugares que te encantará conocer como El Cerro de la Silla,
          El Cerro de las Mitras, La Sierra Madre, donde están sus paisajes
          montañosos, sus aguas termales y numerosos museos. Además, la librería
          Conarte es considerada una de las más bellas de la Tierra como lo
          reconoce la revista Wired.
        </h4>
        <p class="card-text">Ultima actualización hace 3 dias</p>
      </div>
    </div>
  );
}
export default BlogName;
