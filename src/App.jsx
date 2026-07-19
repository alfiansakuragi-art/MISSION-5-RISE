import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import Kategory from "./pages/Kategory";
import Course from "./pages/Course";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Authentication />} />
      <Route path="/kategory" element={<Kategory />} />
      <Route path="/course/:id" element={<Course />} />
    </Routes>
  );
}

export default App;
