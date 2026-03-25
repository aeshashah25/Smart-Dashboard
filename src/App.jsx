import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./controller/Home";
import Detail from "./controller/Detail";
import Form from "./controller/Form";
import Navbar from "./view/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
<div className="min-h-screen bg-gray-100">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;