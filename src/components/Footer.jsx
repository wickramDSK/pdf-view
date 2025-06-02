import GitLogo from "../assets/github-logo.png";

function Footer() {
  return (
    <footer>
      © 2025 <b>React PDF Viewer</b> by{" "}
      <a
        href="https://github.com/wickramDSK"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={GitLogo} alt="github logo"></img> wickramDSK
      </a>
    </footer>
  );
}

export default Footer;
