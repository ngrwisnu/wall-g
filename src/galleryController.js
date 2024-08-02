import Category from "./utils/categoryHandler.js";
import { clonedElementImage } from "./utils/clonedElementImage.js";
import GalleryDetails from "./utils/galleryDetails.js";
import { getImageAttribute } from "./utils/getImageAttribute.js";
import { setLabel } from "./utils/setLabel.js";
import { updateBackgroundImage } from "./utils/updateBackgroundImage.js";
import { updateJumbotron } from "./utils/updateJumbotron.js";

export let currentCategory = Category.getCategory();
export let selectedImage = Category.getSelectedImage();

$(document).ready(() => {
  const selectedCategory = $("#category");
  const galleryTemplate = $(".gallery template").html();
  const container = $("#box .container");

  createGallery();

  selectedCategory.on("change", () => {
    const newValue = selectedCategory.val();
    Category.setCategory(newValue);

    currentCategory = newValue;

    $(".gallery .container .item").remove();

    createGallery();
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

  function createGallery() {
    if (currentCategory === "forest") {
      setLabel("Peaceful Forest");

      GalleryDetails.forestGallery.forEach((_, i) => {
        createGalleryItem(i);
      });
    }

    if (currentCategory === "waterfall") {
      setLabel("Crystal Clear of Waterfall");

      GalleryDetails.waterfallGallery.forEach((_, i) => {
        createGalleryItem(i);
      });
    }
  }
});

export function updateSelectedImage(filename) {
  Category.setSelectedImage(filename);

  selectedImage = filename;
}
