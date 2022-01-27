const controller = new ScrollMagic.Controller();

const timeline1 = new TimelineMax();
timeline1.fromTo('.about-me', {opacity: 0}, {opacity: 1, duration: 1})

const scene1 = new ScrollMagic.Scene({
    triggerElement: '.title',
    triggerHook: 0.4,
    duration: 100,
})
.setTween(timeline1)
.addTo(controller)
.addIndicators()


const timeline2 = new TimelineMax();
timeline2.to('.square', 1, {top: "-150%"})

const scene2 = new ScrollMagic.Scene({
    triggerElement: '.trigger',
    triggerHook: 1,
    duration: 800,
})
.setTween(timeline2)
.addTo(controller)
//.addIndicators()