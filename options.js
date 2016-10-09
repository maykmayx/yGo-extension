
var url = location.search.match(/=(.+)/).pop();
// document.querySelector('body').innerHTML = url;

videojs("video", {
	playbackRates: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2], autoplay: true
}, function() {
    console.log(this);
    this.src(url);
});
