/*=============== MOBILE MENU TOGGLE ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if(navToggle) navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'));
if(navClose) navClose.addEventListener('click', () => navMenu.classList.remove('show-menu'));

document.querySelectorAll('.nav__link').forEach(n => n.addEventListener('click', () => navMenu.classList.remove('show-menu')));

/*=============== STICKY HEADER ===============*/
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY >= 50) navbar.classList.add('scroll-header');
    else navbar.classList.remove('scroll-header');
});

/*=============== SCROLL ANIMATION OBSERVER ===============*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.getAttribute('data-delay');
            if (delay) setTimeout(() => entry.target.classList.add('animated'), parseInt(delay));
            else entry.target.classList.add('animated');
        }
    });
}, { threshold: 0.12 });

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
});

/*=============== CORPORATE BOARDS FILTER & MODAL ===============*/
const corpFilterBtns = document.querySelectorAll('.corp-filter__btn');
const corpCards = document.querySelectorAll('.corp-card');

corpFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        corpFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filterValue = btn.getAttribute('data-filter');
        corpCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) card.classList.remove('hide');
            else card.classList.add('hide');
        });
    });
});

function openCorpModal(imgUrl, titleText, descText) {
    document.getElementById('corpModalImg').src = imgUrl;
    document.getElementById('corpModalTitle').textContent = titleText;
    document.getElementById('corpModalDesc').textContent = descText;
    document.getElementById('corpModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeCorpModal() {
    document.getElementById('corpModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}
function closeCorpModalOutside(event) {
    if (event.target === document.getElementById('corpModal')) closeCorpModal();
}

/*=============== PROJECT SHOWCASE FILTER & MODAL ===============*/
const showcaseFilterBtns = document.querySelectorAll('.showcase__filter-btn');
const showcaseCards = document.querySelectorAll('.showcase__card');

showcaseFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        showcaseFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filterValue = btn.getAttribute('data-filter');
        showcaseCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) card.classList.remove('hide');
            else card.classList.add('hide');
        });
    });
});

function openShowcaseModal(imgUrl, titleText, descText) {
    document.getElementById('showcaseModalImg').src = imgUrl;
    document.getElementById('showcaseModalTitle').textContent = titleText;
    document.getElementById('showcaseModalDesc').textContent = descText;
    document.getElementById('showcaseModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeShowcaseModal() {
    document.getElementById('showcaseModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}
function closeShowcaseModalOutside(event) {
    if (event.target === document.getElementById('showcaseModal')) closeShowcaseModal();
}