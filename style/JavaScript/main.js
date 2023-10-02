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
