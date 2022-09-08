var obj = new Object();

$(document).ready(function () {});

$("#help").click(function () {
  popup();
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
  time_in_minutes = 2;
  deadline = new Date(current_time + time_in_minutes * 60 * 1000);
  run_clock("clock", deadline);
}

function fetchResult() {
  $.get("src/json.json", function (data) {
    obj = data;
    // obj = JSON.parse(data);
    console.log(obj);
    if (obj.match) {
      displayMatch();
    }
  });
}

function displayMatch() {
  popup();
  document.getElementById("index_clock").style.display = "none";
  document.getElementById("load").style.display = "none";
  document.getElementById("buddy").style.display = "block";

  function fetchStudents() {
    id = obj.matched_students.id1;
    console.log("id" + id);
    helper = obj.students[id];
    return helper;
  }

  fetchStudents();

  console.log(helper);
  $("#name").html(helper.name);
  if (helper.status == "STRUGGLE") {
    $("#status").html("heeft hulp nodig");
  }
}

console.log(obj);
