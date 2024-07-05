import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import Forma from "./components/Forma.jsx";
////////////////////////////////////REACT BOOSTRAP
// import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from "./components/NavBar.jsx";
// import Footer from "./components/Footer.jsx";
import FooterPage from "./components/FooterPage.jsx";
// import Header from "./components/Header.jsx";
// import Dash from "./components/Dash.jsx";
// import Dash from "./components/Dash.jsx";
// import ThemeSelector from "./components/ThemeSelector.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <NavBar/> */}
    {/* <Forma/> */}
    <App />
    {/* <Footer /> */}
    {/* <Footer/> */}
    {/* <Header /> */}
    {/* <Dash /> */}
    <FooterPage />
    {/* <Dash /> */}
    {/* <ThemeSelector /> */}
  </React.StrictMode>
);
