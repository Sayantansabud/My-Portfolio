// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

// // document.querySelector('a[href="#about-section"]').addEventListener("click", function (e) {
// //   e.preventDefault(); // prevent default anchor behavior
// //   scroll.scrollTo(document.querySelector("#about-section"));
// // });

// document.querySelectorAll('[data-scroll-to]').forEach(link => {
//   link.addEventListener('click', function(e) {
//     e.preventDefault();
//     const targetId = this.getAttribute("href");
//     const target = document.querySelector(targetId);
//     if (target) {
//       scroll.scrollTo(target);
//     }
//   });
// });




// // function page4Animation() {
// //     var elemC = document.querySelector("#elem-container")
// //     var fixed = document.querySelector("#fixed-image")
// //     elemC.addEventListener("mouseenter", function () {
// //         fixed.style.display = "block"
// //     })
// //     elemC.addEventListener("mouseleave", function () {
// //         fixed.style.display = "none"
// //     })

// //     var elems = document.querySelectorAll(".elem")
// //     elems.forEach(function (e) {
// //         e.addEventListener("mouseenter", function () {
// //             var image = e.getAttribute("data-image")
// //             fixed.style.backgroundImage = `url(${image})`
// //         })
// //     })
// // }
//  const filterButtons = document.querySelectorAll('.filter-btn');
//   const projectCards = document.querySelectorAll('.project-card');

//   filterButtons.forEach(button => {
//     button.addEventListener('click', () => {
//       const filter = button.dataset.filter;

//       // Active button
//       filterButtons.forEach(btn => btn.classList.remove('active'));
//       button.classList.add('active');

//       // Show/Hide cards
//       projectCards.forEach(card => {
//         const category = card.dataset.category;
//         if (filter === 'all' || filter === category) {
//           card.classList.remove('hide');
//         } else {
//           card.classList.add('hide');
//         }
//       });
//     });
//   });


  
// function swiperAnimation() {
//     var swiper = new Swiper(".mySwiper", {
//         slidesPerView: "auto",
//         centeredSlides: true,
//         spaceBetween: 100,
//     });
// }
// function menuAnimation() {

//     var menu = document.querySelector("nav h3")
//     var full = document.querySelector("#full-scr")
//     var navimg = document.querySelector("nav img")
//     var flag = 0
//     menu.addEventListener("click", function () {
//         if (flag == 0) {
//             full.style.top = 0
//             navimg.style.opacity = 0
//             flag = 1
//         } else {
//             full.style.top = "-100%"
//             navimg.style.opacity = 1
//             flag = 0
//         }
//     })
// }

// const footer = document.getElementById("footer");
// const page5 = document.getElementById("page5");

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         footer.classList.add("show-footer");
//       } else {
//         footer.classList.remove("show-footer");
//       }
//     });
//   },
//   { threshold: 0.2 } // adjust if needed
// );

// observer.observe(page5);


// window.addEventListener("DOMContentLoaded", () => {
//   const cursor = document.getElementById("custom-cursor");
//   const swiperContainer = document.querySelector(".swiper.mySwiper");

//   swiperContainer.addEventListener("mousemove", (e) => {
//     const x = e.clientX;
//     const y = e.clientY;
//     cursor.style.left = `${x - 40}px`;
//     cursor.style.top = `${y - 40}px`;
//   });

//   swiperContainer.addEventListener("mouseenter", () => {
//     cursor.style.opacity = 1;
//     cursor.style.transform = "scale(1)";
//   });

//   swiperContainer.addEventListener("mouseleave", () => {
//     cursor.style.opacity = 0;
//     cursor.style.transform = "scale(0)";
//   });
// });


// function loaderAnimation() {
//     var loader = document.querySelector("#loader")
//     setTimeout(function () {
//         loader.style.top = "-100%"
//     }, 4200)
// }

// swiperAnimation()
// // page4Animation()
// menuAnimation()
// loaderAnimation()

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Locomotive Scroll
  const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
  });

  // 2. Smooth Scroll for Anchor Links
  document.querySelectorAll('[data-scroll-to]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        scroll.scrollTo(target);
      }
    });
  });

  // 3. Project Filtering Logic
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;

      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      projectCards.forEach(card => {
        const category = card.dataset.category;
        card.classList.toggle('hide', !(filter === 'all' || filter === category));
      });
    });
  });

  // 4. Swiper Slider Init
  function swiperAnimation() {
    new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 100
    });
  }

  // 5. Menu Toggle for Mobile
  function menuAnimation() {
    const menu = document.querySelector("nav h3");
    const full = document.querySelector("#full-scr");
    const navimg = document.querySelector("nav img");
    let flag = 0;

    menu.addEventListener("click", () => {
      full.style.top = flag === 0 ? "0" : "-100%";
      navimg.style.opacity = flag === 0 ? 0 : 1;
      flag = 1 - flag;
    });
  }

  // 6. Footer Reveal on Scroll
  const footer = document.getElementById("footer");
  const page5 = document.getElementById("page5");

  if (footer && page5) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          footer.classList.toggle("show-footer", entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(page5);
  }

  // 7. Cursor in Swiper
  const cursor = document.getElementById("custom-cursor");
  const swiperContainer = document.querySelector(".swiper.mySwiper");

  if (cursor && swiperContainer) {
    swiperContainer.addEventListener("mousemove", e => {
      cursor.style.left = `${e.clientX - 40}px`;
      cursor.style.top = `${e.clientY - 40}px`;
    });

    swiperContainer.addEventListener("mouseenter", () => {
      cursor.style.opacity = 1;
      cursor.style.transform = "scale(1)";
    });

    swiperContainer.addEventListener("mouseleave", () => {
      cursor.style.opacity = 0;
      cursor.style.transform = "scale(0)";
    });
  }

function showAlert(message = "Make Sure You are using Desktop!") {
  const mask = document.getElementById("alert-mask");
  const dialog = document.getElementById("alert-dialog");
  const content = dialog.querySelector(".alert-dialog-content");

  content.innerText = message;
  mask.style.display = "block";
  dialog.style.display = "block";
}

function closeAlert() {
  document.getElementById("alert-mask").style.display = "none";
  document.getElementById("alert-dialog").style.display = "none";
}

// ✅ Expose to global scope for inline HTML to access
window.closeAlert = closeAlert;
window.showAlert = showAlert;

// Example usage after loader
function loaderAnimation() {
  const loader = document.querySelector("#loader");
  setTimeout(() => {
    loader.style.top = "-100%";
    showAlert("Make Sure You are using Desktop!");
  }, 4200);
}


window.addEventListener('DOMContentLoaded', () => {
  const invertToggle = document.getElementById('invertToggle');

  if (!invertToggle) return;

  const icon = invertToggle.querySelector('i');

  // Apply saved state
  if (localStorage.getItem('invertMode') === 'on') {
    document.body.classList.add('invert-mode');
    icon.classList.add('fa-sun');
    icon.classList.remove('fa-moon');
  }

  // Add click handler
  invertToggle.addEventListener('click', () => {
    document.body.classList.toggle('invert-mode');

    // Swap icon
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');

    // Save state
    const isInverted = document.body.classList.contains('invert-mode');
    localStorage.setItem('invertMode', isInverted ? 'on' : 'off');
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const globalCursor = document.getElementById("global-cursor");
  const cursorRing = document.querySelector(".cursor-ring");
  const cursorDot = document.querySelector(".cursor-dot");
  const swiperContainer = document.querySelector(".swiper.mySwiper");

  // Track mouse movement
  document.addEventListener("mousemove", e => {
    globalCursor.style.left = `${e.clientX}px`;
    globalCursor.style.top = `${e.clientY}px`;
  });

  // Hide global cursor when hovering over Swiper
  if (swiperContainer) {
    swiperContainer.addEventListener("mouseenter", () => {
      globalCursor.style.display = "none";
    });
    swiperContainer.addEventListener("mouseleave", () => {
      globalCursor.style.display = "block";
    });
  }

  // Hide cursor when mouse leaves the window
  document.addEventListener("mouseleave", () => {
    globalCursor.style.opacity = "0";
  });

  // Show cursor when it comes back
  document.addEventListener("mouseenter", () => {
    globalCursor.style.opacity = "1";
  });

  // Hover effects on interactive elements
  const hoverElements = document.querySelectorAll('a, button, .hover-target');
  hoverElements.forEach(el => {
    el.addEventListener("mouseenter", () => {
      globalCursor.classList.add("hovered");
    });
    el.addEventListener("mouseleave", () => {
      globalCursor.classList.remove("hovered");
    });
  });
});


document.querySelectorAll('.project-card').forEach((card) => {
    card.classList.add('tilted');

    let requestId;

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // More dramatic rotation
      const rotateX = -((y - centerY) / centerY) * 15;
      const rotateY = ((x - centerX) / centerX) * 15;

      // Throttle with requestAnimationFrame
      if (requestId) cancelAnimationFrame(requestId);
      requestId = requestAnimationFrame(() => {
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.12)`;
      });
    });

    card.addEventListener('mouseleave', () => {
      if (requestId) cancelAnimationFrame(requestId);
      card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    });
  });




  // Execute Animations
  swiperAnimation();
  menuAnimation();
  loaderAnimation();
  

});
