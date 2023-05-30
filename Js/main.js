$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout: 3000,
        animateOut: 'fadeOut'
    });
  
  });

function downloadFile (){
    window.open('https://docs.google.com/document/d/1gPDM6GKLo0_3P_lPEjORQ0MZZBea40LsBCQmPMKygzU/edit')
}
 
const aboutOffset =$('#about').offset().top

$(window).scroll(function(){
    const allSection =$("section")
    if($(window).scrollTop() >= aboutOffset-50  ){
        $('.col-12').slideDown(3000)
       }
for(let i=0;i<allSection.length;i++){
const cuurentOffset = allSection.eq(i).offset().top;
let currentSection;
if($(window).scrollTop()>=cuurentOffset-200 && allSection.eq(i).attr("id")!=undefined){
    $('.nav-item .active').removeClass("active");
    currentSection=allSection.eq(i).attr("id")
    const currentNavHref =$(".nav-link").eq(i).attr("href");
    if(currentNavHref.includes(currentSection)){
        $(".nav-link").eq(i).addClass("active")
    }
}
       }
   })


   $(".navbar-nav a").click(function () {
  
    const curentHref = $(this).attr("href");
    const offsetSection = $(curentHref).offset().top
   
   
    $("html,body").animate(
       {
          scrollTop: offsetSection,
          color:red
       
          
       },
      1000
    );
 });

 $(".myWork").click(function(){
 const workoffset =$("#works").offset().top
 $("html,body").animate({
    scrollTop:workoffset,
    
 },1000)

 })