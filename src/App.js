import React from "react";
import MyNavbar from "./components/MyNavbar";
import MyCategory from "./components/MyCategory";
import MyFooter from "./components/MyFooter";
import BlogMain from "./components/BlogMain";

function App() {
  return (
    <div>
      <MyNavbar />
      <BlogMain />
      <MyCategory Categoria="Destinos" />
      <MyCategory Categoria="Planea tu viaje" />
      <MyCategory Categoria="Que empaco" />
      <MyFooter />
    </div>
  );
}

export default App;
