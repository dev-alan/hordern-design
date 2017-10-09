var page = {
  body: null,
  init: function() {
    body = document.querySelector('body');
    this.loadMenu();
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
  },
  loadMenu: function(){
    var trigger = document.querySelector('#mobile-nav-trigger');
    if(trigger) {
      trigger.addEventListener('click', function(e){
        e.preventDefault();
        body.getAttribute('data-menu-visible') === 'true' ? body.setAttribute('data-menu-visible', 'false') : body.setAttribute('data-menu-visible', 'true');
      });
    }
  }
}

page.init();