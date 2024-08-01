export const getImageAttribute = (clone, attribute) => {
  const result = clone.find("img").attr(attribute);

  return result;
};
