import Category from "./utils/categoryHandler.js";
import { updateBackgroundImage } from "./utils/updateBackgroundImage.js";
import { updateJumbotron } from "./utils/updateJumbotron.js";

$(document).ready(() => {
  const el = $(".social")[0];
  const windowWidth = $(window).width();

  if (windowWidth > 768) {
    const elWidth = el.getBoundingClientRect().width;

    $(".info").css("padding-right", elWidth * 2);
  }
});

$(document).ready(() => {
  const selectElement = $("select#category");
  const options = ["forest", "waterfall"];
  const currCategory = Category.getCategory();

  for (const val of options) {
    const text = val
      .split("")
      .map((v, i) => (i === 0 ? v.toUpperCase() : v))
      .join("");

    const option = $("<option></option>").attr("value", val).text(text);

    if (val === currCategory) {
      option.attr("selected", "selected");
    }

    selectElement.append(option);
  }

  updateBackgroundImage(Category.getSelectedImage());
  updateJumbotron(Category.getSelectedImage());
});
