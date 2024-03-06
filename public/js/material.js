let first_Year = document.querySelector(".First");
let second_Year = document.querySelector(".Second");
let third_Year = document.querySelector(".Third");
let fourth_Year = document.querySelector(".Fourth");

var firstYear_first = document.querySelector(".ff-semiseter");
var firstYear_second = document.querySelector(".fs-semiseter");
var secondYear_first = document.querySelector(".sf-semiseter");
var secondYear_second = document.querySelector(".ss-semiseter");
var thirdYear_first = document.querySelector(".tf-semiseter");
var thirdYear_second = document.querySelector(".ts-semiseter");
var fourthYear_first = document.querySelector(".fof-semiseter");
var fourthYear_second = document.querySelector(".fos-semiseter");

var SfirstYear_first = document.querySelectorAll(".ff-subject");
var SfirstYear_second = document.querySelectorAll(".fs-subject");
var SsecondYear_first = document.querySelectorAll(".sf-subject");
var SsecondYear_second = document.querySelectorAll(".ss-subject");
var SthirdYear_first = document.querySelectorAll(".tf-subject");
var SthirdYear_second = document.querySelectorAll(".ts-subject");
var SfourthYear_first = document.querySelectorAll(".fof-subject");
var SfourthYear_second = document.querySelectorAll(".fos-subject");

// var subjectDiv = document.querySelectorAll(".subject");
// first_Year.onclick = () => {
//   if (firstYear_first.style.display === "none") {
//     firstYear_first.style.display = "block";
//     firstYear_second.style.display = "block";
//   } else {
//     firstYear_first.style.display = "none";
//     firstYear_second.style.display = "none";
//   }
//   //   subjectDiv.forEach((e) => {
//   //     if (e.style.display === "none") e.style.display = "block";
//   //     else e.style.display = "none";
//   //   });
// };

//

function toggleVisibility(element, children, parent = false) {
  element.onclick = () => {
    if (children.length > 0) {
      children.forEach((child) => {
        if (
          child.style.display === "none" ||
          getComputedStyle(child).display === "none"
        ) {
          child.style.display = "block";
        } else {
          child.style.display = "none";
          if (element == first_Year) {
            SfirstYear_first.forEach((item) => {
              if (item.style.display === "block") {
                item.style.display = "none";
              }
            });
          }

          if (element == first_Year) {
            SfirstYear_second.forEach((item) => {
              if (item.style.display === "block") {
                item.style.display = "none";
              }
            });
          }

          if (element == second_Year) {
            SsecondYear_first.forEach((item) => {
              if (item.style.display === "block") {
                item.style.display = "none";
              }
            });
          }

          if (element == second_Year) {
            SsecondYear_second.forEach((item) => {
              if (item.style.display === "block") {
                item.style.display = "none";
              }
            });
          }

          if (element == third_Year) {
            SthirdYear_first.forEach((item) => {
              if (item.style.display === "block") {
                item.style.display = "none";
              }
            });
          }

          if (element == third_Year) {
            SthirdYear_second.forEach((item) => {
              if (item.style.display === "block") {
                item.style.display = "none";
              }
            });
          }

          if (element == fourth_Year) {
            SfourthYear_first.forEach((item) => {
              if (item.style.display === "block") {
                item.style.display = "none";
              }
            });
          }

          if (element == fourth_Year) {
            SfourthYear_second.forEach((item) => {
              if (item.style.display === "block") {
                item.style.display = "none";
              }
            });
          }
        }
      });
    }
  };
}

toggleVisibility(
  first_Year,
  [firstYear_first, firstYear_second],
  (parent = true)
);
toggleVisibility(
  second_Year,
  [secondYear_first, secondYear_second],
  (parent = true)
);
toggleVisibility(
  third_Year,
  [thirdYear_first, thirdYear_second],
  (parent = true)
);
toggleVisibility(
  fourth_Year,
  [fourthYear_first, fourthYear_second],
  (parent = true)
);

// Additional toggles for individual subjects
toggleVisibility(firstYear_first, SfirstYear_first);
toggleVisibility(firstYear_second, SfirstYear_second);

toggleVisibility(secondYear_first, SsecondYear_first);
toggleVisibility(secondYear_second, SsecondYear_second);

toggleVisibility(thirdYear_first, SthirdYear_first);
toggleVisibility(thirdYear_second, SthirdYear_second);

toggleVisibility(fourthYear_first, SfourthYear_first);
toggleVisibility(fourthYear_second, SfourthYear_second);
