import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Alerts from "./components/Welcome";
import Intro from "./components/Intro";
import SingleBook from "../src/components/SingleBook";
import Fantasy from "../src/data/fantasy.json";
import "./App.css";
import BookList from "../src/components/BookList";

import { Container } from "react-bootstrap";

import CustomNavbar from "./components/CustomNavbar";
import Cards from "./components/Home";
import Search from "./components/SearchBar";

function App() {
  return (
    <Container>
      <CustomNavbar additionalText="Read Around and Find Out" />
      <Alerts />
      <Intro />
      {/* <Search /> */}
      {/* <SingleBook book={Fantasy[10]} /> */}
      {/* <Cards /> */}
      <BookList manyBooks={Fantasy} />
      <Footer />
    </Container>
  );
}

export default App;
