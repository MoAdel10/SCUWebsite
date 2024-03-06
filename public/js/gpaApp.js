let SubmitBTN = document.getElementById("sub-btn");
SubmitBTN.addEventListener("click", (e) => {
  handleClick();
});

function handleClick() {
  var currGPAnum = parseFloat(document.getElementById("input1").value) || 0;
  var currCredTotal = parseFloat(document.getElementById("input2").value) || 0;
  var goalGPAnum = parseFloat(document.getElementById("input3").value) || 0;
  var newCreditnum = parseFloat(document.getElementById("input4").value) || 0;

  if (
    isNaN(currGPAnum) ||
    isNaN(currCredTotal) ||
    isNaN(goalGPAnum) ||
    isNaN(newCreditnum)
  ) {
    swal({
      icon: "error",
      title:
        "Invalid input. Please fill in all fields with valid numerical values.",
      text: "",
      footer: "",
    });
  } else {
    var points1 =
      goalGPAnum * (currCredTotal + newCreditnum) - currGPAnum * currCredTotal;
    var GPA1 = Math.min(points1 / newCreditnum, 4.0);

    if (goalGPAnum > 4) {
      swal({
        icon: "error",
        title: "Invalid input. Desired GPA exceeds the maximum GPA of 4.0.",
        text: "",
        footer: "",
      });
    } else {
      swal(
        "To reach your goal, your GPA for your next " +
          newCreditnum +
          " credits must be " +
          GPA1.toFixed(3) +
          " or more"
      );
    }
  }
}
