/* owl carousel */
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dotsEach:1,
    
    navText:["<i class='seta-series fa-solid fa-circle-arrow-left fa-2x'></i>","<i class='seta-series fa-solid fa-circle-arrow-right fa-2x'></i>" ], 
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});

// pag indisponivel
function indisponivel() {
    alert("Pagina ainda em desenvolvimento.");}



// navbar topo e scroll
$(window).scroll(function() {
    let scrollPosition = $(window).scrollTop();
    
    if(scrollPosition < 10) {
        $(".navbar").removeClass("navbar-scroll");
    }
    
    if(scrollPosition > 10) {
        $(".navbar").addClass("navbar-scroll");

    }
});


/* function carousel(){
    $(".icones").toggleClass("row");
    $(".icones").toggleClass("owl-carousel");
    $(".icones").toggleClass("owl-theme");
    $(".div-icones").toggleClass("col-lg-4");
    $(".div-icones").toggleClass("item");
    $('.owl-carousel').owlCarousel();
}
 var tela = screen.width;
$(window).on("resize",function(){
    tela = screen.width;
    redimensionar();
}) 

function redimensionar(){
if(tela < 900 &&  $(".icones").hasClass("row")){
    console.log("oi")
    carousel();
    $('.owl-carousel').owlCarousel();
}

if(tela > 900 &&  $(".icones").hasClass("owl-carousel")){
    console.log("tchau")
    carousel();
}} */