export default class Category {
  static setCategory(value) {
    sessionStorage.setItem("category", value);
  }

  static getCategory() {
    const category = sessionStorage.getItem("category");

    return category || "forest";
  }

  static setSelectedImage(value) {
    sessionStorage.setItem("selected-image", value);
  }

  static getSelectedImage() {
    const image = sessionStorage.getItem("selected-image");

    return image || "forest-1";
  }
}
