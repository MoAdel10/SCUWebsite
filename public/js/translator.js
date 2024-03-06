fetch("js/texts.json")
  .then((response) => response.json())
  .then((data) => {
    main(data);
  });
const TypeWriterEnglish = "Welcome To unofficial FCI-SCU Website";
const TypeWriterArabic =
  "اهلا بك في الموقع الرسمي لكلية الحاسبات و المعلومات جامعة قناة السويس";

let lang = localStorage.getItem("lang") || "ar";
const TransBtn = document.querySelector("#trans");

let typewriter_text = lang === "ar" ? TypeWriterArabic : TypeWriterEnglish;

let TypeWriterInterval;

function main(data) {
  setPageLang();

  TransBtn.addEventListener("click", () => {
    lang = lang === "ar" ? "en" : "ar";

    setPageLang();
  });
  function setPageLang() {
    localStorage.setItem("lang", lang);
    TransBtn.innerHTML = lang === "ar" ? "EN" : "AR";
    typewriter_text = lang === "ar" ? TypeWriterArabic : TypeWriterEnglish;

    load_typewriter();

    document.querySelectorAll(".change").forEach((element) => {
      // dfs for all elements and change their text align to the current language
      alignChangeDFS(element);
    });
    function alignChangeDFS(obj) {
      obj.style.textAlign = lang === "ar" ? "right" : "left";
      if (obj.children.length > 0) {
        for (let i = 0; i < obj.children.length; i++) {
          alignChangeDFS(obj.children[i]);
        }
      }
    }

    if (lang === "ar") {
      TransBtn.style.padding = "0 0.5rem 0 0";
      document.body.style.direction = "rtl";
      document.body.style.textAlign = "right";
    } else {
      document.body.style.direction = "ltr";
      document.body.style.textAlign = "left";
    }
    for (const key in data) {
      dfs(data[key]);
    }
  }

  function dfs(obj) {
    if (obj?.HTMLID) {
      let element = document.getElementById(obj.HTMLID);
      if (element) {
        element.innerHTML = obj[lang];
      }
    } else {
      // prevent looping through strings and nulls
      if ((typeof obj === "object" && obj !== null) || Array.isArray(obj))
        for (const k in obj) {
          dfs(obj[k]);
        }
    }
  }
}

function load_typewriter() {
  let Text_div = document.getElementsByClassName("main-text")[0];
  if (!Text_div) return console.error("No main text div found");
  Text_div.innerHTML = "";
  if (lang === "ar") Text_div.style.fontFamily = "Noto Nastaliq Urdu, serif";
  else Text_div.style.fontFamily = "Kode Mono, monospace";
  let Main_Text = typewriter_text;
  let counter = 0;

  clearInterval(TypeWriterInterval);
  TypeWriterInterval = setInterval(() => {
    if (!Main_Text[counter])
      return (counter = 0), clearInterval(TypeWriterInterval);
    Text_div.innerHTML += Main_Text[counter];
    counter++;
    if (counter == Main_Text.length) {
      clearInterval(typewriter);
      counter = 0;
      return;
    }
  }, 150);
}
