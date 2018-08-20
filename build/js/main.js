'use strict';

var buttonMenuOpen = document.querySelector('.main-header__button');
var nav = document.querySelector('.main-header__nav');

buttonMenuOpen.addEventListener('click', function() {
  if (nav.classList.contains('main-header__nav--close')) {
    nav.classList.remove('main-header__nav--close');
    nav.classList.add('main-header__nav--open');
    buttonMenuOpen.classList.remove('main-header__button--open');
    buttonMenuOpen.classList.add('main-header__button--close');
    }
    else {
      nav.classList.add('main-header__nav--close');
      nav.classList.remove('main-header__nav--open');
      buttonMenuOpen.classList.remove('main-header__button--close');
      buttonMenuOpen.classList.add('main-header__button--open');
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGJ1dHRvbk1lbnVPcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4taGVhZGVyX19idXR0b24nKTtcbnZhciBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1oZWFkZXJfX25hdicpO1xuXG5idXR0b25NZW51T3Blbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBpZiAobmF2LmNsYXNzTGlzdC5jb250YWlucygnbWFpbi1oZWFkZXJfX25hdi0tY2xvc2UnKSkge1xuICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fbmF2LS1jbG9zZScpO1xuICAgIG5hdi5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fbmF2LS1vcGVuJyk7XG4gICAgYnV0dG9uTWVudU9wZW4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX2J1dHRvbi0tb3BlbicpO1xuICAgIGJ1dHRvbk1lbnVPcGVuLmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19idXR0b24tLWNsb3NlJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19uYXYtLWNsb3NlJyk7XG4gICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX25hdi0tb3BlbicpO1xuICAgICAgYnV0dG9uTWVudU9wZW4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX2J1dHRvbi0tY2xvc2UnKTtcbiAgICAgIGJ1dHRvbk1lbnVPcGVuLmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19idXR0b24tLW9wZW4nKTtcbiAgICB9XG59KTtcbiJdLCJmaWxlIjoibWFpbi5qcyJ9
