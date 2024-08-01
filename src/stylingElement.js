$(document).ready(() => {
  const el = $(".social")[0];
  const windowWidth = $(window).width();

  if (windowWidth > 768) {
    const elWidth = el.getBoundingClientRect().width;

    $(".info").css("padding-right", elWidth * 2);
  }
});
