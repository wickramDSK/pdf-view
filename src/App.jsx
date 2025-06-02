import "./App.css";
import { useState, useEffect } from "react";
import { pdfjs } from "react-pdf";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import PageContainer from "./components/PageContainer";
import Footer from "./components/Footer";
import { themes } from "../src/utils/themes";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function App() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [file, setFile] = useState(null);
  const [containerWidth, setContainerWidth] = useState(window.innerWidth * 0.6);
  const [currentTheme, setCurrentTheme] = useState("default");
  const [scale, setScale] = useState(1.0);

  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(window.innerWidth * 0.8);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPageNumber(1);
    }
  };

  return (
    <>
      <Header />
      <Toolbar
        setPageNumber={setPageNumber}
        handleFileChange={handleFileChange}
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
        scale={scale}
        setScale={setScale}
      />
      <PageContainer
        file={file}
        pageNumber={pageNumber}
        containerWidth={containerWidth}
        setNumPages={setNumPages}
        theme={themes[currentTheme]}
        scale={scale}
      />
      <Footer />
    </>
  );
}

export default App;
