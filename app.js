const controller = new ScrollMagic.Controller();

const timeline1 = new TimelineMax();
timeline1.fromTo('.about-me', {opacity: 0}, {opacity: 1, duration: 1})

const scene1 = new ScrollMagic.Scene({
    triggerElement: '.title',
    triggerHook: 0.3,
    duration: 150,
})
.setTween(timeline1)
.addTo(controller)
//.addIndicators()


const timeline2 = new TimelineMax();
timeline2.to('.square', 1, {top: "-150%"})

const scene2 = new ScrollMagic.Scene({
    triggerElement: '.trigger',
    triggerHook: 0.85,
    duration: 800,
})
.setTween(timeline2)
.addTo(controller)
//.addIndicators()

const timeline3 = new TimelineMax();
timeline3.fromTo('.projects', {opacity: 0}, {opacity: 1, duration: 1})

const scene3 = new ScrollMagic.Scene({
    triggerElement: '.trigger',
    triggerHook: 0.5,
    duration: 100,
})
.setTween(timeline3)
.addTo(controller)
//.addIndicators()