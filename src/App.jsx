
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { ContextProvider } from "./Components/utils/global.context";



function App() {
  return (
      <ContextProvider >
      <div className="App">
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dentista/:id" element={<Detail />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        <Footer />
        </BrowserRouter>
      </div>
    </ContextProvider>
    
  );
}

export default App;
