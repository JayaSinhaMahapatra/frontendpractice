const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function circleMouseFollower() {
    window.addEventListener("mousemove", function(event) {
        document.querySelector("#minicircle").style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    });
}

circleMouseFollower();