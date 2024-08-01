import {
  currentCategory,
  forestGallery,
  selectedImage,
  updateSelectedImage,
  waterfallGallery,
} from "./galleryController.js";
import { clonedElementImage } from "./utils/clonedElementImage.js";
import { getImageAttribute } from "./utils/getImageAttribute.js";
import { setLightboxGalleryPosition } from "./utils/setLightboxGalleryPosition.js";
import { updateBackgroundImage } from "./utils/updateBackgroundImage.js";
import { updateJumbotron } from "./utils/updateJumbotron.js";

$(document).ready(() => {
  const maxOverlay = $(".preview .wrapper .maximize-overlay");
  const minIcon = $("#lightbox .wrapper .icon.minimize");
  const bgOverlay = $("#lightbox .overlay");
  const lightbox = $("#lightbox");
  const lightboxGalleryTemplate = $(
    "#lightbox .images template#gallery"
  ).html();
  const lightboxImages = $("#lightbox .images");

  maxOverlay.click(() => {
    lightbox.addClass("open");
    $("#lightbox .images .image").remove();

    updateLightboxImage(selectedImage);

    if (currentCategory === "forest") {
      forestGallery.forEach((_, i) => {
        createLightboxGalleryItem(i);
      });

      setLightboxGalleryPosition(lightboxImages, forestGallery.length);
    }

    if (currentCategory === "waterfall") {
      waterfallGallery.forEach((_, i) => {
        createLightboxGalleryItem(i);
      });

      setLightboxGalleryPosition(lightboxImages, waterfallGallery.length);
    }
  });

  minIcon.click(() => {
    closeLightbox();
  });

  bgOverlay.click(() => {
    closeLightbox();
  });

  function closeLightbox() {
    lightbox.removeClass("open");
  }

  function updateLightboxImage(filename) {
    $("#lightbox .wrapper img.preview").attr("src", `/photo/${filename}.jpg`);
  }

  function createLightboxGalleryItem(i) {
    let cloned = $(lightboxGalleryTemplate).clone();

    cloned = clonedElementImage(cloned, currentCategory, i);

    cloned.on("click", () => {
      const filename = getImageAttribute(cloned, "data-filename");

      updateSelectedImage(filename);
      updateLightboxImage(selectedImage);
      updateBackgroundImage(selectedImage);
      updateJumbotron(selectedImage);
    });

    lightboxImages.append(cloned);
  }
});
