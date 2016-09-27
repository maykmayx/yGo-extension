
var url = location.search.match(/=(.+)/).pop();
// document.querySelector('body').innerHTML = url;

videojs("videoURL", {}, function() {
    console.log(this)
    // this.play()

});