// Initialize \\
$(document).ready(function () {
  $(".modal").modal();
  $(".parallax").parallax();
  $(".sidenav").sidenav();
  $(".slider").slider({ full_width: true });
  $(".myreviews").carousel({
    numVisible: 5,
    shift: 55,
    padding: 55,
  });

  // Dark-Mode \\
  $(".mode").change(function () {
    if ($(this).is(":checked")) {
      var bodyElement = document.body;
      bodyElement.classList.toggle("dark-mode");
      var sliderElement = document.querySelector(".myslider");
      sliderElement.classList.toggle("dark-mode");
      var sliderIndicator = document.querySelector(".indicators");
      sliderIndicator.classList.toggle("dark-mode");
      var homeElement = document.getElementById("homeEl");
      homeElement.classList.remove("white");
      var aboutElement = document.getElementById("aboutUsEl");
      aboutElement.classList.remove("white");
      var aboutDesp = document.getElementById("aboutDesp");
      aboutDesp.classList.remove("grey-text");
      $("#readBtn").css({ background: "white", color: "black" });
      var serviceElement = document.querySelectorAll(".icon-coffee");
      for (let i = 0; i < serviceElement.length; i++) {
        serviceElement[i].classList.toggle("dark-mode");
      }
      var reviewElement = document.getElementById("reviewEl");
      reviewElement.classList.remove("white");
      $(".card-panel").css({ "background-color": "white", color: "black" });
      var sideNavElement = document.querySelector(".sidenav");
      sideNavElement.classList.toggle("dark-mode");
      var switchIcon = document.querySelector(".switch-icon");
      switchIcon.classList.remove("grey-text");
      switchIcon.classList.add("white-text");
      $(".img-change").attr("src", "./images/coffee-cup.png");
    } else {
      var el = document.body;
      el.classList.remove("dark-mode");
      var sliderElement = document.querySelector(".myslider");
      sliderElement.classList.remove("dark-mode");
      var sliderIndicator = document.querySelector(".indicators");
      sliderIndicator.classList.remove("dark-mode");
      var homeElement = document.getElementById("homeEl");
      homeElement.classList.add("white");
      var aboutElement = document.getElementById("aboutUsEl");
      aboutElement.classList.add("white");
      var aboutDesp = document.getElementById("aboutDesp");
      aboutDesp.classList.add("grey-text");
      $("#readBtn").css({ background: "black", color: "white" });
      $(".card-panel").css({ "background-color": "black", color: "white" });
      $(".img-change").attr("src", "./images/coffee-cup-1.png");
      var serviceElement = document.querySelectorAll(".icon-coffee");
      for (let i = 0; i < serviceElement.length; i++) {
        serviceElement[i].classList.remove("dark-mode");
      }
      var reviewElement = document.getElementById("reviewEl");
      reviewElement.classList.add("white");
      var sideNavElement = document.querySelector(".sidenav");
      sideNavElement.classList.remove("dark-mode");
      var switchIcon = document.querySelector(".switch-icon");
      switchIcon.classList.remove("white-text");
      switchIcon.classList.add("grey-text");
      var reviewCard = document.querySelectorAll(".card-panel");
      for (let i = 0; i < reviewCard.length; i++) {
        reviewCard[i].css({ "background-color": "black" });
      }
    }
  });
});

// Initial Modeal \\
function toggleModal() {
  var instance = M.Modal.getInstance($("#modal3"));
  instance.open();
}

// Smooth Scroll \\
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
