(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
new PureCounter();

function animateValue(id, start, end, duration, decimals = 0, useComma = false) {
    const obj = document.getElementById(id);
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        let value = start + (end - start) * progress;
        value = value.toFixed(decimals);
        if (useComma) value = value.replace('.', ',');
        obj.innerText = value;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Animaciones con decimales y coma:
animateValue("counter1", 0, 86.49, 1500, 2, true); // 86,49%
animateValue("counter2", 0, 4.76, 1500, 2, true); // 4,76+
animateValue("counter3", 0, 26.92, 1500, 2, true); // 26,92%
animateValue("counter4", 0, 88.42, 1500, 2, true); // 88,42%




  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
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
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle, .faq-item .faq-header').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();



// OBJETIVOS SECTION


const data = {
  nps: `
    <table>
      <thead><tr><th>Desde</th><th>Hasta</th><th>Resultado</th></tr></thead>
      <tbody>
        <tr><td>26,70%</td><td>100,00%</td><td>2,00%</td></tr>
        <tr><td>22,20%</td><td>26,60%</td><td>1,00%</td></tr>
        <tr><td>17,60%</td><td>22,10%</td><td>0,00%</td></tr>
        <tr><td>-100,00%</td><td>17,50%</td><td>-1,00%</td></tr>
      </tbody>
    </table>
  `,
  gxh: `
    <table>
      <thead><tr><th>Desde</th><th>Hasta</th><th>Resultado</th></tr></thead>
      <tbody>
        <tr><td>3,96</td><td>Max</td><td>3,00%</td></tr>
        <tr><td>3,81</td><td>3,95</td><td>2,00%</td></tr>
        <tr><td>3,66</td><td>3,80</td><td>1,00%</td></tr>
        <tr><td>3,52</td><td>3,65</td><td>0,00%</td></tr>
        <tr><td>3,38</td><td>3,51</td><td>-1,00%</td></tr>
        <tr><td>0</td><td>3,37</td><td>-2,00%</td></tr>
      </tbody>
    </table>
  `,
  rel: `
    <table>
      <thead><tr><th>Desde</th><th>Hasta</th><th>Resultado</th></tr></thead>
      <tbody>
        <tr><td>78,30%</td><td>100,00%</td><td>3,00%</td></tr>
        <tr><td>76,60%</td><td>78,20%</td><td>2,00%</td></tr>
        <tr><td>75,20%</td><td>76,50%</td><td>1,00%</td></tr>
        <tr><td>73,80%</td><td>75,10%</td><td>0,00%</td></tr>
        <tr><td>72,40%</td><td>73,70%</td><td>-1,00%</td></tr>
        <tr><td>0,00%</td><td>72,30%</td><td>-2,00%</td></tr>
      </tbody>
    </table>
  `,
  fcr: `
    <table>
      <thead><tr><th>Desde</th><th>Hasta</th><th>Resultado</th></tr></thead>
      <tbody>
        <tr><td>79,70%</td><td>100,00%</td><td>3,00%</td></tr>
        <tr><td>78,80%</td><td>79,60%</td><td>2,00%</td></tr>
        <tr><td>77,90%</td><td>78,70%</td><td>1,00%</td></tr>
        <tr><td>77,00%</td><td>77,80%</td><td>0,00%</td></tr>
        <tr><td>76,10%</td><td>76,90%</td><td>-1,00%</td></tr>
        <tr><td>0,00%</td><td>76,00%</td><td>-2,00%</td></tr>
      </tbody>
    </table>
  `
};

const buttons = document.querySelectorAll('.tab-buttons button');
const content = document.getElementById('tab-content');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const tab = btn.getAttribute('data-tab');
    content.innerHTML = data[tab];
  });
});


// JS PARA LOS BOTONES DE COPIAR TEXTO

document.querySelectorAll('.copy-container label').forEach(label => {
  const checkbox = label.querySelector('input[type="checkbox"]');
  label.addEventListener('click', e => {
    e.preventDefault(); // Evitar toggle automático del checkbox para controlar manualmente
    const body = label.closest('.accordion-body');
    const text = body.innerText.trim();

    navigator.clipboard.writeText(text).then(() => {
      checkbox.checked = true; // Mostrar icono check
      setTimeout(() => {
        checkbox.checked = false; // Resetear icono a clipboard
      }, 2000);
    });
  });
});

