import React from "react";
import Navbar from "./components/navbar"
import Footer from "./components/footer.jsx"
import Home from "./components/home.jsx"
import Login from "./components/login.jsx"
import Signup from "./components/signup"


function App() {
  return (
    <div>
      <Navbar/>
      <Signup/>
      <Footer/>
    </div>
  );
}

export default App;
