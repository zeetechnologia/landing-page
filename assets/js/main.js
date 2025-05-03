const portfolioData = [
  {
    id: 1,
    title: "E-Library Ukip",
    description: "E-Library Ukip",
    image: "1.jpg",
  },
  {
    id: 2,
    title: "E-Library Ukip",
    description: "E-Library Ukip",
    image: "2.jpg",
  },
  {
    id: 3,
    title: "Company Profile SMK Persada",
    description: "Company Profile SMK Persada",
    image: "3.jpg",
  },
  {
    id: 4,
    title: "Management Keuangan Dan PPDB SMK Persada",
    description: "Management Keuangan Dan PPDB SMK Persada",
    image: "4.jpg",
  },
  {
    id: 5,
    title: "Company Profile SMK Persada",
    description: "Company Profile SMK Persada",
    image: "5.jpg",
  },
  {
    id: 6,
    title: "Company Profile SMK Persada",
    description: "Company Profile SMK Persada",
    image: "6.jpg",
  },
  {
    id: 7,
    title: "Company Profile SMK Persada",
    description: "Company Profile SMK Persada",
    image: "7.jpg",
  },
  {
    id: 8,
    title: "Arsip Digital Infolahtadam Hasanuddin Makassar",
    description: "Arsip Digital Infolahtadam Hasanuddin Makassar",
    image: "8.jpg",
  },
  {
    id: 9,
    title: "Arsip Digital Infolahtadam Hasanuddin Makassar",
    description: "Arsip Digital Infolahtadam Hasanuddin Makassar",
    image: "9.jpg",
  },
  {
    id: 10,
    title: "Aplikasi Kepuasan Alumni TSFIP UNM",
    description: "Aplikasi Kepuasan Alumni TSFIP UNM",
    image: "10.jpg",
  },
  {
    id: 11,
    title: "Aplikasi Kepuasan Alumni TSFIP UNM",
    description: "Aplikasi Kepuasan Alumni TSFIP UNM",
    image: "11.jpg",
  },
  {
    id: 12,
    title: "Aplikasi Kepuasan Alumni TSFIP UNM",
    description: "Aplikasi Kepuasan Alumni TSFIP UNM",
    image: "12.jpg",
  },
];

const containers = document.querySelector(".isotope-container");

portfolioData.forEach((item) => {
  const div = document.createElement("div");
  div.className = "col-lg-4 col-md-6 portfolio-item isotope-item filter-app";
  div.innerHTML = `
      <div class="portfolio-content h-100">
        <img src="assets/img/portfolio/${item.image}" class="img-fluid" alt="${item.title}" />
        <div class="portfolio-info">
          <h4>${item.title}</h4>
          <p>${item.description}</p>
          <a
            href="assets/img/portfolio/${item.image}"
            title="${item.title}"
            data-gallery="portfolio-gallery-app"
            class="glightbox preview-link"
          ><i class="bi bi-zoom-in"></i></a>
          <a
            href="assets/img/portfolio/${item.image}"
            title="More Details"
            class="details-link"
          ><i class="bi bi-link-45deg"></i></a>
        </div>
      </div>
    `;
  containers.appendChild(div);
});

const testi = [
  {
    id: 1,
    name: "Antony Saul Rombe",
    job: "Pebisnis",
    foto: "5.png",
    pesan:
      "Pelayanan dari Zeetech IT Solution sangat profesional, instalasi jaringan di kantor kami berjalan cepat dan rapi!",
  },
  {
    id: 2,
    name: "Lisa Tandiayu",
    job: "Pebisnis",
    foto: "7.png",
    pesan:
      "Kami sangat puas dengan hasil web custom landing page yang dibuat oleh Zeetech—desainnya menarik dan sesuai dengan kebutuhan bisnis kami.!",
  },
  {
    id: 3,
    name: "M. Yusuf Mapparasessa",
    job: "Pebisnis",
    foto: "6.png",
    pesan:
      "Pembuatan company profile digital oleh tim Zeetech sangat membantu memperkuat citra perusahaan kami di dunia online.",
  },
  {
    id: 4,
    name: "Agung",
    job: "Dosen ",
    foto: "8.png",
    pesan:
      "Kami sangat terbantu dengan aplikasi kepuasan alumni yang dibuat oleh Zeetech IT Solution. Tim mereka sangat profesional dalam memahami kebutuhan kami dan menghasilkan aplikasi yang mudah digunakan, efektif, dan tepat sasaran.",
  },
  {
    id: 5,
    name: "Dedi Sudadang Infolahtadam",
    job: "Infolahtadam Hasanuddin Makassar",
    foto: "8.png",
    pesan:
      "Kami sangat puas dengan aplikasi arsip digital yang dikembangkan oleh Zeetech IT Solution. Aplikasi ini mempermudah kami dalam mengelola arsip secara digital.",
  },
];

const container = document.getElementById("testimonials-container");

testi.forEach((item) => {
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide");

  slide.innerHTML = `
      <div class="testimonial-item">
        <img src="assets/img/testimonials/${
          item.foto
        }" class="testimonial-img" alt="" />
        <h3>${item.name || "Tanpa Nama"}</h3>
        <h4>${item.job}</h4>
        <div class="stars">
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
        </div>
        <p>
          <i class="bi bi-quote quote-icon-left"></i>
          <span>${item.pesan}</span>
          <i class="bi bi-quote quote-icon-right"></i>
        </p>
      </div>
    `;

  container.appendChild(slide);
});

// Inisialisasi Swiper setelah elemen sudah masuk DOM
const swiper = new Swiper(".mySwiper", {
  loop: true,
  speed: 600,
  autoplay: {
    delay: 5000,
  },
  slidesPerView: "auto",
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

(function () {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector("body");
    const selectHeader = document.querySelector("#header");
    if (
      !selectHeader.classList.contains("scroll-up-sticky") &&
      !selectHeader.classList.contains("sticky-top") &&
      !selectHeader.classList.contains("fixed-top")
    )
      return;
    window.scrollY > 100
      ? selectBody.classList.add("scrolled")
      : selectBody.classList.remove("scrolled");
  }

  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavToggleBtn.classList.toggle("bi-list");
    mobileNavToggleBtn.classList.toggle("bi-x");
  }
  mobileNavToggleBtn.addEventListener("click", mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navmenu a").forEach((navmenu) => {
    navmenu.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
    navmenu.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle("active");
      this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
      e.stopImmediatePropagation();
    });
  });

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector(".scroll-top");

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    }
  }
  scrollTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll(".isotope-layout").forEach(function (isotopeItem) {
    let layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
    let filter = isotopeItem.getAttribute("data-default-filter") ?? "*";
    let sort = isotopeItem.getAttribute("data-sort") ?? "original-order";

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector(".isotope-container"), function () {
      initIsotope = new Isotope(
        isotopeItem.querySelector(".isotope-container"),
        {
          itemSelector: ".isotope-item",
          layoutMode: layout,
          filter: filter,
          sortBy: sort,
        }
      );
    });

    isotopeItem
      .querySelectorAll(".isotope-filters li")
      .forEach(function (filters) {
        filters.addEventListener(
          "click",
          function () {
            isotopeItem
              .querySelector(".isotope-filters .filter-active")
              .classList.remove("filter-active");
            this.classList.add("filter-active");
            initIsotope.arrange({
              filter: this.getAttribute("data-filter"),
            });
            if (typeof aosInit === "function") {
              aosInit();
            }
          },
          false
        );
      });
  });

  /**
   * Frequently Asked Questions Toggle
   */
  document
    .querySelectorAll(".faq-item h3, .faq-item .faq-toggle")
    .forEach((faqItem) => {
      faqItem.addEventListener("click", () => {
        faqItem.parentNode.classList.toggle("faq-active");
      });
    });
})();
