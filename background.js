/**
 * Created by May on 9/22/16.
 */
chrome.runtime.onMessageExternal.addListener(function(message, sender) {
    var url = chrome.extension.getURL('options.html') + '?url=' + message.url;
    window.open(url);
})