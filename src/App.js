import React from "react";
import MyNavbar from "./components/MyNavbar";
import MyCategory from "./components/MyCategory";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div>
      <MyNavbar />
      <MyCategory Categoria="1" />
      <MyCategory Categoria="2" />
      <MyCategory Categoria="3" />
      <MyFooter />
    </div>
  );
}

export default App;
