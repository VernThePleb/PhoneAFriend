var obj = new Object();

$(document).ready(function () {
  $("button").click(function () {
    $.get("src/json.json", function (data) {
      obj = data;
      console.log(obj);
    });
    showTimer();
  });
});

function showTimer() {
  setTimeout(() => {
    fetchResult();
  }, 600000);
  run_clock("clock", deadline);
}

function fetchResult() {
  $.get("src/json.json", function (data) {
    obj = data;
    console.log(data);
  });
}

function displayMatch() {
  $("#");
}

console.log(obj);
