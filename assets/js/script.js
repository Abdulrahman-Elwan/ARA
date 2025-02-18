// scrolled  nav

document.addEventListener("scroll", function () {
  const navbar = document.querySelector(".fixed-top-nav");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});




// Newsletter Subscription

(function () {
  emailjs.init('3gUIxBk1fE5bV8sNQ'); // Replace 'YOUR_USER_ID' with your EmailJS User ID
})();

// Form submission handler
document.getElementById('subscribeForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const emailInput = document.getElementById('emailInput');
  const emailError = document.getElementById('emailError');
  const emailSuccess = document.getElementById('emailSuccess');
  const email = emailInput.value.trim();

  // Email validation
  if (!validateEmail(email)) {
    emailError.textContent = 'Please enter a valid email address.';
    return;
  }

  emailError.textContent = ''; // Clear error message

  // Prepare email parameters
  const templateParams = {
    subscriber_email: email, // Match this with your EmailJS template
  };

  console.log('Email being sent:', email); // Debugging log

  // Send email using EmailJS
  emailjs
    .send('service_k0a6oqv', 'template_yge24ol', templateParams)
    .then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text);
        alert("Thank you for subscribing! We have received your email.");
        emailInput.value = ''; // Clear input field
      },
      function (error) {
        console.error('FAILED...', error);
        emailError.textContent = 'Failed to subscribe. Please try again later.';
      }
    );
});


// Email validation function
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
}

// *********** translations ***********

let translations = {
  en: {
    en: "EN",
    ar: "AR",
    home: "Home",
    about: "About",
    product: "Products",
    contact: "Contact",
    ara: "ARA ",
    ara_hero_title: "Discover cutting-edge Cleaning Solutions tailored to your needs",
    ara_hero_p: "We provide a comprehensive range of high-quality chemicals and cleaning products, carefully designed to meet the diverse needs of all sectors. Our products are tailored to deliver exceptional performance in industrial, commercial, and household applications, ensuring that every client finds the right solution for their unique requirements.",
    ara_hero_bottom: "Get Started",
    about_us: "About US",
    about_us_who: "Who We Are",
    about_us_p_main: "ARA Specialty Chemicals Company is a pioneering force in the cleaning materials industry within the Kingdom of Saudi Arabia. with a vision to explore new horizons, We are committed to delivering high-quality, innovative products that set the standard for both domestic and industrial cleaning solutions. Our dedication is not just to meet market expectations but to surpass them with superior products that redefine the concept of cleanliness and efficiency.",
    about_us_bottom: "Read More",
    process_h: "We have a core process in place<br> to operate <span class=\"accent\">our company</span> efficiently",
    deal: "ARA DEAL",
    deal_p: "Discover our range of high-quality products designed to enhance your daily life with unparalleled freshness and care.",
    shop_Now: "Shop Now",
    clients_Say: "What Our Clients Say",
    clients_Say_p: "We take pride in delivering exceptional cleaning solutions that meet the needs of our customers.",
    client1_Say: "ARA products are outstanding! They have made cleaning easier and more effective for my home.",
    client2_Say: "We use ARA's cleaning solutions in our offices, and the results are always impressive. Highly recommend!",
    client3_Say: "The safety and eco-friendliness of ARA's products give me peace of mind for my family's health.",
    client4_Say:"Using ARA's industrial cleaning solutions has been a game changer for our facility. Exceptional quality!",
    client5_Say:"ARA's wide range of products ensures that we can cater to every customer's needs. Excellent service!",
    about_ara_footer: "About ARA",
    about_ara_footer_p: "ARA is a 100% Saudi Company producing cleaning and personal care products and distributing that help maintain hygiene, cleanliness and overall well-being. Our Product categories are Household Cleaning, Laundry Care, Personal Hygiene, Skincare and Beauty in addition to Industrial Cleaning Chemicals. With advancement technology, we are introducing smart cleaning solutions, antibacterial formulations and specialized cleaning solutions. We thrive by balancing product effectiveness, sustainability and customer trust while continuously innovating to meet changing consumer needs.",
    Stay_Connected: "Stay Connected",
    Stay_Connected_p: "Subscribe to our newsletter to receive updates on new products, special offers, and industry news.",
    subscribe: "Subscribe",
    more_information: "More Information",
    footer_link1: "About Us",
    footer_link2: "Our Products",
    footer_link3: "Privacy Policy",
    footer_link4: "Contact Us",

    // *************** About page ***************

    about_ara_hero_p: "Discover the story and values that make ARA a trusted leader in cleaning solutions.",
    Happy_Client: "<strong>Happy Clients</strong> <br> <span>consequuntur quae</span>",
    cum_Product: "<strong>Product</strong> <br> <span>adipisci atque cum quia aut</span>",
    support_Hours: "<strong>Hours Of Support</strong> <br> <span>aut commodi quaerat</span>",
    hard_Worker: "<strong>Hard Workers</strong> <br> <span>rerum asperiores dolor</span>",
    about_us_p_about: "<span>ARA</span> ARA Specialty Chemicals Company is a pioneering force in the cleaning materials industry within the Kingdom of Saudi Arabia. With a vision to explore new horizons, we are committed to delivering high-quality, innovative products that set the standard for both domestic and industrial cleaning solutions. Our dedication is not just to meet market expectations but to surpass them with superior products that redefine the concept of cleanliness and efficiency.",
    about_us_ul_li1: "The company was established in 2023 as a leading manufacturer of air fresheners, detergents, and liquid sanitization and disinfection products in the Kingdom of Saudi Arabia.",
    about_us_ul_li2: "Headquartered in Jubail, Saudi Arabia, where both the main office and the factory are located, we offer a diverse range of products in various sizes, starting from 150 ml bottles up to 30-liter gallons. This allows us to meet the varying demands of the local market and international markets through our export division.",
    about_us_ul_li3: "We strive to elevate the industry of air fresheners and liquid detergents in the Kingdom by providing the highest quality products at the most competitive prices.",
    explore_Products: "Explore Our Products",
    mission_vision_h: "Our Vision & Mission",
    our_Vision: "Our Vision",
    our_Vision_p: "At ARA, our vision is to illuminate homes and industrial establishments across Saudi Arabia and beyond with an innovative range of cleaning products that stand as a symbol of quality, innovation, and national pride. We aspire for our brand to become a household name, recognized and respected for its active contribution to promoting cleanliness, health, and environmental sustainability.",
    our_Mission: "Our Mission",
    our_Mission_p: "Our mission extends to enhancing levels of cleanliness and hygiene by offering superior-quality detergents, expertly crafted disinfectants, captivating air fresheners, clean and bright fabrics with safe bleach, hand wash liquids, and other essential products.",
    our_Goal: "Our Goal",
    our_Goal_p: "Our goal is to be the first choice and the jewel that competes with local brands, redefining quality and efficiency standards in the cleaning products industry in the Kingdom.",
    our_Process: "Our Process",
    our_Process_p: "We follow a structured approach to deliver high-quality products that exceed expectations:",
    process_step_h4_1: "1. Research & Development",
    process_step_p_1: "Our team conducts extensive research to design innovative solutions that cater to diverse cleaning needs.",
    process_step_h4_2: "2. Quality Assurance",
    process_step_p_2: "We ensure that every product meets the highest safety and quality standards before it reaches the market.",
    process_step_h4_3: "3. Customer Feedback",
    process_step_p_3: "We value customer feedback and use it to continuously improve our products and services.",

    // *************** producte page ***************

    our_Products: "Our Products",
    our_Products_p: "ARA Company offers a wide range of cleaning and hygiene products, carefully designed to meet the diverse needs of our customers",
    all_Products: "All Products",
    Products1: "Abaya washing liquid",
    Products2: "Concentrated Fabric Softener",
    Products3: "Dishwashing Liquid",
    Products4: "Sanitizing Gel",
    Products5: "All-Purpose Stain Remover",
    Products6: "Multi-Purpose Disinfectant",
    Products7: "Concentrated Air & Fabric Freshener",
    Products8: "High-Concentration Multi-Purpose Freshener",
    Products9: "Multi-Purpose Cleaner",
    Products10: "Glass Cleaner & Polisher",


    // *************** Contact page ***************

    contact_ARA : "Contact ARA",
    contact_ARA_p : "We’d love to hear from you! Reach out to us for inquiries, feedback, or support. Our team is here to help.",
    Query : "Feel free to reach out with any query",
    Email : "E-mail",
    Phonee : "Mobile",
    address : "Address",
    addressSp : "Jubail",
    firstName : "First Name",
    LastName : "Last Name",
    phoneNumber : "Phone Number",
    subject : "Subject",
    message : "Message",
    SendMessage : "Send Message",
  },
  ar: {
    en: "إنجليزي",
    ar: "عربي",
    home: "الرئيسية",
    about: 'معلومات عنا',
    product: 'المنتجات',
    contact: 'اتصل بنا',
    ara: "ارا",
    ara_hero_title: "اكتشف حلول التنظيف المتطورة المصممة خصيصًا لاحتياجاتك",
    ara_hero_p: "نحن نقدم مجموعة شاملة من المواد الكيميائية ومنتجات التنظيف عالية الجودة، مصممة بعناية لتلبية احتياجات مختلف القطاعات. منتجاتنا مصممة لتقديم أداء استثنائي في التطبيقات الصناعية والتجارية والمنزلية، مما يضمن أن كل عميل يجد الحل المناسب لمتطلباته الفريدة.",
    ara_hero_bottom: "ابدأ الآن",
    about_us: "معلومات عنا",
    about_us_who: "من نحن",
    about_us_p_main: "شركة ارا للمواد الكيميائية المتخصصة هي قوة رائدة في صناعة مواد التنظيف داخل المملكة العربية السعودية. مع رؤية لاستكشاف آفاق جديدة، نحن ملتزمون بتقديم منتجات مبتكرة وعالية الجودة التي تضع معيارًا للحلول التنظيفية المحلية والصناعية. هدفنا ليس فقط تلبية توقعات السوق، بل تجاوزها من خلال منتجات فائقة الجودة تعيد تعريف مفهوم النظافة والكفاءة.",
    about_us_bottom: "اقرأ المزيد",
    process_h: "لدينا عملية أساسية للعمل بكفاءة",
    deal: "منتجات ارا",
    deal_p: "اكتشف مجموعة من منتجاتنا عالية الجودة المصممة لتعزيز حياتك اليومية بأعلى مستويات النضارة والعناية",
    shop_Now: "تسوق الآن",
    clients_Say: "ماذا يقول عملاؤنا",
    clients_Say_p: "نفخر بتقديم حلول تنظيف استثنائية تلبي احتياجات عملائنا",
    client1_Say: "منتجات ارا ممتازة! لقد جعلت عملية التنظيف أسهل وأكثر فعالية في منزلي",
    client2_Say: "نستخدم حلول التنظيف من ارا في مكاتبنا، والنتائج دائمًا رائعة. أوصي بها بشدة!",
    client3_Say: "أمانة وسلامة منتجات ارا تمنحني راحة البال لصحة عائلتي",
    client4_Say: "استخدام حلول التنظيف الصناعية من ارا كان نقطة تحول لمرافقنا. جودة استثنائية!",
    client5_Say: "مجموعة منتجات ارا الواسعة تضمن قدرتنا على تلبية احتياجات كل عميل. خدمة ممتازة!",
    about_ara_footer: "عن ارا",
    about_ara_footer_p: "ارا هي شركة سعودية 100% تنتج وتوزع منتجات التنظيف والعناية الشخصية التي تساعد في الحفاظ على النظافة والصحة العامة. تشمل فئات منتجاتنا تنظيف المنازل، العناية بالغسيل، النظافة الشخصية، العناية بالبشرة والجمال بالإضافة إلى المواد الكيميائية للتنظيف الصناعي. مع التقدم التكنولوجي، نقدم حلول تنظيف ذكية وتركيبات مضادة للبكتيريا وحلول تنظيف متخصصة. نحن نتميز من خلال موازنة فعالية المنتج، الاستدامة وثقة العملاء مع الابتكار المستمر لتلبية احتياجات المستهلك المتغيرة.",
    Stay_Connected: "ابق على تواصل",
    Stay_Connected_p: "اشترك في نشرتنا الإخبارية لتلقي تحديثات حول المنتجات الجديدة، العروض الخاصة، وأخبار الصناعة.",
    subscribe: "اشترك",
    more_information: "مزيد من المعلومات",
    footer_link1: "من نحن",
    footer_link2: "منتجاتنا",
    footer_link3: "سياسة الخصوصية",
    footer_link4: "اتصل بنا",

    // *************** About page ***************

    about_ara_hero_p: "اكتشف القصة والقيم التي تجعل ارا رائدة و موثوق بها في حلول التنظيف",
    Happy_Client: "<strong>عملاء سعداء</strong>",
    cum_Product: "<strong>عدد المنتجات</strong>",
    support_Hours: "<strong>ساعات الدعم</strong>",
    hard_Worker: "<strong>العمال الجادون</strong>",
    about_us_p_about: "<span>ارا</span> شركة ارا للمواد الكيميائية المتخصصة هي قوة رائدة في صناعة مواد التنظيف داخل المملكة العربية السعودية. مع رؤية لاستكشاف آفاق جديدة، نحن ملتزمون بتقديم منتجات مبتكرة وعالية الجودة التي تضع معيارًا للحلول التنظيفية المحلية والصناعية. هدفنا ليس فقط تلبية توقعات السوق، بل تجاوزها من خلال منتجات فائقة الجودة تعيد تعريف مفهوم النظافة والكفاءة",
    about_us_ul_li1: "تم تأسيس الشركة في عام 2023 كأحد الشركات الرائدة في تصنيع المعطرات والمنظفات ومنتجات التعقيم والتطهير السائلة في المملكة العربية السعودية",
    about_us_ul_li2: "مقر الشركة في الجبيل، المملكة العربية السعودية، حيث يقع المكتب الرئيسي والمصنع، نقدم مجموعة متنوعة من المنتجات بأحجام مختلفة بدءًا من زجاجات 150 مل وحتى جالونات 30 لتر. مما يتيح لنا تلبية احتياجات السوق المحلي والأسواق الدولية من خلال قسم التصدير",
    about_us_ul_li3: "نسعى إلى الارتقاء بصناعة المعطرات والمنظفات السائلة في المملكة من خلال توفير أفضل المنتجات بأعلى الأسعار التنافسية",
    explore_Products: "استكشف منتجاتنا",
    mission_vision_h: "رؤيتنا ورسالتنا",
    our_Vision: "رؤيتنا",
    our_Vision_p: "في ارا رؤيتنا هي إضاءة المنازل والمنشآت الصناعية في السعودية وما وراءها مع مجموعة مبتكرة من منتجات التنظيف التي تعتبر رمزًا للجودة والابتكار والفخر الوطني. نطمح أن يصبح علامتنا التجارية اسمًا مألوفًا، معترفًا بها ومحترمة لمساهمتها الفعالة في تعزيز النظافة والصحة والاستدامة البيئية",
    our_Mission: "رسالتنا",
    our_Mission_p: "مهمتنا هي تعزيز مستويات النظافة والصحة من خلال تقديم منظفات ذات جودة فائقة، ومعقمات مصممة بعناية، ومعطرات هواء مميزة، وأقمشة نظيفة ومشرقة باستخدام مبيض آمن، وسائل غسيل يدوي وغيرها من المنتجات الأساسية",
    our_Goal: "هدفنا",
    our_Goal_p: "هدفنا هو أن نكون الخيار الأول والجوهرة التي تنافس العلامات التجارية المحلية، مع إعادة تعريف معايير الجودة والكفاءة في صناعة منتجات التنظيف في المملكة",
    our_Process: "نهجنا",
    our_Process_p: "نتبع نهجًا منظمًا لتقديم منتجات عالية الجودة تتجاوز التوقعات",
    process_step_h4_1: "البحث والتطوير",
    process_step_p_1: "يقوم فريقنا بإجراء بحوث مكثفة لتصميم حلول مبتكرة تلبي احتياجات التنظيف المتنوعة",
    process_step_h4_2: "ضمان الجودة",
    process_step_p_2: "نحن نضمن أن كل منتج يلتزم بأعلى معايير السلامة والجودة قبل أن يصل إلى السوق",
    process_step_h4_3: "تعليقات العملاء",
    process_step_p_3: "نقدّر تعليقات العملاء ونستخدمها لتحسين منتجاتنا وخدماتنا بشكل مستمر",

    // *************** product page ***************

    our_Products: "منتجاتنا",
    our_Products_p: "تقدم شركة ارا مجموعة واسعة من منتجات التنظيف والصحة العامة المصممة بعناية لتلبية احتياجات عملائنا المتنوعة",
    all_Products: "جميع المنتجات",
    Products1: "سائل غسيل العباءات",
    Products2: "منعم أقمشة مركز",
    Products3: "سائل غسيل الصحون",
    Products4: "جيل تعقيم",
    Products5: "إزالة البقع لجميع الأغراض",
    Products6: "معقم متعدد الأغراض",
    Products7: "معطر هواء وأقمشة مركز",
    Products8: "معطر متعدد الأغراض بتركيز عالي",
    Products9: "منظف متعدد الأغراض",
    Products10: "منظف ومُلمّع الزجاج",

    // *************** Contact page ***************

    contact_ARA : "تواصل معنا",
    contact_ARA_p : "يسعدنا سماع آرائك! تواصل معنا للاستفسارات، الملاحظات، أو الدعم. فريقنا هنا للمساعدة ",
    Query : "لا تتردد في التواصل معنا لأي استفسار",
    Email : "البريد",
    Phonee : "الهاتف",
    address : "العنوان",
    addressSp : "الجبيل",
    firstName : "الاسم الأول",
    LastName : "اسم العائلة",
    phoneNumber : "رقم الهاتف",
    subject : "الموضوع",
    message : "الرسالة",
    SendMessage : "إرسال الرسالة",
  }

};

let rtlLanguages = ['ar']; // قائمة اللغات التي تتطلب الاتجاه من اليمين إلى اليسار
document.getElementById('languageSelector').addEventListener('change', (e) => {
  let selectedLang = e.target.value;
  localStorage.setItem('selectedLanguage', selectedLang);
  applyTranslations(selectedLang);
  applyFont(selectedLang);
});

function applyTranslations(language) {
  document.querySelectorAll('[data-key]').forEach((element) => {
    let key = element.getAttribute('data-key');
    if (translations[language][key]) {
      element.innerHTML = translations[language][key];
    }
  });
  document.querySelectorAll('[data-key]').forEach((element) => {
    let key = element.getAttribute('data-key');
    element.innerHTML = translations[language][key];
  });



  let elements = document.querySelectorAll(".rotat");
  let rotatNot = document.querySelectorAll(".rotatNot");
  let textRightElements = document.querySelectorAll(".text_right");
  let textCenterElements = document.querySelectorAll(".text_center");
  let services1 = document.querySelectorAll("#services1");
  let lists = document.querySelectorAll('.list');
  let pricing = document.querySelectorAll('.banner .container .text a');
  let text_pp = document.querySelectorAll(".textp_pp")

  lists.forEach((element) => {
    element.style.direction = rtlLanguages.includes(language) ? 'rtl' : 'ltr';
  });

  elements.forEach((element) => {
    element.style.direction = rtlLanguages.includes(language) ? 'rtl' : 'ltr';
  });

  rotatNot.forEach((element) => {
    if (rtlLanguages.includes(language)) {
      element.style.direction = 'ltr';
    }
  });

  textRightElements.forEach((element) => {
    element.style.textAlign = rtlLanguages.includes(language) ? 'right' : 'left';
  });

  textCenterElements.forEach((element) => {
    element.style.textAlign = rtlLanguages.includes(language) ? 'center' : 'left';
  });

  services1.forEach((element) => {
    element.style.letterSpacing = rtlLanguages.includes(language) ? '0' : '5px';
  });

  pricing.forEach((element) => {
    if (rtlLanguages.includes(language)) {
      if (window.matchMedia('(min-width: 550px)').matches) {
        element.style.width = '270px';
        element.style.padding = '7px 15px';
      } else {
        element.style.width = '255px';
        element.style.padding = '5px 8px';
      }
    } else {
      if (window.matchMedia('(min-width: 550px)').matches) {
        element.style.width = '300px';
        element.style.padding = '7px 15px';
      } else {
        element.style.width = '100%';
        element.style.padding = '5px 8px';
      }
    }
  });

  text_pp.forEach((element) => {
    if (rtlLanguages.includes(language)) {
        element.style.setProperty("font-size", "18px", "important");
    } else {
        element.style.removeProperty("font-size"); // إزالة أي تخصيص ليعود للوضع الافتراضي في CSS
    }
});

  

  // 🔥 تحديث عناصر المنتجات والعمليات عند تغيير اللغة
  createItems(processItems, "process-container", "process");
  createItems(products, "products-container", "products");
}

function applyFont(language) {
  let body = document.body;
  if (rtlLanguages.includes(language)) {
    body.style.fontFamily = '"Noto Kufi Arabic", serif';
  } else {
    body.style.removeProperty("font-family"); // إزالة الإعداد ليأخذ الخط من CSS
  }
}


document.addEventListener('DOMContentLoaded', function () {
  let savedLanguage = localStorage.getItem('selectedLanguage') || (navigator.language.startsWith('en') ? 'ar' : 'en');
  document.getElementById('languageSelector').value = savedLanguage;
  applyTranslations(savedLanguage);
  applyFont(savedLanguage);

  // تحديث المنتجات وعناصر العملية بعد تحميل الصفحة
  createItems(processItems, "process-container", "process");
  createItems(products, "products-container", "products");

  // تصحيح تعيين الحقل "subject" بناءً على اللغة
  const subjectInput = document.getElementById('subject');
  if (subjectInput) {
    const value = subjectInput.getAttribute(`data-key-${savedLanguage}`);
    if (value) subjectInput.value = value;
  }
});



const processItems = [
  {
    imgSrc: "assets/imge/quality.png",
    imgAlt: {
      en: "Quality Assured",
      ar: "ضمان الجودة"
    },
    title: {
      en: "Quality Assured",
      ar: "ضمان الجودة"
    },
    description: {
      en: "High-quality products crafted to exceed expectations",
      ar: "منتجات عالية الجودة مصممة لتتجاوز التوقعات"
    }
  },
  {
    imgSrc: "assets/imge/clean.png",
    imgAlt: {
      en: "Fresh Ingredients",
      ar: "مكونات طازجة"
    },
    title: {
      en: "Fresh Ingredients",
      ar: "مكونات امنة"
    },
    description: {
      en: "Eco-friendly solutions that care for you and the planet",
      ar: "حلول صديقة للبيئة تهتم بك وبمن حولك"
    }
  },
  {
    imgSrc: "assets/imge/chemical.png",
    imgAlt: {
      en: "Chemical Free",
      ar: "خالية من المواد الكيميائية"
    },
    title: {
      en: "Chemical Free",
      ar: "خالية من المواد الكيميائية"
    },
    description: {
      en: "Advanced formulas free from harmful chemicals for a safer choice",
      ar: "تركيبات متقدمة خالية من المواد الضارة لخيار أكثر أمانًا"
    }
  }
];

const products = [
  {
    imgSrc: "assets/imge/hero_1.png",
    imgAlt: {
      en: "Clothes freshener",
      ar: "معطر الملابس"
    },
    title: {
      en: "Clothes freshener",
      ar: "معطر الملابس المركز"
    },
    description: {
      en: "Keep your clothes smelling fresh all day long.",
      ar: "حافظ على رائحة ملابسك منعشة طوال اليوم"
    },
    bottom: {
      en: "Shop Now",
      ar: "تسوق الان"
    },
    link: "producte.html"
  },
  {
    imgSrc: "assets/imge/pro1_Abaya_washing_liquid.png",
    imgAlt: {
      en: "Abaya washing liquid",
      ar: "سائل غسيل العباية"
    },
    title: {
      en: "Abaya washing liquid",
      ar: "سائل غسيل العباية"
    },
    description: {
      en: "Gentle on fabric, tough on stains.",
      ar: "لطيف على الأقمشة، قوي على البقع"
    },
    bottom: {
      en: "Shop Now",
      ar: "تسوق الان"
    },
    link: "producte.html"
  },
  {
    imgSrc: "assets/imge/pro2_Highly_concentrated_freshener.png",
    imgAlt: {
      en: "Highly concentrated freshener",
      ar: "معطر مركز عالي الجودة"
    },
    title: {
      en: "Concentrated freshener",
      ar: " معطر عام متعدد الاستعمال عالي التركيز"
    },
    description: {
      en: "Long-lasting freshness for your spaces.",
      ar: "انتعاش يدوم طويلاً لمساحاتك"
    },
    bottom: {
      en: "Shop Now",
      ar: "تسوق الان"
    },
    link: "producte.html"
  },
  {
    imgSrc: "assets/imge/pro3-General_freshener_Multi_use.png",
    imgAlt: {
      en: "General freshener Multi-use",
      ar: "معطر عام متعدد الاستخدامات"
    },
    title: {
      en: "General freshener Multi-use",
      ar: "معطر عام متعدد الاستخدامات"
    },
    description: {
      en: "Versatile and effective for all purposes.",
      ar: "متعدد الاستخدامات وفعال لكل الأغراض"
    },
    bottom: {
      en: "Shop Now",
      ar: "تسوق الان"
    },
    link: "producte.html"
  }
];

function createItems(data, containerId, type) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.warn(`Container with ID "${containerId}" not found.`);
    return;
  }

  container.innerHTML = '';
  const fragment = document.createDocumentFragment();
  const currentLang = localStorage.getItem('selectedLanguage');
  const lang = currentLang === 'ar' ? 'ar' : 'en';

  data.forEach(item => {
    const col = document.createElement("div");
    col.className = type === "process" ? "col-lg-4" : "col-lg-3";
    col.setAttribute("data-aos", "fade-up");
    col.setAttribute("data-aos-delay", "100");

    const titleText = item.title?.[lang] || "No Title";
    const descriptionText = item.description?.[lang] || "No Description";
    const altText = item.imgAlt?.[lang] || "No Alt";
    const bottomProduct = item.bottom?.[lang] || "No Title";

    col.innerHTML = type === "process"
      ? `<div class="Process-show">
           <div class="ProcessDivImge">
             <img src="${item.imgSrc}" class="img-fluid rounded-4" alt="${altText}">
           </div>
           <h4>${titleText}</h4>
           <p>${descriptionText}</p>
         </div>`
      : `<div class="product-show">
           <div class="imge">
             <img src="${item.imgSrc}" class="img-fluid rounded-4" alt="${altText}">
           </div>
           <div class="product-show-text">
             <h3>${titleText}</h3>
             <p>${descriptionText}</p>
             <a href="producte.html">${bottomProduct}</a>
           </div>
         </div>`;

    fragment.appendChild(col);
  });

  container.appendChild(fragment);
}








