   /*============================ toggle icon navbar =======================*/
   let menuIcon = document.querySelector('#menu-icon');
   let navbar = document.querySelector('.navbar');

   menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

   };
   
   
   /*============================ scroll section active =======================*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetHeight;
        let height = sec.getAttribute('id');
        let id = sec.getAttribute('id');

        if(top>= offset && top <offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                documents.querySelector('header nav a[href*='  + id +']').classList.add('active');
            });

        };


    });
   /*================================ sticky navbar=======================*/
   let header = document.querySelector('header');

   header.classList.toggle('sticky',windo.scrollY > 100);

  /*================================  remove toggle icon and navbat whrn click navbar link (scroll) =======================*/
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

};

 /*================================  scroll reveal =======================*/
 ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
  });
  
  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
  

  /*================================  types js=======================*/
  const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Developer', 'UI/UX Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
    });