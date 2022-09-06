var online_students = new Array();

$(document).ready(function () {
  $("button").click(function () {
    $.get("src/index.php", function (data) {
      online_students = data;
    });
  });
});

function showTimer() {
  setTimeout(fetchResult(), 600000);
}

function fetchResult() {
  $.get("src/index.php", function (data) {
    online_students = data;
  });
}

console.log(online_students);
