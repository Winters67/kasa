import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Lodging from "./views/Lodging/Lodging";
import About from "./views/About/About";
import NotFoundPage from "./views/NotFoundPage/NotFoundPage ";
import Header from "./components/Header/Header";
import "../src/assets/font/Montserrat-Medium.ttf";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="lodging/:id" element={<Lodging />} />
        <Route path="About" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
