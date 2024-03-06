let allLinks = document.querySelectorAll(".nav-link");
let captionText = document.getElementsByTagName("h1");
let captionParagraph = document.getElementsByTagName("p");
console.log(captionText);
console.log(captionParagraph);

let TransBtn = document.getElementById("trans");
TransBtn.addEventListener("click", () => {
  if (TransBtn.getAttribute("lang") == "ar") {
    // navbar --------------------------------------------------------------------------------
    allLinks[0].innerHTML = "الرئيسية";
    allLinks[1].innerHTML = "الاقسام العامة";
    allLinks[2].innerHTML = "البرامج الخاصة";
    allLinks[3].innerHTML = "المواد الأكاديمية";
    allLinks[4].innerHTML = "نظام الساعات المعتمده";
    allLinks[5].innerHTML = "خريطة المبني";
    allLinks[6].innerHTML = "الانشطة الطلابيه";

    // article one --------------------------------------------------------------------------------
    captionText[0].innerHTML = "الساعات المعتمدة";
    captionText[1].innerHTML = "تطبيق الدرجات";
    captionParagraph[0].classList.remove("text-md-start");
    captionParagraph[0].classList.add("text-md-end");
    captionParagraph[0].innerHTML =
      "من المهم أن تفهم كيف تساهم الفصول الجامعية التي تدرسها في شهادتك عند وصولك إلى الولايات المتحدة لأول مرة. ما هو النظام المتبع لديك لمعرفة عدد الفصول الدراسية التي ستحتاجها لإنهاء شهادتك؟ هذا هو ما تعنيه الساعات المعتمدة، وهي الطريقة التي يتتبع بها طلاب الجامعة تقدمهم في درجاتهم أثناء وجودهم في المدرسة. إذا كنت طالبًا أجنبيًا حديثًا أو جديدًا بالفعل في نظام الجامعات الأمريكية، فقد يكون من الصعب معرفة ما يحدث فيما يتعلق بكيفية ارتباط الدورات الدراسية بشهادتك. لقد قمنا بتضمين جميع الإجابات في هذه المدونة ونتحدث عن نظام الساعات المعتمدة.";
    captionParagraph[1].classList.remove("text-md-start");
    captionParagraph[1].classList.add("text-md-end");
    captionParagraph[1].innerHTML =
      "لفهم نظام الساعات المعتمدة، دعونا أولا نتعرف على الساعات المعتمدة. الساعات المعتمدة، بمعناها الأكثر واقعية، هي وحدات القياس التي تشكل إكمال الدرجة العلمية. سيكون لكل دورة حد أدنى لعدد الساعات المعتمدة التي يجب إكمالها. سيكون لأي درجة مجموعتها الخاصة من متطلبات الساعات المعتمدة ... على سبيل المثال. على سبيل المثال، اعتمادًا على الجامعة، يمكن أن تتطلب درجة البكالوريوس في الولايات المتحدة ما بين 110 إلى 140 ساعة معتمدة. وبالمثل، اعتمادًا على المنهج الدراسي، قد تتراوح المدة من 30 إلى 39 ساعة أو أكثر. في نظام الساعات المعتمدة، عادة ما يتم التعبير عن طول الدورة بالساعات المعتمدة. يُمنح المقرر الدراسي إجمالي عدد الساعات المعتمدة بناءً على حجم عبء العمل وساعات التدريس. عادةً ما تستحق الأعمال المعملية أو المحاضرات في الدورة التدريبية رصيدًا واحدًا. في درجة البكالوريوس، قد تكون الدورات الأساسية تستحق 2 أو 3 وحدات دراسية. بالإضافة إلى ذلك، أثناء دراستك الجامعية، قد تصل قيمة بعضها إلى أربعة وحدات دراسية. غالبية فصول الماجستير هي إما 3 أو 4 وحدات دراسية. قد تتراوح مدة الدورة القياسية في كلية الدراسات العليا لدرجة الماجستير أو ماجستير إدارة الأعمال من 3 إلى 4 ساعات معتمدة، بناءً على وزن الدورة وعبءها.";
    // captionParagraph[2].classList.remove("text-md-start");
    // captionParagraph[2].classList.add("text-md-end");
    captionParagraph[2].innerHTML =
      "في نظام الساعات المعتمدة، تتم مطابقة كل فصل دراسي تدرسه في الفصل الدراسي مع الساعات المعتمدة التي سيتم تطبيقها على شهادتك. ومع ذلك، عادةً ما توضح الساعة المعتمدة مقدار الوقت الذي ستحتاجه لمشاهدة الدروس الخاصة بهذا الفصل على مدار الأسبوع، بالإضافة إلى مقدار الدورات الدراسية التي ستحتاج إلى القيام بها. على سبيل المثال، لا يستغرق فصل 1 ساعة معتمدة أيًا من الوقت خلال الفصل الدراسي. سيُطلب منك حضور الفصل مرة واحدة في الأسبوع وإكمال العمل المتواضع من خلال 1-2 دورات معتمدة. عندما تتقدم إلى فصول ذات مستوى أعلى، سترى أن مستوى الائتمان يرتفع حيث تتطلب الدورة المزيد من اهتمامك. بالنسبة للدورات التدريبية المكونة من 3 إلى 4 وحدات، قد تضطر إلى قضاء 3 إلى 4 ساعات أسبوعيًا في المحاضرات، مما يعني أنه سيتعين عليك قضاء المزيد من الوقت خارج الفصل في المشاريع والعمل في هذا الفصل. بالنسبة لأي فصل دراسي مدته 3-4 ساعات معتمدة، يمكنك التخطيط للعمل لمدة 6-12 ساعة إضافية خارج الفصل. يمكن أن يختلف هذا اعتمادًا على الفصل والمدرس، وهذا هو ما يحدث عادةً. الفكرة الأساسية في نظام الساعات المعتمدة هي أن عدد الساعات المعتمدة في الفصل يعكس عدد الساعات التي من المفترض أن تشاهد فيها محاضرات حول هذا الموضوع خلال الأسبوع. خذ هذا بحذر، فهو لا يمتد إلى أي مدرسة. أسهل طريقة للتفكير في الساعة المعتمدة هي التفكير في مقدار وزنها في شهادتك. كلما قل عدد الساعات المعتمدة في الفصل، قل العمل الذي يتعين عليك القيام به وقل عدد المحاضرات الأكاديمية التي يتعين عليك حضورها. كلما زاد عبء العمل ومقدار الوقت المستغرق في مشاهدة المحاضرات للفصل الدراسي، زاد عبء العمل ومقدار الوقت المستغرق في مشاهدة المحاضرات لهذا الفصل.";

    //   change lang
    TransBtn.innerHTML = "En";
    TransBtn.setAttribute("lang", "en");

    // #############################################################################
  } else if (TransBtn.getAttribute("lang") == "en") {
    // navbar --------------------------------------------------------------------------------
    allLinks[0].innerHTML = "Home";
    allLinks[1].innerHTML = "General Departments";
    allLinks[2].innerHTML = "Special Departments";
    allLinks[3].innerHTML = "Academic Material";
    allLinks[4].innerHTML = "Credit hours system";
    allLinks[5].innerHTML = "Building Map";
    allLinks[6].innerHTML = "Student Activities";

    // article one --------------------------------------------------------------------------------
    captionText[0].innerHTML = "Credit Hours";
    captionText[1].innerHTML = "Degree App";
    captionParagraph[0].classList.remove("text-md-end");
    captionParagraph[0].classList.add("text-md-start");
    captionParagraph[0].innerHTML =
      "It’s crucial to understand how the university classes you’re taking contribute to your degree when you first arrive in the United States. What system do you have in place to figure out how many classes you’ll need to finish your degree? This is what credit hours are about, and it’s how university students keep track of their degree progress while in school. If you’re a recent foreign student or actually new to the US university system, it may be difficult to figure out what’s going on in terms of how your coursework relates to your degree. We have included all of the answers in this blog and talk all about the Credit Hour System.";
    captionParagraph[1].classList.remove("text-md-end");
    captionParagraph[1].classList.add("text-md-start");
    captionParagraph[1].innerHTML =
      "To understand the credit hour system, let us first come to terms with credit hours. Credit hours, at its most concrete sense, are measurement units that make up a degree’s completion. Each course would have a minimum number of credit hours that must be completed. Any degree will have its own collection of credit hour requirements…i.e. For example, depending on the university, a bachelor’s degree in the United States can require anywhere from 110 to 140 credits. Similarly, depending on the curriculum, it may be anywhere from 30 to 39 hours or more. In a credit hour system, the length of a course is usually expressed in credit hours. A course is given the total number of credit hours based on the amount of workload and instruction hours. Usually, lab work or lectures in a course are worth one credit. In the undergraduate degree, basic courses may be worth 2 or 3 credits. Besides, as you go through your undergraduate studies, some of them could be worth four credits. The majority of master’s classes are either 3 or 4 credits. A standard course in graduate school for an MS or MBA may be 3 to 4 credit hours, based on the course weight and load.";
    // captionParagraph[2].classList.remove("text-md-end");
    // captionParagraph[2].classList.add("text-md-start");
    captionParagraph[2].innerHTML =
      "In the credit hour system, each class you take in a semester is matched to the credit hours that will be applied to your degree. However, the credit hour usually shows how much time you will need to watch lessons for that class over the week, as well as how much coursework you will need to do. A 1-credit class, for example, does not take up any of the time during the semester. You will be required to attend class once a week and complete modest work with 1- 2 credit courses. When you progress to higher-level classes, you will see that the credit level rises as the course demands more of your attention. For 3–4 credit courses, you may have to spend 3–4 hours per week in lectures, which means you’ll have to spend more time outside of class on projects and work for that class. For any 3–4 credit hour class you take, you can plan to work an additional 6–12 hours outside of class. This can vary depending on the class and the instructor, so that is how it usually happens. The core idea in a credit hour system is that the number of credit hours in a class reflects the number of hours you are supposed to watch lectures on the subject during the week. Take this with a grain of salt and it does not extend to any school. The easiest way to think of a credit hour is to consider how much “weight” it would have in your degree. The less credit hours the class has, the less work you’ll have to do and the fewer academic lectures you’ll have to attend. The greater the workload and amount of time spent watching lectures for a class, the greater the workload and amount of time spent watching lectures for that class.";

    //   change lang
    TransBtn.innerHTML = "Ar";
    TransBtn.setAttribute("lang", "ar");
    //
  }
});
