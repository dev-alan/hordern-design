var page = {
  init: function() {
    this.loadBackgrounds();
  },
  loadBackgrounds: function(){
    Array.prototype.slice.call(document.querySelectorAll('[data-background]')).forEach(function(el){
      el.style.backgroundImage = 'url("' + el.getAttribute('data-background') + '")';
    });
  }
}

page.init();