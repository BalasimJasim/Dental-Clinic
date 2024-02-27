import { Route, Routes } from "react-router-dom";

import "./App.css";
import Footer from "./sections/Footer/Footer";
import Container from "./components/container/Container";
import Header from "./sections/header/Header";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import Support from "./Pages/Support/Support";
import BookAppointment from "./Pages/BookAppointment/BookAppointment";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/support" element={<Support />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
