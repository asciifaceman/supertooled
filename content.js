var image = document.getElementsByTagName("a");

chrome.storage.sync.get({
    size: 50
  }, function(items) {
    if (image.length > 0) {
        for (var i = image.length; i--; i>0) {
            if (typeof(image[i]) != "undefined") {
                if (image[i].href.includes("jpg") || image[i].href.includes("png")) {
    
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