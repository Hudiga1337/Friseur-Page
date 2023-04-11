
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
const hiddenElementsRight = document.querySelectorAll('.hiddenright');
const hiddenElementsLeft = document.querySelectorAll('.hiddenleft');
hiddenElementsRight.forEach((el) => observer.observe(el));
hiddenElementsLeft.forEach((el) => observer.observe(el));
hiddenElements.forEach((el) => observer.observe(el));


const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if(visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else if(visibility === "true") {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
})

const imagesslide = document.querySelector(".imagesslide"),
firstImg = imagesslide.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, prevPagex, prevScrollLeft;


const showHideIcons = () => {
    let scrollWidth = imagesslide.scrollWidth - imagesslide.clientWidth;
    arrowIcons[0].style.display = imagesslide.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = imagesslide.scrollLeft == scrollWidth ? "none" : "block";
    
}

arrowIcons.forEach(icon => {
    let firstImgWidth = firstImg.clientWidth + 14;
    icon.addEventListener("click", () => {
        imagesslide.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60);
    });
});
    
const dragStart = (e) => {
    isDragStart = true;
    prevPagex = e.pageX;
    prevScrollLeft = imagesslide.scrollLeft;
    
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    imagesslide.classList.add("dragging");
    let positionDiff = e.pageX - prevPagex;
    imagesslide.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();

}
const dragStop = () => {
    isDragStart = false;
    imagesslide.classList.remove("dragging");
}

imagesslide.addEventListener("mousedown", dragStart);
imagesslide.addEventListener("mousemove", dragging);
imagesslide.addEventListener("mouseup", dragStop);

/*POPUP termin*/
let popup = document.getElementById("popup");

function openPopupnum() {
    popup.classList.add("open-popup");
}
function closePopupnum() {
    popup.classList.remove("open-popup");
}
//SCROLL SMOOTH
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: 'smooth' 
        });
    });
});

/*POPUP broj telefona*/
let popupnumber = document.getElementById("popupnumber");

function openPopupnumber() {
    popupnumber.classList.add("open-popupnumber");
    setTimeout(closePopupnumber, 6000);
}
function closePopupnumber() {
    popupnumber.classList.remove("open-popupnumber");
}
/*POPUP broj wapp*/
let popupnumberwapp = document.getElementById("popupwappnumber");

function openPopupwappnumber() {
    popupnumberwapp.classList.add("open-popupwappnumber");
    setTimeout(closePopupwappnumber, 6000);
}
function closePopupwappnumber() {
    popupnumberwapp.classList.remove("open-popupwappnumber");
}

