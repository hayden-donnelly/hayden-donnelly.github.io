const controller = new ScrollMagic.Controller();

const timeline = new TimelineMax();
timeline.to('.transition', 1, {top: '-100%'})

const scene = new ScrollMagic.Scene({
    triggerElement: '.title',
    triggerHook: 0.3,
    duration: 400,
})
.setTween(timeline)
.addTo(controller)
//.addIndicators()

const timeline2 = new TimelineMax();
timeline2.fromTo('.about-me', {opacity: 0}, {opacity: 1, duration: 1})

const scene2 = new ScrollMagic.Scene({
    triggerElement: '.title',
    triggerHook: 0.45,
    duration: 75,
})
.setTween(timeline2)
.addTo(controller)
//.addIndicators()

const timeline3 = new TimelineMax();
timeline3.fromTo('.header2', {opacity: 0}, {opacity: 1, duration: 1})

const scene3 = new ScrollMagic.Scene({
    triggerElement: '.title',
    triggerHook: 0.2,
    duration: 75,
})
.setTween(timeline3)
.addTo(controller)