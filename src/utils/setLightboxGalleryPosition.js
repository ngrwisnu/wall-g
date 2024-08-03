export const setLightboxGalleryPosition = (wrapper, item) => {
  const windowWidth = $(window).width();
  const totalIteminImages =
    $(wrapper).innerWidth() / $("#lightbox .images .image").width();

  if (item < totalIteminImages && windowWidth > 640) {
    $(wrapper).css("justify-content", "center");
  } else {
    $(wrapper).css("justify-content", "start");
  }
};
