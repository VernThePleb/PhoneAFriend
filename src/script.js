$(document).ready(function () {
  $("button").onclick(function () {
    $("div").load("index.php");
  });
});

function showTimer() {
  setTimeout(fetchResult(), 600000);
}

function fetchResult() {
  window.location = "index.php";
}
