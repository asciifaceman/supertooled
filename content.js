// Fetch all links
var image = document.getElementsByTagName("a");

// Fetch our size setting
chrome.storage.sync.get({
    size: 50
  }, function(items) {
    // make sure the page isn't empty
    if (image.length > 0) {
        for (var i = image.length; i--; i>0) {
            // make sure the image exists and IS an image
            if (typeof(image[i]) != "undefined") {
                if (image[i].href.includes("jpg") || image[i].href.includes("png")) {
    
                    // Replace the link with an inline image
                    var img = document.createElement("img");
                    var wrapper = document.createElement("div")
                    img.src = image[i].href
                    img.style = "width:" + items.size + "%;height:" + items.size + "%;"
                    wrapper.appendChild(img);
                    image[i].parentNode.replaceChild(wrapper, image[i]);
                }
            } else {
                console.log("Item undefined:")
                console.log(image[i].parentNode.children.item.toString());
            }
    
        }
    }
});