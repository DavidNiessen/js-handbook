'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('nav');


// Modal window
const openModal = event => {
  event.preventDefault();

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnScrollTo.addEventListener('click', () => {
  /*
  const coordinates = section1.getBoundingClientRect();

  window.scrollBy({
      left: coordinates.left,
      top: coordinates.top,
      behavior: 'smooth',
  });
   */
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Page navigation
document.querySelector('.nav__links').addEventListener('click', event => {
  event.preventDefault();

  if (event.target.classList.contains('nav__link')) {
    const id = event.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabbed component
tabsContainer.addEventListener('click', event => {
  const clicked = event.target.closest('.operations__tab');

  if (!clicked) return;

  // Remove active classes
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  tabsContent.forEach(content =>
    content.classList.remove('operations__content--active'));

  // Activate Tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation
const handleHover = function (event) {
  if (event.target.classList.contains('nav__link')) {
    const link = event.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(element => {
      if (element !== link) element.style.opacity = String(this);
    });
    logo.style.opacity = String(this);
  }
};

nav.addEventListener('mouseover', handleHover.bind(.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky navigation
/*
const initialCoords = section1.getBoundingClientRect();

window.addEventListener('scroll', () => {
    if (window.scrollY > initialCoords.top) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});
 */

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = entries => {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `${navHeight}px`
});
headerObserver.observe(header);

// Reveal sections
const allSections = document.querySelectorAll('.section');

const revealSection = (entries, observer) => {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  const target = entry.target;
  target.classList.remove('section--hidden');
  observer.unobserve(target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: .15
});

allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// Lazy loading images
const imageTargets = document.querySelectorAll('img[data-src]');

const loadImage = (entries, observer) => {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  const target = entry.target;

  // Replace src with data-src
  target.src = target.dataset.src;
  target.addEventListener('load', () => target.classList.remove('lazy-img'));

  observer.unobserve(target);
};

const imageObserver = new IntersectionObserver(loadImage, {
  root: null,
  threshold: 0,
  rootMargin: '200px'
});

imageTargets.forEach(image => imageObserver.observe(image));

// Slider
(() => {
  const slides = document.querySelectorAll('.slide');
  const buttonLeft = document.querySelector('.slider__btn--left');
  const buttonRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let currentSlide = 0;
  const maxSlide = slides.length;

  const createDots = () => {
    slides.forEach((_, index) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${index}"></button>`
      );
    });
  };


  const activateDot = slide => {
    document.querySelectorAll('.dots__dot').forEach(dot =>
      dot.classList.remove('dots__dot--active'));

    document.querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = slideIndex =>
    slides.forEach((slide, index) =>
      slide.style.transform = `translateX(${100 * (index - slideIndex)}%)`);


  // Next slide
  const nextSlide = () => {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }

    goToSlide(currentSlide);
    activateDot(currentSlide);
  };


  // Previous slide
  const previousSlide = () => {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }

    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const init = () => {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  // Event handlers
  buttonRight.addEventListener('click', nextSlide);
  buttonLeft.addEventListener('click', previousSlide);

  document.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') previousSlide();
    if (event.key === 'ArrowRight') nextSlide();
  });

  dotContainer.addEventListener('click', event => {
    if (event.target.classList.contains('dots__dot')) {
      const { slide } = event.target.dataset;
      currentSlide = +slide;

      goToSlide(+slide);
      activateDot(+slide);
    }
  });
})();