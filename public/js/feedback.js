let sendBTN = document.querySelector("#sub-btn");
sendBTN.addEventListener("click", () => {
  BtnOperations();
});

function BtnOperations() {
  let UserName = document.querySelector("#input1");
  let FeedbackMSG = document.querySelector("#input3");
  if (UserName.value == "" || FeedbackMSG.value == "") {
    swal({
      icon: "error",
      title: "Invalid input. Please fill in all fields.",
      text: "",
      footer: "",
    });
  } else {
    swal("Thanks For Your FeedBack  :) ");
    UserName.value = "";
    FeedbackMSG.value = "";
  }
}
