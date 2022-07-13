const Nav = document.createElement("template");

Nav.innerHTML = `
<nav>
<div class="head">
  <span class="logo">Ra</span>
  <span class="logo_hover">#</span>
</div>
<ul class="nav_links">
  <li><a href="./AboutPage.html">About</a></li>
  <li><a href="./ContactPage.html">Contact</a></li>
  <li><a href="https://drive.google.com/file/d/1ukJBqCQ5MMtxQT9W87kH_Df-oGEb4zcV/view?usp=sharing">Resume</a></li>
</ul>
<div class="burger">
  <div class="line1"></div>
  <div class="line2"></div>
  <div class="line3"></div>
</div>
</nav>
`;

var styles = `
nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 8vh;
    font-family: "Montserrat", sans-serif;
    overflow-x: hidden;
  }
  
  .head {
    font-size: 0;
    position: static;
  }
  
  .logo {
    font-weight: 900;
    font-size: 25px;
    color: #edf0f1;
    text-decoration: none;
    letter-spacing: 4px;
  }
  
  .logo_hover {
    font-weight: 900;
    font-size: 25px;
    color: #edf0f1;
    text-decoration: none;
    letter-spacing: 4px;
    padding: 0;
    margin: 0;
    position: relative;
  }
  
  .logo_hover:hover::after {
    content: "";
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: black;
    border-left: 2px solid #edf0f1;
    animation: typing 0.8s steps(5) infinite;
  }
  
  @keyframes typing {
    100% {
      left: 100%;
      margin: 0px 0px 0px 20px;
    }
  }
  
  .nav_links {
    display: flex;
    justify-content: space-around;
    width: 30%;
  }
  
  .nav_links li {
    list-style: none;
  }
  
  .nav_links a {
    font-size: 16px;
    color: #edf0f1;
    text-decoration: none;
    transition: all 0.3s ease 0s;
  }
  
  .nav_links a:hover {
    color: grey;
  }
  
  .burger {
    display: none;
  }
  
  .burger:hover {
    cursor: pointer;
  }
  
  .burger div {
    width: 25px;
    height: 2.5px;
    background-color: #edf0f1;
    margin: 5px;
    transition: all 0.3s ease;
  }
  
  @media screen and (max-width: 1024px) {
    .nav_links {
      width: 50%;
    }
  }
  
  @media screen and (max-width: 768px) {

    body , html   {
      overflow-x: hidden !important;
    }

    nav{
      overflow-x: hidden;
    }

    .nav_links {
      position: absolute;
      right: 0px;
      height: 92vh;
      top: 8vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50%;
      transform: translateX(100%);
      transition: transform 0.4s ease-in;
    }
    .nav_links li {
      opacity: 0;
    }
    .burger {
      display: block;
    }
  }
  
  .nav_active {
    transform: translateX(0%);
  }
  
  @keyframes navLinkFade {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  
  .toggle .line1 {
    transform: rotate(-45deg) translate(-5px, 6px);
  }
  
  .toggle .line2 {
    opacity: 0;
  }
  
  .toggle .line3 {
    transform: rotate(45deg) translate(-5px, -6px);
  }  
`;

var styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
document.body.prepend(Nav.content);

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
navSlide();
logoChange();
