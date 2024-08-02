export const downloadHandler = (filename) => {
  window.location.href = `/photo/${filename}.jpg`;
};

export const removeButtonOutline = () => {
  $("button.download").css("outline", "none");
};
