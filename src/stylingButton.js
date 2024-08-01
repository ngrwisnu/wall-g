import { selectedImage } from "./galleryController.js";
import { downloadHandler } from "./utils/downloadHandler.js";

$(document).ready(() => {
  const yellowSurface = "#fff9d0";
  const downloadButton = $("button.download");

  downloadButton.click(() => {
    downloadButton.css({
      outline: "2px solid " + yellowSurface,
      "outline-offset": "2px",
    });
  });

  downloadButton.on("click", () => {
    downloadHandler(selectedImage);
  });
});
