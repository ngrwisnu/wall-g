export const updateJumbotron = (filename) => {
  $("section.content .preview.jumbotron img").attr(
    "src",
    `/photo/${filename}.jpg`
  );
};
