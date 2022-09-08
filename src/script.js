var obj = new Object();

$(document).ready(function () {});

$("#help").click(function () {
  popup();
  // fetchResult();
  // time out for testing
  // setTimeout(function () {
  //   fetchResult();
  // }, 6000);
  timer();
});

$(".close").click(function () {
  document.getElementById("pop").style.display = "none";
  document.getElementById("overlay").style.display = "none";
});

function popup() {
  document.getElementById("pop").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

function timer() {
  document.getElementById("help").style.display = "none";
  document.getElementById("load").style.display = "block";
  showTimer();
}

function showTimer() {
  setTimeout(() => {
    fetchResult();
  }, 30000);
  current_time = Date.parse(new Date());
  // for testing
  // deadline = new Date(current_time + time_in_minutes * 60 * 10);
  // origenal line
  time_in_minutes = 2;
  deadline = new Date(current_time + time_in_minutes * 60 * 1000);
  run_clock("clock", deadline);
}

function fetchResult() {
  $.get("src/json.json", function (data) {
    obj = data;
    // obj = data;
    console.log(obj);
    if (obj.match) {
      displayMatch();
    }
  });
}

function displayMatch() {
  document.getElementById("load").style.display = "none";
  document.getElementById("buddy").style.display = "block";

  function fetchStudents() {
    id = obj.matched_students.id2;
    console.log("id" + id);
    helper = obj.students[id];
    return helper;
  }

  fetchStudents();

  console.log(helper);
  // $("#pop").removeAttr("hidden");
  $("#name").html(helper.name);
  $("#status").html(helper.status);
}

console.log(obj);
