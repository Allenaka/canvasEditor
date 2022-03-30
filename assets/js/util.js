function debounce(fn, wait) {
    let timebar = null;
    return function() {
        clearTimeout(timebar)
        timebar = setTimeout(() => {
            fn.apply(this, arguments);
        }, wait)
    }
}

function blobToBase64(blob) {
    let reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise(resolve => {
        reader.onload = function(res) {
            resolve(res.target.result);
        }
    })
}

function loadStyles(url) {
    let link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
    return link;
}


function getBase64Image (url) {
    var that = this
    var image = new Image()
    image.crossOrigin = '*' // 支持跨域图片
    image.src = url;
    return new Promise(resolve => {
        image.onload = function () {
            var base64 = that.drawBase64Image(image)
            resolve(base64);
        }
    })
}
function drawBase64Image (img) {
    var canvas = document.createElement('canvas')
    canvas.width = img.width
    canvas.height = img.height
    var ctx = canvas.getContext('2d')
    ctx.drawImage(img, 0, 0, img.width, img.height)
    var dataURL = canvas.toDataURL('image/png')
    return dataURL
}