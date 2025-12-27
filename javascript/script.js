$(document).ready(function(){
  $('.main-carousel').slick({
    dots: true,                // Mostra os pontos de navegação
    arrows: true,              // Mostra setas de navegação
    infinite: true,            // Loop infinito
    speed: 500,                // Velocidade da transição
    slidesToShow: 1,           // Mostra 1 slide por vez
    slidesToScroll: 1,         // Move 1 slide por vez
    autoplay: true,            // Auto-play ativado
    autoplaySpeed: 5000,       // Troca a cada 5 segundos
    pauseOnHover: true,        // Pausa ao passar mouse
    fade: false,               // Transição fade (false = slide)
    cssEase: 'ease',          // Tipo de easing
    adaptiveHeight: true,      // Ajusta altura automaticamente
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false        // Remove setas em mobile
        }
      }
    ]
  });
});