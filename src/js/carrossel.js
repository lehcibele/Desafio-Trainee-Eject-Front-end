$(document).ready(function(){
    $('.carrossel').slick({
        slidesToShow: 3,
        slideToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        variableWidth: true,
        prevArrow: '<img class="slick-prev" src="src/img/seta-esquerda.png" alt="">',
        nextArrow: '<img class="slick-next" src="src/img/seta-direita.png" alt="">',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    })
});
