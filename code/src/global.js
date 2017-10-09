var page = {
  init: function() {
    this.loadBackgrounds();
    this.loadGalleries();
  },
  loadBackgrounds: function(){
    Array.prototype.slice.call(document.querySelectorAll('[data-background]')).forEach(function(el){
      el.style.backgroundImage = 'url("' + el.getAttribute('data-background') + '")';
    });
  },
  loadGalleries: function(){
    if(document.querySelector('.slideshow')) {
      $(function(){
        Array.prototype.slice.call(document.querySelectorAll('.slideshow')).forEach(function(el){
          $(el).owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayHoverPause: true,
            nav: false,
            dots: true
          });
        });
      });
    }
  }
}

page.init();