/* click listener for button - trigger vid opening*/


var getLecture1 = document.querySelector('#getLecture1');
var getLecture2 = document.querySelector('#getLecture2');

function getLecture(i, callback) {
    chrome.runtime.sendMessage({ lecture: i }, function(response) {
        callback(response.url);
    });
}

function openUrl(url) {
    alert(url);
    // open src (vid) in new tab
    // HOW THE HELL - open it in html5 player
}

getLecture1.addEventListener('click', function(e) {
    getLecture(0, openUrl);
});

getLecture2.addEventListener('click', function(e) {
    getLecture(1, openUrl);
});


