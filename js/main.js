$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function informacao(){
    alert("Filme estrelado por Jim Carrey, onde tem que cuidar de 6 pinguins recebidos por herança. Dessa vez ele realmente está numa fria!")
}
