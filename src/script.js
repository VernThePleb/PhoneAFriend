var obj = new Object();
let path = [];

$(document).ready(function () {});

$("#help").click(function () {
  fetchResult();
  showTimer();
});

function showTimer() {
  setTimeout(() => {
    fetchResult();
  }, 600000);
  current_time = Date.parse(new Date());
  deadline = new Date(current_time + time_in_minutes * 60 * 1000);
  run_clock("clock", deadline);
}

function fetchResult() {
  $.get("src/json.json", function (data) {
    obj = data;
    console.log(data);
    if (obj.match) {
      displayMatch();
    }
  });
}

function displayMatch() {
  function fetchStudents(matched_students) {
    student_key_buddy = getParent();
  }
  $("#pop").removeAttr("hidden");
  $("#name").html();
}

function getParent(path, json, value) {
  for (var key in json) {
    if (typeof json[key] === "object") {
      path.push(key.toString());
      getParent(path, json[key], value);
      path.pop();
    } else {
      if (json[key] == value) {
        return path[0];
      }
    }
  }
}

console.log(obj);
