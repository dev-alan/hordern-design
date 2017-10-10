var page = {
  body: null,
  init: function() {
    body = document.querySelector('body');
    this.loadMenu();
    this.loadBackgrounds();
    this.loadGalleries();
  },
  _buildMenu: function(menu){
    Array.prototype.slice.call(menu.querySelectorAll('li ul')).forEach(function(ul){
      var li = ul.parentElement;
      var a = li.querySelector('a');
      var button = document.createElement('button');
      button.className = 'btn btn-default';
      button.addEventListener('click', function(e){
        e.preventDefault();
        li.getAttribute('data-menu-expanded') === 'true' ? li.setAttribute('data-menu-expanded', 'false') : li.setAttribute('data-menu-expanded', 'true');
      });
      a.appendChild(button);
    });
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
    var mainMenu = document.querySelector('#site-navigation nav');
    if(mainMenu) {
      this._buildMenu(mainMenu);
    }
    var trigger = document.querySelector('#mobile-nav-trigger');
    if(trigger) {
      trigger.addEventListener('click', function(e){
        e.preventDefault();
        body.getAttribute('data-menu-visible') === 'true' ? body.setAttribute('data-menu-visible', 'false') : body.setAttribute('data-menu-visible', 'true');
      });
    }

    var shopMenu = document.querySelector('#store-menu');
    if(shopMenu) {
      this._buildMenu(shopMenu);
    }
  }
}

page.init();