$(document).ready(function(){
  $('.main-carousel').slick({
    dots: true,                
    arrows: true,              
    infinite: true,
    speed: 500,              
    slidesToShow: 1,        
    slidesToScroll: 1,         
    autoplay: true,            
    autoplaySpeed: 5000,       
    pauseOnHover: true,        
    fade: false,               
    cssEase: 'ease',         
    adaptiveHeight: true,     
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false        
        }
      }
    ]
  });
});