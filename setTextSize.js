if (sessionStorage.textSize != null) {
  if (sessionStorage.textSize == 1) {
      document.write("<style>body { font-size: 0.85em; }</style>");
  }
  if (sessionStorage.textSize == 2) {
      document.write("<style>body { font-size: 1em; }</style>");
  }
  if (sessionStorage.textSize == 3) {
      document.write("<style>body { font-size: 1.2em; }</style>");
  }
  if (sessionStorage.textSize == 4) {
      document.write("<style>body { font-size: 1.5em; }</style>");
  }
}