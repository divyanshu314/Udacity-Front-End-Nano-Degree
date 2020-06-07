/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navbar = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function isInViewport(elem) {
  const bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav() {
  for (let section of sections) {
    let item = document.createElement('li');
    item.className = 'menu__link';
    item.dataset.nav = section.id;
    item.id = `nav_${section.id}`;
    item.innerText = section.dataset.nav;
    navbar.appendChild(item);
    console.log(item.id, item.dataset.nav, section.dataset.nav);
  }
}


// Add class 'active' to section when near top of viewport
function makeActive() {
  for (let sec of sections) {
    //let navbarAnchors = document.querySelectorAll();
    if (isInViewport(sec)) {
      // Apply active state on the current section and the corresponding Nav link.
      sec.classList.add('your-active-class');
      console.log(sec.getAttribute('id'));
    } else {
      // Remove active state from other section and corresponding Nav link.
      sec.classList.remove("your-active-class");
    }
  }
}


// Scroll to anchor ID using scrollTO event

function onLinkClick() {
  navbar.addEventListener('click', function (event) {
    const moveTo = document.querySelector('#' + event.target.dataset.nav);
    moveTo.scrollIntoView({ behavior: "smooth" });
    console.log('#' + event.target.dataset.nav);
  })
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav();

// Scroll to section on link click
onLinkClick();

// Set sections as active
document.addEventListener("scroll", function () {
  makeActive();
});