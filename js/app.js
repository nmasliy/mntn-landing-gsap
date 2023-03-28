document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  function initAnimations() {
    if (ScrollTrigger.isTouch === 1) return;

    const smoother = ScrollSmoother.create({
      wrapper: '.wrapper',
      content: '.content',
      smooth: 1,
      effects: true,
    });

    document.querySelector('.hero__scroll').addEventListener('click', (e) => {
      e.preventDefault();
      smoother.scrollTo('.main', true, 'top 50px');
    });

    gsap.to('.hero__content', {
      opacity: 0,
      scrollTrigger: {
        trigger: '.hero__content',
        start: 'top top',
        end: '300px',
        scrub: 1,
      },
    });

    const itemsLeft = gsap.utils.toArray('.main__item > *:first-child');
    const itemsRight = gsap.utils.toArray('.main__item > *:last-child');

    itemsLeft.forEach((item) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          x: 100,
          scrollTrigger: {
            trigger: item,
            start: '-500', 
            end: '+=800', 
            scrub: 1,
          },
        }
      );
    });

    itemsRight.forEach((item) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          x: 200,
        },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: item,
						start: '-500', 
            end: '+=800', 
            scrub: 1,
          },
        }
      );
    });
  }

  initAnimations();
});
