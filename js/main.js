

$(document).ready(function() {
  $('.hero-slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    draggable: false,
    lazyLoad: true,
    focusOnSelect: true,
    prevArrow: $('.arrow-left'),
    nextArrow: $('.arrow-right')
  });
  $('.comment-wrap').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    draggable: false,
    lazyLoad: true,
    focusOnSelect: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: $('.arrow-comment-left'),
    nextArrow: $('.arrow-comment-right'),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
});    

ymaps.ready(init);
function init(){ 
    var myMap = new ymaps.Map("map", {
      center: [52.363968, 30.367162],
      zoom: 14
    });
    var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point", // тип геометрии - точка
      coordinates: [52.363968, 30.367162] // координаты точки
  },
  properties: {
  iconCaption: "Компания ТРАНС 7777",
      balloonContentHeader: "ТРАНС 7777",
      balloonContentBody: "Транспортные услуги в Речице",

    }
});

// Размещение геообъекта на карте.
myMap.geoObjects.add(myGeoObject);
    }

$(document).ready(function() {
  $("#phone").mask("+375 (99) 999-99-99");
  $(".popup-form #phone").mask("+375 (99) 999-99-99");

  $('[data-fancybox]').fancybox({
  autoFocus: false,
  touch: {
    vertical: false,
  },
});
$('.navbar__menu-button').on('click', function(){
  $('.navbar__nav').slideToggle(400);
});
});    

$(document).ready(function() {
//E-mail Ajax Send
$("form").submit(function() { //Change
var th = $(this);
$.ajax({
  type: "POST",
  url: "mail.php", //Change
  data: th.serialize()
}).done(function() {
  $.fancybox.close();
  $.fancybox.open({
      src  : '#trueModal',
      type : 'inline',
  });
  setTimeout(function() {
    // Done Functions
    th.trigger("reset");
  }, 1000);
});
return false;
});

});