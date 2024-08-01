import { clonedElementImage } from "./utils/clonedElementImage.js";
import { getImageAttribute } from "./utils/getImageAttribute.js";
import { setLabel } from "./utils/setLabel.js";
import { updateBackgroundImage } from "./utils/updateBackgroundImage.js";
import { updateJumbotron } from "./utils/updateJumbotron.js";

export let currentCategory = "forest";
export let selectedImage = "forest-1";

export const forestGallery = new Array(4).fill();
export const waterfallGallery = new Array(2).fill();

$(document).ready(() => {
  const selectedCategory = $("#category");
  const galleryTemplate = $(".gallery template").html();
  const container = $("#box .container");

  if (currentCategory === "forest") {
    setLabel("Peaceful Forest");

    forestGallery.forEach((_, i) => {
      createGalleryItem(i);
    });
  }

  // * category handler
  selectedCategory.on("change", () => {
    currentCategory = selectedCategory.val();

    $(".gallery .container .item").remove();

    // * gallery list handler
    if (currentCategory === "forest") {
      setLabel("Peaceful Forest");

      forestGallery.forEach((_, i) => {
        createGalleryItem(i);
      });
    }

    if (currentCategory === "waterfall") {
      setLabel("Crystal Clear of Waterfall");

      waterfallGallery.forEach((_, i) => {
        createGalleryItem(i);
      });
    }
  });

  function createGalleryItem(i) {
    let newItem = $(galleryTemplate).clone();

    const cloned = clonedElementImage(newItem, currentCategory, i);

    cloned.on("click", () => {
      const filename = getImageAttribute(cloned, "data-filename");

      updateSelectedImage(filename);
      updateJumbotron(selectedImage);
      updateBackgroundImage(selectedImage);
    });

    container.append(cloned);
  }
});

export function updateSelectedImage(filename) {
  selectedImage = filename;
}
