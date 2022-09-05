let navbar = document.querySelector('.header nav');
let menuBtn = document.querySelector('#menu-btn');
let scrollTop = document.querySelector('.scroll-top');

menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () =>{

   if(window.scrollY > 250){
       scrollTop.style.display = 'initial';
   }else{
       scrollTop.style.display = 'none';
   }

}