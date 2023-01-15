import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./routes/Home";
import Stats from "./routes/Stats";
import "./styles/App.css";
import "./styles/Reset.css";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/statistics" element={<Stats />} />
        <Route path="/*" element={<Stats />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
