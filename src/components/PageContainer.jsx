import { Document, Page } from "react-pdf";
import { useEffect, useState } from "react";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

function PageContainer({ file, containerWidth, setNumPages, theme, scale }) {
  const [pageStyle, setPageStyle] = useState(null);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .react-pdf__Page__canvas {
        filter: ${theme.pageFilter || "none"} !important;
      }
      .react-pdf__Page__textContent {
        color: ${theme.text} !important;
      }
    `;
    document.head.appendChild(style);
    setPageStyle(style);

    return () => {
      if (style) {
        document.head.removeChild(style);
      }
    };
  }, [theme]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPages(Array.from(new Array(numPages), (_, index) => index + 1));
  };

  return (
    <div
      className="pdf-container"
      style={{ backgroundColor: theme.background }}
    >
      <div
        className="document-container"
        style={{
          backgroundColor: theme.containerBg,
          color: theme.text,
        }}
      >
        {file ? (
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={(error) => console.error("Error loading PDF:", error)}
          >
            {pages.map((page) => (
              <div key={page} className="pdf-page-wrapper">
                <Page
                  pageNumber={page}
                  width={containerWidth}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  loading="lazy"
                  className="pdf-page"
                  scale={scale}
                />
              </div>
            ))}
          </Document>
        ) : (
          <p className="placeholder-text">Document will display here...</p>
        )}
      </div>
    </div>
  );
}

export default PageContainer;
