var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '.col-1-of-3'
})
.setClassToggle('.col-1-of-3', 'fade-in')
.addTo(controller);

var controller2 = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '.col-2-of-3'
})
.setClassToggle('.col-2-of-3', 'fade-in')
.addTo(controller2);

var controller3 = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '.col-3-of-3'
})
.setClassToggle('.col-3-of-3', 'fade-in')
.addTo(controller2);

var controller4 = new ScrollMagic.Controller();
