let maincolor = localStorage.getItem("colorItem");

if (maincolor !== null) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("colorItem")
  );

  //   clear active color
  document.documentElement.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");

    if (element.dataset.color === maincolor) {
      element.classList.add("active");
    }
  });

  //   add active color
}

// let imgParent = document.querySelector(".parent");
// let listOfImages = [
//   "../img/images/1.jpg",
//   "../img/images/2.jpg",
//   "../img/images/3.jpg",
//   "../img/images/4.jpg",
// ];

// let i = 0;

// function gg(i) {
//   setInterval(() => {
//     imgParent.style.backgroundImage = `url("${listOfImages[i]}")`;

//     if (i < listOfImages.length - i) {
//       i++;
//     } else {
//       i = 0;
//     }
//   }, 1000);
// }

// gg(0);

// setting toggle

let setting = document.querySelector(".setting-control");
let settingBtn = document.querySelector(".settingBtn");
settingBtn.addEventListener("click", function () {
  setting.classList.toggle("clicked");
});

let lists = document.querySelectorAll(".insetting li");
// console.log(lists);

for (let i = 0; i < lists.length; i++) {
  lists[i].onclick = function (e) {
    // console.log(i);
    //set it in root (--main-color)
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );

    // save it in localStorage
    localStorage.setItem("colorItem", e.target.dataset.color);

    // delete active class
    activeclass(e);
  };

  // backgorunImage

  // let bg = localStorage.getItem("BackGround");

  // if (bg !== null) {
  //   console.log();
  // }
  // const spanItem = document.querySelectorAll(".background-parent span");

  // // console.log(spanItem);

  // spanItem.forEach((span) => {
  //   span.addEventListener("click", (e) => {
  //     e.target.parentElement.querySelectorAll(".pop").forEach((ele) => {
  //       ele.classList.remove("pop");
  //     });

  //     e.target.classList.add("pop");

  //     if (e.target.dataset.back == "yes") {
  //       gg(0);
  //     } else {
  //       gg(1);
  //     }
  //   });
  // });

  // span skills when you scroll the page and arrive to our skills the width being change
  let parentSkills = document.querySelector(".skills");
  // console.log(parentSkills);

  window.onscroll = function () {
    let scrollTop = parentSkills.offsetTop;

    let parentDivHeight = parentSkills.offsetHeight;

    let windowMonitor = this.innerHeight;

    let windowScroll = scrollY; //or pageYOffset;

    // condition when arrive to our skills div the widht can be change

    if (windowScroll > scrollTop + parentDivHeight - windowMonitor) {
      // SPANS

      let spans = document.querySelectorAll(".skill-box .skill-progress span");

      spans.forEach((span) => {
        span.style.width = span.dataset.range;
      });
    }
  };

  // popup when click any img the popup display block

  let popup = document.querySelector(".popup");
  // console.log(popup);

  let headPopup = document.querySelector(".popup-head");
  // console.log(headPopup);

  let spanPopup = document.querySelector(".popup span");
  // console.log(spanPopup);

  let copiedImage = document.querySelector(".popup-img img");
  // console.log(copiedImage);

  // imges in website onclick one of them

  let realImage = document.querySelectorAll(".gallery-images img");
  // console.log(realImage);

  realImage.forEach((image) => {
    image.addEventListener("click", function () {
      // popup.style.display = "block";
      popup.style.transform = "scale(1)";
      copiedImage.style.transform = "scale(1)";
      if (image.alt !== null) {
        headPopup.innerHTML = image.alt;
      }

      copiedImage.src = image.src;
    });
  });

  // closed popup

  spanPopup.addEventListener("click", () => {
    // popup.style.display = "none";
    copiedImage.style.transform = "scale(0)";
    popup.style.transform = "scale(0)";
  });

  // scroll on click the bullite
  // بعرف البوليتس كلهم عشان اعمل عليهم فور لوب وبعدين هقوله لما تضغط عليهم فيه جواهم متغير ""المتغير ده.التارجت .الداتاست اللي انت مسميها المفروض ب اسمه الكلاس
  let bullites = document.querySelectorAll(".bullite");
  // console.log(bullite);

  // nav-bar on click like bullite
  let links = document.querySelectorAll(".header a");

  function scrollAllUNeed(ele) {
    ele.forEach((a) => {
      a.addEventListener("click", (b) => {
        b.preventDefault();
        document.querySelector(b.target.dataset.class).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }

  scrollAllUNeed(links);
  scrollAllUNeed(bullites);

  function activeclass(ele) {
    ele.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });

    ele.target.classList.add("active");
  }
}

// hide or not bullites

// parent of bullites
let parentBullites = document.querySelector(".bullits");

// yes and no for setting bar to hide bullites or not
let yesBullite = document.querySelector(".yes-bullite");
let noBullite = document.querySelector(".no-bullite");

// add it in localStorage
let showLocalBullites = localStorage.getItem("bullites-option");

if (showLocalBullites !== null) {
  if (showLocalBullites === "none") {
    parentBullites.classList.add("yes");
    parentBullites.classList.remove("no");
    yesBullite.style.opacity = 1;
    noBullite.style.opacity = 0.6;
  } else {
    parentBullites.classList.add("no");
    parentBullites.classList.remove("yes");
    yesBullite.style.opacity = 0.6;
    noBullite.style.opacity = 1;
  }
}
yesBullite.addEventListener("click", function () {
  parentBullites.classList.add("yes");
  parentBullites.classList.remove("no");
  yesBullite.style.opacity = 1;
  noBullite.style.opacity = 0.6;
  localStorage.setItem("bullites-option", "none");
});

noBullite.addEventListener("click", () => {
  parentBullites.classList.add("no");
  parentBullites.classList.remove("yes");
  yesBullite.style.opacity = 0.6;
  noBullite.style.opacity = 1;
  localStorage.setItem("bullites-option", "block");
});

// clear all localsotrage on cleck button rset in setting bar

let clearAll = document.querySelector(".clear-local");

clearAll.addEventListener("click", () => {
  localStorage.clear();
  window.location.reload();
});

// nav bar in small screen

let mobile = document.querySelector(".header .mobile");

let bar = document.querySelector(".header ul");

let about = document.querySelector(".about-us");
console.log(about);
mobile.addEventListener("click", (e) => {
  e.stopPropagation();
  bar.classList.toggle("open");
  mobile.classList.toggle("meanu-active");
});

// close mobile when click any where
document.onclick = function () {
  if (bar.classList == "open") {
    bar.classList.toggle("open");
    mobile.classList.toggle("meanu-active");
  }
};

// عشان اقوله وانت بتعمل كليك علي اي حاجه في الدوكيومنت ملكش دعوة ب دي
bar.onclick = function (e) {
  e.stopPropagation();
};
