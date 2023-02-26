
let navbar=document.querySelector('.navbar');
let brand=document.querySelector('.navbar-brand');
let links=document.querySelectorAll('.nav-link');
let sections=document.querySelectorAll('section');


window.onscroll=function(){

    if(window.scrollY!==0){
        navbar.classList.add('active1');
        brand.classList.add('active2');
        links.forEach(link=>{link.classList.add('active2')});
    }else{
        navbar.classList.remove('active1');
        brand.classList.remove('active2');
        links.forEach(link=>{link.classList.remove('active2')});
    }

    sections.forEach(section=>{
        if(window.scrollY>=section.offsetTop-100 && window.scrollY<section.offsetTop+section.scrollHeight-100){
            let link=document.getElementById(section.dataset.link);
            link.style.setProperty('color','var(--mainColor)','important');
        }else{
            let link=document.getElementById(section.dataset.link);
            link.style.removeProperty('color','var(--mainColor)','important');
        }
        
    });

}