(function () {
  var resize = function () {
    var deviceWidth = document.documentElement.clientWidth;
    // var fontSize = deviceWidth / (750 / 100);
    var fontSize = 20 * (deviceWidth / 320);
    document.documentElement.style.fontSize = fontSize + 'px';
    var realFontSize = parseInt(window.getComputedStyle(document.documentElement).fontSize);
    if (parseInt(fontSize) !== realFontSize) {
      fontSize = fontSize * fontSize / realFontSize;
      document.documentElement.style.fontSize = fontSize + 'px';
    }
  };
  window.onresize = (function () {
    var timer = null;
    return function () {
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        resize();
      }, 500);
    };
  })();
  resize();
})();