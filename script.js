window.addEventListener("load", () => {
    const track = document.querySelector('.slider-track');
    const slides = Array.from(track.children);
    const nextBtn = document.querySelector('.slider-btn.right');
    const prevBtn = document.querySelector('.slider-btn.left');

    let slideCount = slides.length;
    let visibleSlides = getVisibleSlides();
    let index = visibleSlides;
    let autoSlideInterval;


    function getVisibleSlides() {
        if (window.innerWidth <= 500) return 1;
        if (window.innerWidth <= 900) return 2;
        return 5;
    }

 
    function buildClones() {
        track.querySelectorAll('.clone').forEach(clone => clone.remove());

        for (let i = 0; i < visibleSlides; i++) {
            let cloneEnd = slides[i].cloneNode(true);
            cloneEnd.classList.add('clone');
            track.appendChild(cloneEnd);

            let cloneStart = slides[slideCount - 1 - i].cloneNode(true);
            cloneStart.classList.add('clone');
            track.insertBefore(cloneStart, track.firstChild);
        }

        index = visibleSlides;
        setTrackPosition();
    }

    function slideWidth() {
        return track.querySelector('.slide').offsetWidth;
    }

    function moveToSlide(newIndex) {
        track.style.transition = 'transform 0.6s ease';
        track.style.transform = `translateX(${-slideWidth() * newIndex}px)`;
        index = newIndex;
    }

    function setTrackPosition() {
        track.style.transition = 'none';
        track.style.transform = `translateX(${-slideWidth() * index}px)`;
    }

    nextBtn.addEventListener('click', () => {
        moveToSlide(index + 1);
        resetAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        moveToSlide(index - 1);
        resetAutoSlide();
    });

    track.addEventListener('transitionend', () => {
        if (index >= slideCount + visibleSlides) {
            index = visibleSlides;
            setTrackPosition();
        }

        if (index < visibleSlides) {
            index = slideCount + visibleSlides - 1;
            setTrackPosition();
        }
    });

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            moveToSlide(index + 1);
        }, 4000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    track.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
    track.addEventListener('mouseleave', startAutoSlide);

    window.addEventListener('resize', () => {
        visibleSlides = getVisibleSlides();
        buildClones();
    });

    buildClones();
    startAutoSlide();
});
const menuBtn = document.querySelector('.menu-btn');
const topDropdown = document.querySelector('.top-dropdown');
const closeMenuBtn = document.querySelector('.close-menu');
const overlay = document.querySelector('.overlay');

menuBtn.addEventListener('click', () => {
    topDropdown.classList.add('active');
    overlay.classList.add('active');
    menuBtn.style.opacity = '0';
    menuBtn.style.pointerEvents = 'none';
});

closeMenuBtn.addEventListener('click', () => {
    topDropdown.classList.remove('active');
    overlay.classList.remove('active');
    menuBtn.style.opacity = '1';
    menuBtn.style.pointerEvents = 'auto';
});

overlay.addEventListener('click', () => {
    topDropdown.classList.remove('active');
    overlay.classList.remove('active');
    menuBtn.style.opacity = '1';
    menuBtn.style.pointerEvents = 'auto';
});

const submenuBtn = document.querySelector('.submenu-btn');
const submenu = document.querySelector('.submenu');

submenuBtn.addEventListener('click', () => {
    submenu.classList.toggle('open');
});

function showSuccess(e) {
    e.preventDefault();

    const form = document.querySelector('.contact-form');
    const success = document.querySelector('.form-success');

    form.style.display = 'none';
    success.style.display = 'block';
}
function toggleFAQ(button) {
    document.querySelectorAll('.faq-question').forEach(q => {
        if (q !== button) {
            q.classList.remove('active');
            q.nextElementSibling.style.maxHeight = '0';
        }
    });
    
    button.classList.toggle('active');
    const answer = button.nextElementSibling;
    
    if (button.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
        answer.style.maxHeight = '0';
    }
}
function toggleSizeGuide() {
  const guide = document.getElementById("sizeGuide");
  guide.style.display = guide.style.display === "flex" ? "none" : "flex";
}
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
