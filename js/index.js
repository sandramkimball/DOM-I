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
const logo = document.querySelector("header .logo");
logo.src = 'img/logo.png';

const codeSnip = document.querySelector('#cta-img');
codeSnip.src = 'img/header-img.png';

//nav titles
const navTitle = document.querySelectorAll("nav a")
navTitle[0].textContent = "Services";
navTitle[1].textContent = "Product";
navTitle[2].textContent = "Vision";
navTitle[3].textContent = "Features";
navTitle[4].textContent = "About";
navTitle[5].textContent = "Contact";



const navigationColor = document.querySelector('header');
navigationColor.style.backgroundColor = "seagreen";


const newNav1 = document.createElement('a');
newNav1.textContent = "Peanut Butter";

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



//middle content

const middleImg = document.querySelector('#middle-img');
middleImg.src = 'img/mid-page-accent.jpg';


/*  TOP */
const topH4 = document.querySelectorAll('.top-content h4');
topH4[0].textContent = "Features";
topH4[1].textContent = "About";

const topP = document.querySelectorAll('.top-content p');
topP[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

topP[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";


/*  BOTTOM */
const bottomH4 = document.querySelectorAll('.bottom-content h4');
bottomH4[0].textContent = "Services";
bottomH4[1].textContent = "Product";
bottomH4[2].textContent = "Vision";



const bottomP = document.querySelectorAll('.bottom-content p');
bottomP[0].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

bottomP[1].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

bottomP[2].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";


//contact
const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = 'Contact';

const contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = '123 Way 456 Street Somewhere, USA';
contactP[1].textContent = '1 (888) 888-88880';
contactP[2].textContent = 'sales@greatidea.io';

//footer
const footerText = document.querySelector('footer p');
footerText.textContent = 'Copyright Great Idea! 2018';