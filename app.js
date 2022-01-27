const timeline = new TimelineMax();
timeline.to('.square', 1, {top: "-150%"})

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
    triggerElement: '.trigger',
    triggerHook: 0.9,
    duration: 1000,
})
.setTween(timeline)
.addTo(controller)
//.addIndicators()