import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { ContextProvider } from "./Components/utils/global.context";
import Layouts from "./Layouts/Layouts";



function App() {
  return (
      <ContextProvider >
      <div className="App container">
        <BrowserRouter>
          <Routes>
            <Route to="/" element={<Layouts />}>
            <Route path="/" element={<Home />} />
            <Route path="/dentista/:id" element={<Detail />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="/contacto" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ContextProvider>
    
  );
}

export default App;
