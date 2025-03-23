document.addEventListener("DOMContentLoaded", () => {
    flatpickr("#arrivalDate", {
        minDate: "today",
        allowInput: true
    });
});






let menuButton = document.querySelector(".menu-btn");
let menu = document.querySelector(".adapt-header");
let closeMenuButton = document.querySelector(".button-close");

let zeroScale = () => menuButton.style.transform = 'scale(1)';

const toggleMenu = (isOpen) => {
    menuButton.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0)';
    menuButton.style.transform = isOpen ? 'scale(1.05)' : 'scale(1)';
};

menuButton.addEventListener('mouseover', () => toggleMenu(true));
menuButton.addEventListener('mouseout', () => toggleMenu(false));

menuButton.addEventListener('click', () => {
    toggleMenu(true);
    setTimeout(zeroScale, 200);
});

const toggleContentMenu = (isOpen) => {
    if (isOpen) {
        menu.style.display = "flex";
        setTimeout(() => {
            menu.style.filter = "blur(0)"; 
            menu.style.opacity = "1"; 
        }, 100);
    } else {
        menu.style.filter = "blur(calc(var(--index)* .4))"; 
        menu.style.opacity = "0"; 
        setTimeout(() => {
            menu.style.display = "none"; 
        }, 1000);
    }
    closeMenuButton.style.transform = isOpen ? 'rotate(90deg)' : 'rotate(-90deg)';
    closeMenuButton.style.scale = isOpen ? '1' : '0';
};

menuButton.addEventListener('click', () => toggleContentMenu(true));
closeMenuButton.addEventListener('click', () => toggleContentMenu(false));