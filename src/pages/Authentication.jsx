import Header from "../component/BaseComponent/Header";
import Sidebar from "../component/BaseComponent/Sidebar";
import Login from "../component/Auth/Login";
import Register from "../component/Auth/Register";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Authentication() {
  const [searchParam] = useSearchParams();
  const mode = searchParam.get("mode");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} />
      {mode === "register" ? <Register /> : <Login />}
    </>
  )
}

export default Authentication;
