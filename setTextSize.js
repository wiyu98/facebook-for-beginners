if (sessionStorage.textSize != null) {
  if (sessionStorage.textSize == 1) {
      document.write("<style>body { font-size: 0.85em; } img { max-width: 75%;}</style>");
  }
  if (sessionStorage.textSize == 2) {
      document.write("<style>body { font-size: 1em; } img { max-width: 80%;}</style>");
  }
  if (sessionStorage.textSize == 3) {
      document.write("<style>body { font-size: 1.2em; } img { max-width: 90%;}</style>");
  }
  if (sessionStorage.textSize == 4) {
      document.write("<style>body { font-size: 1.5em; } img { max-width: 100%;}</style>");
  }
}