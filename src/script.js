var obj = new Object();

$(document).ready(function () {});

$("button").click(function () {
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
  function fetchStudents() {
    id = obj.matched_students.id2;
    console.log("id" + id);
    let helper = obj.students[id];
    return helper;
  }
  var helper = fetchStudents();
  console.log(helper);
  $("#pop").removeAttr("hidden");
  $("#name").html(helper.name);
  $("#status").html(helper.status);
}

console.log(obj);
