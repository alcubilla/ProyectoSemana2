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
      <MyCategory />
      <MyFooter />
    </div>
  );
}

export default App;
