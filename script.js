// Mobile Menu Toggle
document
  .getElementById("mobile-menu-button")
  .addEventListener("click", function () {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
    menu.classList.toggle("block");
  });

function closeMobileMenu() {
  document.getElementById("mobile-menu").classList.add("hidden");
}

// Navigation scroll effect
function mainNav() {
  const top = document.documentElement.scrollTop || document.body.scrollTop;
  const nav = document.querySelector(".sticky-navigation");

  if (top > 40) {
    nav.style.opacity = "1";
    nav.style.top = "0";
  } else {
    nav.style.opacity = "0";
    nav.style.top = "-75px";
  }
}

window.addEventListener("scroll", mainNav);

// Initialize when page loads
document.addEventListener("DOMContentLoaded", function () {
  mainNav();

  // Initialize Isotope
  const $portfolioContainer = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
  });

  // Filter items on button click
  $(".filter-button").on("click", function () {
    const filterValue = $(this).attr("data-filter");
    $portfolioContainer.isotope({ filter: filterValue });

    // Update active class
    $(".filter-button").removeClass(
      "bg-primary text-white hover:bg-primary-dark"
    );
    $(".filter-button").addClass(
      "bg-gray-300 hover:bg-primary hover:text-white"
    );
    $(this).removeClass("bg-gray-300 hover:bg-primary hover:text-white");
    $(this).addClass("bg-primary text-white hover:bg-primary-dark");
  });

  // Smooth scrolling
  $(".smoothScroll").on("click", function (e) {
    e.preventDefault();
    const target = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top - 70,
      },
      800
    );
  });

  // Update active nav link on scroll
  $(window).on("scroll", function () {
    const scrollPos = $(window).scrollTop();
    $(".main-navigation a").each(function () {
      const currLink = $(this);
      const refElement = $(currLink.attr("href"));
      if (
        refElement.position().top <= scrollPos + 100 &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $(".main-navigation a").removeClass("current");
        currLink.addClass("current");
      }
    });
  });
});
