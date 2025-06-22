const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// document.querySelector('a[href="#about-section"]').addEventListener("click", function (e) {
//   e.preventDefault(); // prevent default anchor behavior
//   scroll.scrollTo(document.querySelector("#about-section"));
// });

document.querySelectorAll('[data-scroll-to]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);
    if (target) {
      scroll.scrollTo(target);
    }
  });
});


// function page4Animation() {
//     var elemC = document.querySelector("#elem-container")
//     var fixed = document.querySelector("#fixed-image")
//     elemC.addEventListener("mouseenter", function () {
//         fixed.style.display = "block"
//     })
//     elemC.addEventListener("mouseleave", function () {
//         fixed.style.display = "none"
//     })

//     var elems = document.querySelectorAll(".elem")
//     elems.forEach(function (e) {
//         e.addEventListener("mouseenter", function () {
//             var image = e.getAttribute("data-image")
//             fixed.style.backgroundImage = `url(${image})`
//         })
//     })
// }

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}
function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

const footer = document.getElementById("footer");
const page5 = document.getElementById("page5");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        footer.classList.add("show-footer");
      } else {
        footer.classList.remove("show-footer");
      }
    });
  },
  { threshold: 0.2 } // adjust if needed
);

observer.observe(page5);


window.addEventListener("DOMContentLoaded", () => {
  const cursor = document.getElementById("custom-cursor");
  const swiperContainer = document.querySelector(".swiper.mySwiper");

  swiperContainer.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    cursor.style.left = `${x - 40}px`;
    cursor.style.top = `${y - 40}px`;
  });

  swiperContainer.addEventListener("mouseenter", () => {
    cursor.style.opacity = 1;
    cursor.style.transform = "scale(1)";
  });

  swiperContainer.addEventListener("mouseleave", () => {
    cursor.style.opacity = 0;
    cursor.style.transform = "scale(0)";
  });
});


function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

swiperAnimation()
// page4Animation()
menuAnimation()
loaderAnimation()