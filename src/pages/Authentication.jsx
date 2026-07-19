import Header from "../component/Header";
import Sidebar from "../component/SIdebar";
import Login from "../data/Login";
import Register from "../data/Register";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Authentication() {
  const [searchParam] = useSearchParams();
  const mode = searchParam.get("mode");
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} />
      {mode === "register" ? <Register /> : <Login />}
    </>
  );
}

export default Authentication;
