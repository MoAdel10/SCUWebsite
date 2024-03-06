let allLinks = document.querySelectorAll(".nav-link");
let allDropMenus = document.querySelectorAll(".dropdown-menu");
let linksDrops = document.querySelectorAll(".dropdown-menu a");
let captionParagraph = document.querySelector(".caption p");
let about = document.querySelector(".about");
let allHeaders = document.querySelectorAll(".about h1");
let allParagraphs = document.querySelectorAll(".about p");
let allFooters = document.querySelectorAll(".footer p");

let TransBtn = document.getElementById("trans");
TransBtn.addEventListener("click", () => {
  let captionText = document.querySelector(".caption h1");
  if (
    captionText.getAttribute("text-data").trim() == captionText.innerHTML.trim()
  ) {
    if (TransBtn.getAttribute("lang") == "ar") {
      captionText.style.fontFamily = "Noto Nastaliq Urdu, serif";
      captionText.style.lineHeight = "100px";
      //   captionText.style.paddingTop = "50px ";

      //   document.body.style.cssText = `font-family: "Noto Nastaliq Urdu", serif !important`;

      // navbar --------------------------------------------------------------------------------
      allDropMenus.forEach((e) => {
        e.style.width = "70%";
      });
      allLinks[0].innerHTML = "الرئيسية";
      allLinks[1].innerHTML = "الاقسام العامة";
      allLinks[2].innerHTML = "البرامج الخاصة";
      allLinks[3].innerHTML = "المواد الأكاديمية";
      allLinks[4].innerHTML = "نظام الساعات المعتمده";
      allLinks[5].innerHTML = "خريطة المبني";
      allLinks[6].innerHTML = "الانشطة الطلابيه";
      linksDrops[0].innerHTML = "علوم الحاسب";
      linksDrops[1].innerHTML = "نظم المعلومات";
      linksDrops[2].innerHTML = "العلوم الاساسيه";
      linksDrops[3].innerHTML = "هندسة البرمجيات";
      linksDrops[4].innerHTML = "المعلوماتية الحيوية";
      linksDrops[5].innerHTML = "الذكاء الاصطناعي";
      linksDrops[6].innerHTML = "المبني القديم";
      linksDrops[7].innerHTML = "المبني الجديد";
      // home --------------------------------------------------------------------------------
      captionText.setAttribute(
        "text-data",
        "اهلا بك في الموقع الرسمي لكلية الحاسبات و المعلومات جامعة قناة السويس"
      );
      captionText.innerHTML =
        "اهلا بك في الموقع الرسمي لكلية الحاسبات و المعلومات جامعة قناة السويس";
      captionParagraph.innerHTML =
        "تعد كلية الحاسبات والمعلومات مكانًا مثيرًا للاكتشاف والابتكار في عالم التكنولوجيا، حيث يتم تدريب الطلاب وإعدادهم ليصبحوا قادة ومبتكرين في مجال الحاسبات وتكنولوجيا المعلومات.";

      // about --------------------------------------------------------------------------------
      about.style.fontFamily = `font-family: "Cairo", sans-serif`;
      allHeaders[0].innerHTML = "رسالة الكلية";
      allHeaders[1].innerHTML = "رؤية الكلية";
      allHeaders[2].innerHTML = "الاهداف الاستراتيجية";
      allParagraphs[0].classList.remove("text-md-start");
      allParagraphs[0].classList.add("text-md-end");
      allParagraphs[0].innerHTML =
        "تطمح كلية الحاسبات والمعلومات بجامعة قناة السويس إلى أن تحتل مكانة مرموقة في مجال الحاسبات ونظم المعلومات على المستوى المحلي والإقليمي.";
      allParagraphs[1].classList.remove("text-md-start");
      allParagraphs[1].classList.add("text-md-end");
      allParagraphs[1].innerHTML =
        "تلتزم كلية الحاسبات والمعلومات بجامعة قناة السويس بإعداد خريجين قادرين على المنافسة في سوق العمل والبحث العلمي في مجال الحاسبات ونظم المعلومات وتقديم خدمات فعالة للمجتمع في ظل منظومة من القيم والأخلاق .";
      allParagraphs[2].classList.remove("text-md-start");
      allParagraphs[2].classList.add("text-md-end");
      allParagraphs[2].innerHTML =
        "تطوير وتحديث البرامج والمناهج والأساليب التعليمية. تطوير نظام لدعم الطلاب والخريجين. التقييم المستمر للعملية التعليمية وتقييم مدى فاعليتها.";

      // footer --------------------------------------------------------------------------------
      allFooters[0].innerHTML =
        "مصر - الاسماعيليه - الجامعة الجديدة - كيلو 4.5";
      allFooters[2].innerHTML = "هاتف:/01022474253";

      //   change lang
      TransBtn.innerHTML = "En";
      TransBtn.setAttribute("lang", "en");

      // #############################################################################
    } else if (TransBtn.getAttribute("lang") == "en") {
      captionText.style.lineHeight = "40px";
      // navbar --------------------------------------------------------------------------------
      allDropMenus.forEach((e) => {
        e.style.width = "100%";
      });
      allLinks[0].innerHTML = "Home";
      allLinks[1].innerHTML = "General Departments";
      allLinks[2].innerHTML = "Special Departments";
      allLinks[3].innerHTML = "Academic Material";
      allLinks[4].innerHTML = "Credit hours system";
      allLinks[5].innerHTML = "Building Map";
      allLinks[6].innerHTML = "Student Activities";
      linksDrops[0].innerHTML = "Computer sciences";
      linksDrops[1].innerHTML = "Information System";
      linksDrops[2].innerHTML = "Basic sciences";
      linksDrops[3].innerHTML = "Software Engineering";
      linksDrops[4].innerHTML = "bioinformatics";
      linksDrops[5].innerHTML = "Artificial Intelligence";
      linksDrops[6].innerHTML = "Old building";
      linksDrops[7].innerHTML = "New building";

      // home --------------------------------------------------------------------------------
      captionText.setAttribute(
        "text-data",
        "Welcome To unofficial FCI-SCU Website"
      );
      captionText.style.fontFamily = "Kode Mono, monospace";
      captionText.innerHTML = "Welcome To unofficial FCI-SCU Website";
      captionParagraph.innerHTML =
        "Faculty of Computers and Information is an exciting place for discovery and innovation in the world of technology, where students are trained and prepared to become leaders and innovators in the field of computers and information technology.";

      // about --------------------------------------------------------------------------------
      allHeaders[0].innerHTML = "Academic Message";
      allHeaders[1].innerHTML = "Academic Vision";
      allHeaders[2].innerHTML = "Strategic Goals";
      allParagraphs[0].classList.remove("text-md-end");
      allParagraphs[0].classList.add("text-md-start");
      allParagraphs[0].innerHTML =
        "The Faculty of Computers and Information at Suez Canal University aspires to occupy a prominent position in the field of computers and information systems at the local and regional levels.";
      allParagraphs[1].classList.remove("text-md-end");
      allParagraphs[1].classList.add("text-md-start");
      allParagraphs[1].innerHTML =
        "The Faculty of Computers and Information at Suez Canal University is committed to preparing graduates capable of competing in the labor market and scientific research in the field of computers and information systems and providing effective services to society in light of a system of values ​​and ethics.";
      allParagraphs[2].classList.remove("text-md-end");
      allParagraphs[2].classList.add("text-md-start");
      allParagraphs[2].innerHTML =
        "Develop and update programs, curricula, and educational methods Developing a system to support students and graduates Continuous evaluation of the educational process and evaluation of its effectiveness.";

      // footer --------------------------------------------------------------------------------
      allFooters[0].innerHTML = "Egypt - Ismailia - New Universty - K4.5";
      allFooters[2].innerHTML = "Phone:/01022474253";

      //   change lang
      TransBtn.innerHTML = "Ar";
      TransBtn.setAttribute("lang", "ar");
      //
    }
  }
});
