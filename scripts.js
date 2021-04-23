$(document).ready(function () {
  $("#png").click(function () {
    domtoimage.toBlob(document.getElementById("canvas")).then(function (blob) {
      window.saveAs(blob, $("#name").text() + ".png");
    });
  });
  $("#jpg").click(function () {
    domtoimage
      .toJpeg(document.getElementById("canvas"), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = $("#name").text() + ".jpg";
        link.href = dataUrl;
        link.click();
      });
  });
});

$("#input-name").on("input", function () {
  $("#name").text($("#input-name").val());
});

$("#input-country").on("input", function () {
  $("#country").text($("#input-country").val());
});

$("#input-picture").on("change", function () {
  $("#image").attr(
    "src",
    $("#input-picture")
      .val()
      .match(/[^\\/]*$/)[0] // this regex matches the file name because of the c fakepath problem
  );
});
