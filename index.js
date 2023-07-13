// Function to check if the button should be shown
function checkScroll() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (window.pageYOffset > 100) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
}

// Function to smoothly scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Event listener for scroll event
window.addEventListener("scroll", checkScroll);
