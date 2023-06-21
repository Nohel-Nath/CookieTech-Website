import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header2 from "./components/layouts/Header/Header2/Header2";

import Image from "./components/layouts/Header/ImageSlider/Image";
import Header3 from "./components/layouts/Header/Header3/Header3";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Header2 />
      <Header3 />
      {/* <Image /> */}
    </>
  );
}

export default App;
