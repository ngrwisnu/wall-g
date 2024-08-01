export const updateBackgroundImage = (filename) => {
  $("#container .bg-image img").attr("src", `/photo/${filename}.jpg`);
};
