function supportsSVG() {
    return !! document.createElementNS && !! document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect;
}
if (!supportsSVG()) {
    var imgs = document.getElementsByTagName('img');
    var dotSVG = /.*\.svg$/;
    for (var i = 0; i != imgs.length; ++i) {
        if(imgs[i].src.match(dotSVG)) {
            imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
        }
    }
}
$('.nav').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 750,
    scrollOffset: 93,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
});