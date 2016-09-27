
//
// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//     var i = message.lecture;
//     var url = window.chapters_data[i].full_other_path;
//     sendResponse({ url: url });
// });

function openLecture1(e) {
    var url = window.chapters_data[0].full_other_path;
    var id = this.dataset.extensionId;
    chrome.runtime.sendMessage(id, { url : url });
}

function openLecture2(e) {
    var url = window.chapters_data[1].full_other_path;
    var id = this.dataset.extensionId;
    chrome.runtime.sendMessage(id, { url : url });
}

function toClickHandler(fn) {
    return "event.preventDefault(); (" + fn.toString().replace(/\s+/g, " ") + ").call(this, event);"
}

var lecture1button = document.createElement("div");
lecture1button.innerHTML += "<button data-extension-id='" + chrome.runtime.id + "' onclick='" + toClickHandler(openLecture1) + "'>get lecture 1</button>";

var lecture2button = document.createElement("div");
lecture2button.innerHTML += "<button data-extension-id='" + chrome.runtime.id + "' onclick='" + toClickHandler(openLecture2) + "'>get lecture 2</button>";

document.body.appendChild(lecture1button);
document.body.appendChild(lecture2button);


