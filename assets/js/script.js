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








const processItems = [
    {
        imgSrc: "assets/imge/quality.png",
        imgAlt: "Quality Assured",
        title: "Quality Assured",
        description: "High-quality products crafted to exceed expectations"
    },
    {
        imgSrc: "assets/imge/clean.png",
        imgAlt: "Clean Ingredients",
        title: "Clean Ingredients",
        description: "Eco-friendly solutions that care for you and the planet"
    },
    {
        imgSrc: "assets/imge/chemical.png",
        imgAlt: "Chemical Free",
        title: "Chemical Free",
        description: "Advanced formulas free from harmful chemicals for a safer choice"
    }
];

const products = [
    {
        imgSrc: "assets/imge/hero_1.png",
        imgAlt: "Clothes freshener",
        title: "Clothes freshener",
        discription : "Keep your clothes smelling fresh all day long.",
        link: "producte.html"
    },
    {
        imgSrc: "assets/imge/pro1_Abaya_washing_liquid.png",
        imgAlt: "Abaya washing liquid",
        title: "Abaya washing liquid",
        discription : "Gentle on fabric, tough on stains.",
        link: "producte.html"
    },
    {
        imgSrc: "assets/imge/pro2_Highly_concentrated_freshener.png",
        imgAlt: "Highly concentrated freshener",
        title: "Concentrated freshener",
        discription : "Long-lasting freshness for your spaces.",
        link: "producte.html"
    },
    {
        imgSrc: "assets/imge/pro3-General_freshener_Multi_use.png",
        imgAlt: "General freshener Multi-use",
        title: "General freshener Multi-use",
        discription : "Versatile and effective for all purposes.",
        link: "producte.html"
    }
];

// دالة لإنشاء العناصر
function createItems(data, containerId, type) {
    const container = document.getElementById(containerId);

    data.forEach(item => {
        const col = document.createElement("div");
        col.className = type === "process" ? "col-lg-4" : "col-lg-3";
        col.setAttribute("data-aos", "fade-up");
        col.setAttribute("data-aos-delay", "100");

        if (type === "process") {
            col.innerHTML = `
          <div class="Process-show">
            <div class ="ProcessDivImge">
              <img src="${item.imgSrc}" class="img-fluid rounded-4" alt="${item.imgAlt}">
            </div>
            <h4>${item.title}</h4>
            <p>${item.description}</p>
          </div>
        `;
        } else if (type === "product") {
            col.innerHTML = `
          <div class="product-show">
            <div class="imge">
              <img src="${item.imgSrc}" class="img-fluid rounded-4" alt="${item.imgAlt}">
            </div>
            <div class="product-show-text">
              <h3>${item.title}</h3>
              <p>${item.discription}</p>
              <a href="${item.link}">Shop Now</a>
            </div>
          </div>
        `;
        }

        container.appendChild(col);
    });
}

// استدعاء الدالة لإنشاء العناصر
createItems(processItems, "process-container", "process");
createItems(products, "products-container", "product");
