const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav_links");
  const navLinks = document.querySelectorAll(".nav_links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav_active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 10 + 0.4
        }s`;
      }
    });

    burger.classList.toggle("toggle");
  });
};

const logoChange = () => {
  const hash = document.querySelector(".logo_hover");

  hash.addEventListener("mouseover", () => {
    hash.innerHTML = "hash";
  });
  hash.addEventListener("mouseout", () => {
    hash.innerHTML = "#";
  });
};

logoChange();
navSlide();
