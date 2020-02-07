import React from "react";

function MyFooter() {
  return (
    <div class="card">
      <div class="card-header">La frase del día</div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
          <footer class="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </div>
    </div>
  );
}

export default MyFooter;
