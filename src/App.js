import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Lodging from "./views/Lodging/Lodging";
import About from "./views/About/About";
import NotFoundPage from "./views/NotFoundPage/NotFoundPage ";
import Header from "./components/Header/Header";
import "./components/font/Montserrat-Medium.ttf";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Lodging" element={<Lodging />} />
        <Route path="About" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
