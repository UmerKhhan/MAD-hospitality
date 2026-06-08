document.querySelector('.nav-bar ul').addEventListener("mouseover",(event)=>{
  if(event.target.matches(".show_more")){
    // First, hide all open dropdowns
    document.querySelectorAll(".more_content.ON").forEach((dropdown) => {
      dropdown.classList.remove("ON");
    });
    
    // Then show the current one
    event.target.parentElement.querySelector(".more_content").classList.add("ON");
  }
});
document.addEventListener("click",(event)=>{
  if (!event.target.closest(".nav-bar")){
    document.querySelectorAll(".more_content.ON").forEach((dropdown) => {
      dropdown.classList.remove("ON");
    });
  }
});
document.querySelectorAll(".more_content").forEach((surface) => {
  surface.addEventListener("mouseleave", () => {
    setTimeout(() => {
      // Loop again to remove the class from all dropdowns
      document.querySelectorAll(".more_content.ON").forEach((dropdown) => {
        dropdown.classList.remove("ON");
      });
    }, 100);
  });
});