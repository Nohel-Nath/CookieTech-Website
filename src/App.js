import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/layouts/Header/Header";
import Header2 from "./components/layouts/Header/Header2";
import Header3 from "./components/layouts/Header/Header3";
import Image from "./components/layouts/Header/Image";

function App() {
  return (
    <>
      <Header />
      <Header2 />
      <Header3 />
      <Image />
    </>
  );
}

export default App;
