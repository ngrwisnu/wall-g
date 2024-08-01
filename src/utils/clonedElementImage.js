export const clonedElementImage = (clonedElement, category, i) => {
  clonedElement.find("img").attr("src", `/photo/${category}-${i + 1}.jpg`);
  clonedElement.find("img").attr("data-filename", `${category}-${i + 1}`);

  return clonedElement;
};
