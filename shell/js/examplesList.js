const goToExample = (parentPath, exampleName) => {
  // Construct our full path with values from the window
  const programmingLanguage = window.WASM_BY_EXAMPLE.programmingLanguage;
  const readingLanguage = window.WASM_BY_EXAMPLE.readingLanguage;
  location.pathname = `/${parentPath}/${exampleName}.${programmingLanguage}.${readingLanguage}.html`;
};

// Initialization IIFE
(() => {
  // Set our header langauge identifier
  const programmingLanguage = window.WASM_BY_EXAMPLE.programmingLanguage;
  const readingLanguage = window.WASM_BY_EXAMPLE.readingLanguage;

  // Only show the examples with the langauges in their class
  const css = `.${programmingLanguage}.${readingLanguage} { display: list-item !important; }`;
  const head = document.head || document.getElementsByTagName("head")[0];
  const style = document.createElement("style");

  head.appendChild(style);

  style.type = "text/css";
  if (style.styleSheet) {
    // This is required for IE8 and below.
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
})();
