/**
 * To show off JS works and can be integrated.
 */
(function () {
  'use strict';

  const $nav = document.querySelector('.region-header-mobile');
  const $icon = $nav.querySelector('.menu-icon');

  $icon.addEventListener('click', () => {
    $nav.classList.toggle('open');
  }, false);

  $nav.addEventListener('click', e => {
    const { target } = e;
    const { classList } = target;

    if (classList.contains('submenu-icon')) {
      const $parent = target.parentNode;

      $parent.classList.toggle('open');
    }
  }, false);
})();
