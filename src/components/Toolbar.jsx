import { themes } from "../utils/themes";

function Toolbar({
  handleFileChange,
  currentTheme,
  setCurrentTheme,
  scale,
  setScale,
}) {
  const handleZoomIn = () => {
    setScale((prevScale) => Math.min(prevScale + 0.1, 2.0));
  };

  const handleZoomOut = () => {
    setScale((prevScale) => Math.max(prevScale - 0.1, 0.5));
  };

  const handleZoomReset = () => {
    setScale(1.0);
  };

  return (
    <div className="toolbar">
      {/* file input section */}
      <div className="toolbar-group file-input">
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
        />
      </div>
      
      {/* zoom controls */}
      <div className="toolbar-group zoom-controls">
        <button onClick={handleZoomOut} title="Zoom Out">
          <span>-</span>
        </button>
        <button onClick={handleZoomReset} title="Reset Zoom">
          {Math.round(scale * 100)}%
        </button>
        <button onClick={handleZoomIn} title="Zoom In">
          <span>+</span>
        </button>
      </div>

      {/* theme selector */}
      <div className="toolbar-group theme-control">
        <select
          value={currentTheme}
          onChange={(e) => setCurrentTheme(e.target.value)}
          className="theme-selector"
        >
          {Object.keys(themes).map((theme) => (
            <option key={theme} value={theme}>
              {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Toolbar;
