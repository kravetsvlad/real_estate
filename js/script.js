//======================================Menu Burger for nav bar====================================================================

const iconMenu = document.querySelector(".menu__icon");
if (iconMenu) {
  const menuBody = document.querySelector(".menu__body");
  const logo = document.querySelector(".header__logo");
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
    logo.classList.toggle("_active");
  });
}

//======================================Swiper for slider in main block====================================================================

const swiper = new Swiper(".slider-main-block", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".body-main-block__arrow.swiper-button-next",
    prevEl: ".body-main-block__arrow.swiper-button-prev",
  },
});

//======================================Swiper for reviews section====================================================================

const swiper3 = new Swiper(".reviews__items", {
  // Optional parameters
  // loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    991: {
      slidesPerView: 3,
      navigation: {
        nextEl: ".item-reviews__arrow.swiper-button-next",
        prevEl: ".item-reviews__arrow.swiper-button-prev",
      },
    },
    768: {
      slidesPerView: 2,
      navigation: {
        nextEl: ".item-reviews__arrow.swiper-button-next",
        prevEl: ".item-reviews__arrow.swiper-button-prev",
      },
    },
  },
  // Navigation arrows
});

//======================================Tabs for reviews section====================================================================

const tabNavItems = document.querySelectorAll(".tabs-deals__button");
const tabItems = document.querySelectorAll(".item-tabs");
const tabArrows = document.querySelectorAll(".item-tabs__arrows");

document.addEventListener("click", function (e) {
  const targetElement = e.target;
  let currentActiveIndex = null;
  let newActiveIndex = null;
  if (targetElement.closest(".tabs-deals__button")) {
    tabNavItems.forEach((tabNavItem, index) => {
      if (tabNavItem.classList.contains("active")) {
        currentActiveIndex = index;
        tabNavItem.classList.remove("active");
      }
      if (tabNavItem == targetElement) {
        newActiveIndex = index;
      }
      tabNavItem.classList.remove("active");
    });
    targetElement.classList.add("active");
    tabItems[currentActiveIndex].classList.remove("active");
    tabArrows[currentActiveIndex].classList.remove("active");
    tabItems[newActiveIndex].classList.add("active");
    tabArrows[newActiveIndex].classList.add("active");
  }
});

//======================================Swiper for projects section====================================================================

const swiper2 = new Swiper(".first-slider", {
  // Optional parameters

  slidesPerView: 1,
  spaceBetween: 15,
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 26,
      grid: {
        rows: 2,
        fill: "row",
      },
      navigation: {
        prevEl: ".item-tabs__arrow.swiper-button-prev.for-first-slider",
        nextEl: ".item-tabs__arrow.swiper-button-next.for-first-slider",
      },
    },
  },
});

const swiper22 = new Swiper(".second-slider", {
  // Optional parameters

  slidesPerView: 1,
  spaceBetween: 15,
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 26,
      grid: {
        rows: 2,
        fill: "row",
      },
      navigation: {
        prevEl: ".item-tabs__arrow.swiper-button-prev.for-second-slider",
        nextEl: ".item-tabs__arrow.swiper-button-next.for-second-slider",
      },
    },
  },
});

const swiper23 = new Swiper(".third-slider", {
  // Optional parameters

  slidesPerView: 1,
  spaceBetween: 15,
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 26,
      grid: {
        rows: 2,
        fill: "row",
      },
      navigation: {
        prevEl: ".item-tabs__arrow.swiper-button-prev.for-third-slider",
        nextEl: ".item-tabs__arrow.swiper-button-next.for-third-slider",
      },
    },
  },
});

const swiper24 = new Swiper(".fourth-slider", {
  // Optional parameters

  slidesPerView: 1,
  spaceBetween: 15,
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 26,
      grid: {
        rows: 2,
        fill: "row",
      },
      navigation: {
        prevEl: ".item-tabs__arrow.swiper-button-prev.for-fourth-slider",
        nextEl: ".item-tabs__arrow.swiper-button-next.for-fourth-slider",
      },
    },
  },
});

// swipers = document.querySelector(".tabs-deals__item");
// console.log(swipers);
// wrappers = document.querySelector(".item-tabs__items");
// console.log(wrappers);
// slides = document.querySelectorAll(".item-tabs__item");
// console.log(slides);

/* Swiper
 **************************************************************/
// const swiper2 = new Swiper(".item-tabs", {
//   // Optional parameters
//   loop: true,
//   slidesPerView: 1,
//   breakpoints: {
//     600: {
//       slidesPerView: 2,
//       spaceBetween: 15,
//     },
//   },
// });
// var init = false;

// /* Which media query
//  **************************************************************/
// function swiperMode() {
//   let mobile = window.matchMedia("(min-width: 0px) and (max-width: 768px)");
//   let tablet = window.matchMedia("(min-width: 769px) and (max-width: 1024px)");
//   let desktop = window.matchMedia("(min-width: 1025px)");

//   // Enable (for mobile)
//   if (mobile.matches) {
//     if (!init) {
//       init = true;

//       swipers.classList.add("swiper");
//       wrappers.classList.add("swiper-wrapper");
//       slides.forEach((element) => {
//         element.classList.add("swiper-slide");
//       });
//     }
//   }

//   // Disable (for tablet)
//   else if (tablet.matches) {
//     swipers.classList.remove("swiper");
//     wrappers.classList.remove("swiper-wrapper");
//     slides.forEach((element) => {
//       element.classList.remove("swiper-slide");
//     });
//     // swiper2.destroy();
//     init = false;
//   }

//   // Disable (for desktop)
//   else if (desktop.matches) {
//     swipers.classList.remove("swiper");
//     wrappers.classList.remove("swiper-wrapper");
//     slides.forEach((element) => {
//       element.classList.remove("swiper-slide");
//     });
//     // swiper2.destroy();
//     init = false;
//   }
// }

// /* On Load
//  **************************************************************/
// window.addEventListener("load", function () {
//   swiperMode();
// });

// /* On Resize
//  **************************************************************/
// window.addEventListener("resize", function () {
//   swiperMode();
// });

// const swiper2 = new Swiper(".item-tabs", {
//   // Optional parameters
//   loop: true,
//   slidesPerView: 1,
//   breakpoints: {
//     600: {
//       slidesPerView: 2,
//       spaceBetween: 15,
//     },
//   },
// });

// var swiper2 = Swiper;

// function callMe() {
//   if (window.matchMedia("(max-width:767px)").matches) {
//     swipers.classList.add("swiper");
//     wrappers.classList.add("swiper-wrapper");
//     slides.forEach((element) => {
//       element.classList.add("swiper-slide");
//     });
//     swiper2 = new Swiper(".item-tabs", {
//       // Optional parameters
//       loop: true,
//       slidesPerView: 1,
//       breakpoints: {
//         600: {
//           slidesPerView: 2,
//           spaceBetween: 15,
//         },
//       },
//     });
//   } else {
//     swiper2.destroy();

//     swipers.classList.remove("swiper");
//     wrappers.classList.remove("swiper-wrapper");
//     slides.forEach((element) => {
//       element.classList.remove("swiper-slide");
//     });
//   }
// }

// window.onload = function () {
//   callMe();
// };

// window.onresize = function () {
//   callMe();
// };
