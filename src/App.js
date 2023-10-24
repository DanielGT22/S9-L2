import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Alerts from "./components/Welcome";
import Intro from "./components/Intro";

import CustomNavbar from "./components/CustomNavbar";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <CustomNavbar additionalText="Read Around and Find Out" />
      <Alerts />
      <Intro />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
