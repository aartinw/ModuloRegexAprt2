import { resultadoFinal } from "./regex";

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("extraer") as HTMLButtonElement;
  const textarea = document.getElementById("inputText") as HTMLTextAreaElement;
  const output = document.getElementById("resultado") as HTMLDivElement;

  if (!output) {
    console.log("No se encontró el contenedor de salida.");
    return;
  }

  button.addEventListener("click", () => {
    const htmlContent = textarea.value;
    const resultadoRegex = resultadoFinal();

    let matches;
    output.innerHTML = "";

    while ((matches = resultadoRegex.exec(htmlContent)) !== null) {
      const imgUrl = matches[1];

      const imgElement = document.createElement("img");
      imgElement.src = imgUrl;
      output.appendChild(imgElement);
    }
  });
});
