(() => {
  function enableHover() {
    delete window.onloadLink;
    document.querySelector('nav').classList.add('hover');
    document.removeEventListener('mousemove', onMouseMove);
  }

  function onMouseMove(e) {
    if (
      window.onloadLink
      && window.onloadLink !== e.target
      && !window.onloadLink.contains(e.target)
    ) {
      enableHover();
      return;
    }

    document.querySelectorAll('nav a').forEach(link => {
      if (link === e.target || link.contains(e.target)) {
        window.onloadLink = link;
      }
    });

    if (!window.onloadLink) enableHover();
  }

  document.addEventListener('mousemove', onMouseMove);

  const toggle = document.querySelector('.js-nav-toggle');
  const toggleImg = toggle.querySelector('img');
  const nav = document.querySelector('nav');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    document.body.classList.toggle('noscroll');
    if (nav.classList.contains('active')) toggleImg.src = '/img/close.svg';
    else toggleImg.src = '/img/menu.svg';
  });

  feather.replace();
  Stickyfill.add(document.querySelector('nav'));

  window.odometerOptions = { auto: false };

  for (const el of document.querySelectorAll('.odometer')) {
    inViewport(el, { offset: 100 }, () => {
      const od = new Odometer({ el, value: 0, duration: el.dataset.duration });
      od.update(el.dataset.value);
    });
  }
})();
