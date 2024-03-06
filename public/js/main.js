// start loader------------------------------------------------------##########################################
let Loader = document.querySelector(".loader");
window.onload = () => {
  Loader.classList.add("loader-hidden");
  Loader.addEventListener("transitionend", () => {
    // document.body.removeChild("loader");
  });
  document.documentElement.style.setProperty(
    "--btn-location",
    localStorage.getItem("btn-location")
  );
  document.documentElement.style.setProperty(
    "--section-primary-color",
    localStorage.getItem("Primary-theme-color")
  );
  document.documentElement.style.setProperty(
    "--section-scondary-color",
    localStorage.getItem("scondary-theme-color")
  );
  document.documentElement.style.setProperty(
    "--section-third-color",
    localStorage.getItem("third-theme-color")
  );
};
// end loader------------------------------------------------------##########################################

// start theme switcher------------------------------------------------------########################################
let SwitchBtn = document.getElementById("color_mode");
// let activites = document.getElementsByClassName("activites")[0];
// console.log(activites);
SwitchBtn.onclick = () => {
  let colorAttr = SwitchBtn.getAttribute("value");
  if (colorAttr == 1) {
    // img_arr = ["activites1.jpg", "activites22.png", "activites55.png"];
    // slider(id);
    document.documentElement.style.setProperty("--btn-location", "23px");
    localStorage.setItem("btn-location", "23px");
    SwitchBtn.setAttribute("value", 2);
    document.documentElement.style.setProperty(
      "--section-primary-color",
      "#ce1111"
    );
    localStorage.setItem("Primary-theme-color", "#ce1111");
    document.documentElement.style.setProperty(
      "--section-scondary-color",
      "#99001a"
    );
    localStorage.setItem("scondary-theme-color", "#99001a");
    document.documentElement.style.setProperty(
      "--section-third-color",
      "#ff531f"
    );
    localStorage.setItem("third-theme-color", "#ff531f");
  } else {
    // img_arr = ["slider11.jpg", "slider22.jpg", "slider44.jpg"];
    // slider(id);
    SwitchBtn.setAttribute("value", 1);
    document.documentElement.style.setProperty("--btn-location", "2px");
    localStorage.setItem("btn-location", "2px");
    document.documentElement.style.setProperty(
      "--section-primary-color",
      "#0f7fcf"
    );
    localStorage.setItem("Primary-theme-color", "#0f7fcf");
    document.documentElement.style.setProperty(
      "--section-scondary-color",
      "#3b6cf5"
    );
    localStorage.setItem("scondary-theme-color", "#3b6cf5");
    document.documentElement.style.setProperty(
      "--section-third-color",
      "#0cbdf3"
    );
    localStorage.setItem("third-theme-color", "#0cbdf3");
  }
};
// end theme switcher------------------------------------------------------########################################

// start link active------------------------------------------------------##########################################
let All_Links = document.getElementsByClassName("nav-link");
let Navbar = document.querySelector(".navbar-collapse");
// console.log(All_Links);
for (let i = 0; i < All_Links.length; i++) {
  All_Links[i].addEventListener("click", function (e) {
    let TargetOne = e.target;
    for (let i = 0; i < All_Links.length; i++) {
      All_Links[i].classList.remove("active");
    }
    TargetOne.classList.add("active");
    // if (i == 1) {
    //   location.href = "generalDEP.html#general-home";
    // } else if (i == 2) {
    //   location.href = "specialDEP.html#special-home";
    // }
  });
}
// end link active------------------------------------------------------##########################################

// start img slider------------------------------------------------------##########################################
//if (window.location.hash == "#Home") {
  let img_slider = document.querySelector(".home");
  let left_arr = document.querySelector(".arrow-left");
  let right_arr = document.querySelector(".arrow-right");
  console.log(right_arr);

  let caption_header = document.querySelector(".caption h1");
  let caption_par = document.querySelector(".caption p");
  let img_arr = ["slider11.jpg", "slider22.jpg", "slider44.jpg"];
  //
  let id = 0;
  setInterval(() => {
    id++;
    if (id > img_arr.length - 1) {
      id = 0;
    }
    slider(id);
  }, 8000);
  function slider(id) {
    img_slider.style.backgroundImage = `url(Img/${img_arr[id]})`;
    img_slider.classList.add(`img-fade`);
    setTimeout(() => {
      img_slider.classList.remove(`img-fade`);
    }, 0);
  }
    left_arr.addEventListener("click", () => {
      id--;
      if (id < 0) {
        id = img_arr.length - 1;
      }
      slider(id);
    });
    right_arr.addEventListener("click", () => {
      id++;
      if (id > img_arr.length - 1) {
        id = 0;
      }
      slider(id);
    });
//}
// end img slider------------------------------------------------------##########################################

// // start link active------------------------------------------------------##########################################
// let All_Links = document.getElementsByClassName("nav-link");
// let Navbar = document.querySelector(".navbar-collapse");
// // console.log(All_Links);
// for (let i = 0; i < All_Links.length; i++) {
//   All_Links[i].addEventListener("click", function (e) {
//     let TargetOne = e.target;
//     for (let i = 0; i < All_Links.length; i++) {
//       All_Links[i].classList.remove("active");
//     }
//     TargetOne.classList.add("active");
//     // if (Navbar.classList.contains("show")) {
//     //   Navbar.classList.remove("show");
//     // }
//   });
// }
// end link active------------------------------------------------------##########################################



