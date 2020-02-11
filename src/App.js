import React from "react";
import MyNavbar from "./components/MyNavbar";
import MyCategory from "./components/MyCategory";
import MyFooter from "./components/MyFooter";
import BlogMain from "./components/BlogMain";

const App= () => (
    <>
      <MyNavbar />
      <BlogMain />
      <MyCategory />
      <MyFooter />
    </>
  );


export default App;
