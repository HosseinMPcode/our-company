import "./../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
export default function App() {
  const [activeBody, setActiveBody] = useState(0);
  function handleActiveBody(num) {
    setActiveBody(num);
  }
  return (
    <div className="App">
      <Header activeBody={activeBody} onActiveBody={handleActiveBody} />
      <Body activeBody={activeBody} />
      <Footer />
    </div>
  );
}
