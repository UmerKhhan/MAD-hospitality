let showContent_about = document.querySelector(".nav-bar .show_more.About");
let moreContent_about =document.querySelector(".nav-bar .more_content.About");


document.querySelector(".nav-bar .show_more.About")
  .addEventListener("mouseenter", () => {
    document.querySelector(".nav-bar .more_content.About").classList.add("ON");
  });
document
  .querySelector(".nav-bar .more_content.About")
  .addEventListener("mouseleave", () => {
    document
      .querySelector(".nav-bar .more_content.About")
      .classList.remove("ON");
  });

document
  .querySelector(".mb-nav-bar .show_more.About")
  .addEventListener("mouseenter", () => {
    document
      .querySelector(".mb-nav-bar .more_content.About")
      .classList.add("ON");
  });
document
  .querySelector(".mb-nav-bar .more_content.About")
  .addEventListener("mouseleave", () => {
    document
      .querySelector(".mb-nav-bar .more_content.About")
      .classList.remove("ON");
  });
