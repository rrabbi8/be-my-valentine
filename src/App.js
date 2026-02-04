import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Yes from "./pages/Yes";
import Gifts from "./pages/Gifts";
import Brunch from "./pages/Brunch";
import Dinner from "./pages/Dinner";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yes" element={<Yes />} />
        <Route path="/gifts" element={<Gifts />} />
        <Route path="/brunch" element={<Brunch />} />
        <Route path="/dinner" element={<Dinner />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
