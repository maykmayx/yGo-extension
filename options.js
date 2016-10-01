
var url = location.search.match(/=(.+)/).pop();
// document.querySelector('body').innerHTML = url;

videojs("video", {}, function() {
    console.log(this)
    // this.play()

});
