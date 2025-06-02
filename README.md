# React PDF Viewer

A modern, feature-rich PDF viewer built with React and Vite that supports multiple viewing themes and zoom controls.

## Features

- 📱 Responsive design that works across devices
- 🎨 Multiple viewing themes:
  - Default (Light)
  - Dark
  - Sepia
  - Dark Contrast
  - Night
  - Mint
- 🔍 Zoom controls (50% - 200%)
- 📄 Multi-page PDF support
- ⚡ Fast rendering with lazy loading
- 🎯 Easy-to-use interface

## Tech Stack

- React 19
- Vite 6
- react-pdf 9.2
- ESLint
- CSS3

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```sh
git clone https://github.com/wickramDSK/pdf-view.git
cd pdf-view
```

2. Install dependencies:

```sh
npm install
```

3. Start the development server:

```sh
npm run dev
```

4. Build for production:

```sh
npm run build
```

## Usage

1. Launch the application
2. Click the file input button to select a PDF file
3. Use the zoom controls (+/-) to adjust the view size
4. Select different themes from the dropdown menu to change the viewing experience

## Project Structure

```
pdf-view/
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── PageContainer.jsx
│   │   └── Toolbar.jsx
│   ├── utils/
│   │   └── themes.js
│   ├── assets/
│   │   └── github-logo.png
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── public/
├── index.html
└── package.json
```

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [react-pdf](https://github.com/wojtekmaj/react-pdf) for PDF rendering
- [Vite](https://vitejs.dev/) for the build tooling
- [React](https://reactjs.org/) for the UI framework

## Author

wickramDSK - [GitHub Profile](https://github.com/wickramDSK)
