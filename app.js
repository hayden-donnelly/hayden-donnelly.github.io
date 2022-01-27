const timeline = new TimelineMax();
timeline.to('.square', 1, {top: "-150%"})

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
    triggerElement: '.trigger',
    triggerHook: 1,
    duration: 800,
})
.setTween(timeline)
.addTo(controller)
//.addIndicators()