import { useState } from "react";
import "./App.css";

import NavBar from "./components/FirstSection/Header/jsx/NavBar";
import Home from "./components/FirstSection/Main/jsx/Home";
import About from "./components/SecondSection/About/jsx/About";
import Teams from "./components/ThirdSection/Teams/jsx/Teams";
import Modal from "./shared/Modal/jsx/Modal";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  const modalHandler = () => {
    setShowModal((prevModal) => !prevModal);
  };

  return (
    <div>
      <div className="bg-gray-100 font-sans w-full min-h-screen m-0">
        {showModal && <Modal handleModal={modalHandler} />}
        <NavBar />
        <Home />
        <About />
        <Teams handleModal={modalHandler} />
      </div>
    </div>
  );
}
