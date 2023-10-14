// Burger menu

document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});



let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let menuItems = document.querySelectorAll('.menu li');

let isOpen = false;

menuBtn.addEventListener('click', function () {
    isOpen = !isOpen;
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');

    if (isOpen) {
        animateMenuItems(menuItems);
    } else {
        closeMenu(menuItems);
    }
});

function animateMenuItems(items) {
    items.forEach(function (item, index) {
        setTimeout(function () {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, index * 150);
    });
}

function closeMenu(items) {
    items.forEach(function (item, index) {
        setTimeout(function () {
            item.style.opacity = '0';
            item.style.transform = 'translateX(100%)'; 
        }, index * 150);
    });

    setTimeout(function () {
        menu.classList.remove('active');
    }, items.length * 150);
}



//first slide ellipse

const countingNumber = document.getElementById("number-86441");

function countUp() {
  let currentNumber = 0;
  const targetNumber = 86.441;
  const animationDuration = 2000;
  const steps = 100;

  const increment = targetNumber / steps;
  const interval = animationDuration / steps;

  function updateNumber() {
    currentNumber += increment;
    if (currentNumber <= targetNumber) {
      countingNumber.textContent = currentNumber.toFixed(3);
      setTimeout(updateNumber, interval);
    }
  }

  updateNumber();
}

countUp();



// widget black menu Active

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".widget-black-buttons");

    buttons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            buttons.forEach(function (btn) {
                btn.classList.remove("active");
            });
            button.classList.add("active");
        });
    });
});



// background second slide

let keyframesAdded = false;

function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    let windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    return (
        (rect.top <= windowHeight * 0.5) && ((rect.top + rect.height) >= (windowHeight * 0.9))
    );
}

function addKeyframesIfNeeded() {
    if (!keyframesAdded && isElementInViewport(document.querySelector('.second-slide'))) {
        let styleSheet = document.styleSheets[0];

        styleSheet.insertRule('@keyframes appear { from { opacity: 0; } to { opacity: 1; } }', styleSheet.cssRules.length);
        styleSheet.insertRule('@keyframes grow {from { stroke-dasharray: 1; } to { stroke-dasharray: 1800; stroke-dashoffset: 0; }}', styleSheet.cssRules.length);
        styleSheet.insertRule('@keyframes expand {from { width: 0; } to { width: 600%; }}', styleSheet.cssRules.length);
        styleSheet.insertRule('@keyframes slideIn {0% {opacity: 0;transform: translate(100%, 100%) scale(0.5);}100% {opacity: 1;transform: translate(0, 0) scale(1);}}', styleSheet.cssRules.length);

        keyframesAdded = true;
    }

}



// Catalogizing second slide

window.addEventListener('scroll', addKeyframesIfNeeded);
document.addEventListener('DOMContentLoaded', function () {
    addKeyframesIfNeeded();
});

document.addEventListener("DOMContentLoaded", function () {
    var pElements = document.querySelectorAll(".catalog-row p");

    pElements.forEach(function (p) {
        var img = document.createElement("img");
        img.src = "style/img/black-arrow.svg";
        img.alt = "Icon";
        img.style.opacity = "0";
        p.appendChild(img);

        p.addEventListener("mouseenter", function () {
            img.style.opacity = "1";
        });

        p.addEventListener("mouseleave", function () {
            img.style.transition = "opacity 0.5s";
            img.style.opacity = "0";
        });
    });
});



//card scale

function addHoverHandlers(arrowSelector, imgSelector) {
    const arrow = document.querySelector(arrowSelector);
    const img = document.querySelector(imgSelector);

    arrow.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.15)';
    });

    arrow.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
}

addHoverHandlers('.black-card-arrow', '.black-card-img');
addHoverHandlers('.grey-card-arrow', '.grey-card-img');
addHoverHandlers('.white-card-arrow', '.white-card-img');



// slider

let swiper = new Swiper('.swiper-container', {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: "auto",
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 50,
      modifier: 2,
      slideShadows: true,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
});


  
// yearsCounter

const targetElement = document.querySelector('.fifth-slide');
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          const yearItems = document.querySelectorAll(".year-item");

            yearItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add("active");
                }, index * 200);
            })

            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5 
});

observer.observe(targetElement);



//cursor

const customCursorBlocks = document.querySelectorAll('.custom-cursor');

customCursorBlocks.forEach((block) => {
    block.addEventListener('mouseover', () => {
        block.style.cursor = 'url("style/img/cursor2.svg"), auto';
    });

    block.addEventListener('mouseout', () => {
        block.style.cursor = 'pointer';
    });
});



//copy contact

function copyContent(element) {
  const textToCopy = element.querySelector('p').textContent;
  
  const tempTextArea = document.createElement('textarea');
  tempTextArea.value = textToCopy;
  document.body.appendChild(tempTextArea);
  
  tempTextArea.select();
  document.execCommand('copy');
  
  document.body.removeChild(tempTextArea);
}



// copy contact animation

function showText(element) {
  var text = element.querySelector(".hidden");
  text.style.opacity = 1;
  text.style.transform = "translateY(-30%)";
}

function hideText(element) {
  var text = element.querySelector(".hidden");
  text.style.opacity = 0;
  text.style.transform = "translateY(100%)";
}



// second-slide center object

const cardElement = document.querySelector('.second-slide');

const thresholds = [
  { selector: '.second-slide-text-center p', threshold: 0.4, marginLeft: '150px' },
  { selector: '.second-slide-item-center-1 p', threshold: 0.65, marginLeft: '125px' },
  { selector: '.second-slide-item-center-2 p', threshold: 0.8, marginLeft: '125px' },
];

const observers = thresholds.map((config) => {
  return new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio >= config.threshold) {
        const cardItems = entry.target.querySelectorAll(config.selector);

        cardItems.forEach((item, index) => {
          setTimeout(() => {
            item.style.transition = 'opacity 2s, margin-left 3s';
            item.style.marginLeft = config.marginLeft;
            item.style.opacity = '1';
            item.style.position = 'relative';

          }, index * 200);
        });

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: config.threshold,
  });
});

observers.forEach((observer) => observer.observe(cardElement));
