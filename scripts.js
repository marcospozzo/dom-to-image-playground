$(document).ready(function () {
  $("#png").click(function () {
    domtoimage.toBlob(document.getElementById("div")).then(function (blob) {
      window.saveAs(blob, $("#name").text() + ".png");
    });
  });
  $("#jpg").click(function () {
    domtoimage
      .toJpeg(document.getElementById("div"), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = $("#name").text() + ".jpg";
        link.href = dataUrl;
        link.click();
      });
  });
});
