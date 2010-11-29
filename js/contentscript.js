// Add a trim method to String
String.prototype.trim = function() {
  return this.replace(/^\s+|\s+$/g, "");
};

function getMetaTagValue(metaTagName) {
  var metaTagValue = '';
  var metaTags = document.getElementsByTagName('meta');
  for(var i = 0; i < metaTags.length; i++) {
    if(metaTags[i].name == metaTagName || metaTags[i].httpEquiv == metaTagName) {
      if(!(metaTags[i].content.trim() == '')) {
        metaTagValue = metaTags[i].content;
        break;
      }
    }
  }
  return { "name" : metaTagName, "value" : metaTagValue };
};

function getMetaTag(response) {
  var metaTag = getMetaTagValue(response.metaTagName);
  chrome.extension.sendRequest({ "action" : "setMetaTag", "metaTag" : metaTag }, function(response) {
    // nothing
  });
}

// Get config and call callback
chrome.extension.sendRequest({ "action" : "getConfig" }, getMetaTag);