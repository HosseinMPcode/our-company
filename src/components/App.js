import "./../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import LoginModal from "./LoginModal";

export default function App() {
  const [activeBody, setActiveBody] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);

  function handleActiveBody(num) {
    setActiveBody(num);
  }
  return (
    <div className="App">
      {isModalOpen && (
        <LoginModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      )}
      <Header
        activeBody={activeBody}
        onActiveBody={handleActiveBody}
        onModalOpen={setModalOpen}
      />
      <Body activeBody={activeBody} />
      <Footer />
    </div>
  );
}
