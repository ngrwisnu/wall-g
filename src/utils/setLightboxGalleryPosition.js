export const setLightboxGalleryPosition = (wrapper, item) => {
  const totalIteminImages =
    $(wrapper).innerWidth() / $("#lightbox .images .image").width();

  if (item < totalIteminImages) {
    $(wrapper).css("justify-content", "center");
  } else {
    $(wrapper).css("justify-content", "start");
  }
};
