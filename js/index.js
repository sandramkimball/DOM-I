const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

//header and nav stuff
const logo = document.getElementById("logo-img");
logo.src = 'img/logo.png';

const codeSnip = document.querySelector('#cta-img');
codeSnip.src = 'img/header-img.png';

//nav titles
const navTitle2 = document.querySelector("nav-item-1")
navTitle2.textContent = "Services";

const navTitle3 = document.querySelector('nav-item-2');
navTitle3.textContent = "Product";

const navTitle4 = document.querySelector('nav-item-3');
navTitle.textContent = "Vision";

const navTitle5 = document.querySelector('nav-item-4');
navTitle5.textContent = "Features";

const navTitle6 = document.querySelector('nav-item-5');
navTitle6.textContent = "About";

const navTitle7 = document.querySelector('nav-item-6');
navTitle7.textContent = "Contact";


const navigationColor = document.querySelector('header');
navigationColor.style.backgroundColor = "seagreen";


const newNav1 = document.createElement('a');
newNav1.textContent = "Peanut Butter";
"Peanut Butter"
header.appendChild(newNav1);

const fullNavigation = document.querySelector('header nav');
fullNavigation.appendChild(newNav1);


const newNav2 = document.createElement('h1');
newNav2.textContent = "Jelly Time!";
"Jelly Time!"
fullNavigation.prepend(newNav2);



//cta thing

const domAwesome = document.querySelector('.cta .cta-text  h1');
domAwesome.textContent =  "Dom Is Awesome";

const startedButton = document.querySelector('.cta .cta-text button');
startedButton.textContent =  "Get Started";

//middle body
const middleImg = document.querySelector('#middle-img');
middleImg.src = 'img/mid-page-accent.jpg';