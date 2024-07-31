let currentCategory = "forest";
let selectedImage = "forest-1";

const forestGallery = new Array(4).fill();
const waterfallGallery = new Array(2).fill();

$(document).ready(() => {
  const el = $(".social")[0];
  const windowWidth = $(window).width();

  if (windowWidth > 768) {
    const elWidth = el.getBoundingClientRect().width;

    $(".info").css("padding-right", elWidth * 2);
  }

  $("button.download").on("click", () => {
    window.location.href = `public/photo/${selectedImage}.jpg`;
  });
});

$(document).ready(() => {
  const yellowSurface = "#fff9d0";

  $("button.download").click(() => {
    $("button.download").css({
      outline: "2px solid " + yellowSurface,
      "outline-offset": "2px",
    });
  });
});

$(document).ready(() => {
  const selectedCategory = $("#category");
  const label = $("#box span.category");
  const galleryTemplate = $(".gallery template").html();
  const container = $("#box .container");

  if (currentCategory === "forest") {
    label.text("Peaceful Forest");

    forestGallery.forEach((_, i) => {
      let newItem = $(galleryTemplate).clone();

      const cloned = cloneElement(newItem, currentCategory, i);

      cloned.on("click", () => {
        getImageAttribute(cloned, "data-filename");
        updateJumbotron(selectedImage);
        updateBackgroundImage(selectedImage);
      });

      container.append(cloned);
    });
  }

  // * category handler
  selectedCategory.on("change", () => {
    currentCategory = selectedCategory.val();

    $(".gallery .container .item").remove();

    // * gallery list handler
    if (currentCategory === "forest") {
      label.text("Peaceful Forest");

      forestGallery.forEach((_, i) => {
        let newItem = $(galleryTemplate).clone();

        const cloned = cloneElement(newItem, currentCategory, i);

        cloned.on("click", () => {
          getImageAttribute(cloned, "data-filename");
          updateJumbotron(selectedImage);
          updateBackgroundImage(selectedImage);
        });

        container.append(cloned);
      });
    }

    if (currentCategory === "waterfall") {
      label.text("Crystal Clear of Waterfall");

      waterfallGallery.forEach((_, i) => {
        let newItem = $(galleryTemplate).clone();

        const cloned = cloneElement(newItem, currentCategory, i);

        cloned.on("click", () => {
          getImageAttribute(cloned, "data-filename");
          updateJumbotron(selectedImage);
          updateBackgroundImage(selectedImage);
        });

        container.append(cloned);
      });
    }
  });
});

// Lightbox controller
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
        cloneTemplate(i);
      });

      setImagesPosition(forestGallery);
    }

    if (currentCategory === "waterfall") {
      waterfallGallery.forEach((_, i) => {
        cloneTemplate(i);
      });

      setImagesPosition(waterfallGallery);
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
    $("#lightbox .wrapper img.preview").attr(
      "src",
      `/public/photo/${filename}.jpg`
    );
  }

  function cloneTemplate(i) {
    let cloned = $(lightboxGalleryTemplate).clone();

    cloned = cloneElement(cloned, currentCategory, i);

    cloned.on("click", () => {
      getImageAttribute(cloned, "data-filename");
      updateLightboxImage(selectedImage);
      updateBackgroundImage(selectedImage);
      updateJumbotron(selectedImage);
    });

    lightboxImages.append(cloned);
  }

  function setImagesPosition(gallery) {
    const totalIteminImages =
      $(lightboxImages).innerWidth() / $("#lightbox .images .image").width();

    if (gallery.length < totalIteminImages) {
      $(lightboxImages).css("justify-content", "center");
    } else {
      $(lightboxImages).css("justify-content", "start");
    }
  }
});

function cloneElement(clone, cat, i) {
  clone.find("img").attr("src", `/public/photo/${cat}-${i + 1}.jpg`);
  clone.find("img").attr("data-filename", `${cat}-${i + 1}`);

  return clone;
}

function updateJumbotron(filename) {
  $("section.content .preview.jumbotron img").attr(
    "src",
    `/public/photo/${filename}.jpg`
  );
}

function updateBackgroundImage(filename) {
  $("#container .bg-image img").attr("src", `/public/photo/${filename}.jpg`);
}

function getImageAttribute(clone, attribute) {
  const result = clone.find("img").attr(attribute);

  selectedImage = result;
}
