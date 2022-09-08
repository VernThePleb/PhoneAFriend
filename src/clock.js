var time_in_minutes = 2;
var current_time = Date.parse(new Date());
var deadline = new Date(current_time + time_in_minutes * 60 * 1000);
var timeIntervals = new Array();

function time_remaining(endTime) {
  var t = Date.parse(endTime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}
function run_clock(id, endTime) {
  clear_clock();
  var clocks = document.getElementsByClassName(id);
  function update_clock() {
    var t = time_remaining(endTime);
    var tijd = "minutes: " + t.minutes + "<br>seconds: " + t.seconds;
    [].slice.call(clocks).forEach(function (clock) {
      clock.innerHTML = tijd;
    });
    if (t.total <= 0) {
      clearInterval(timeInterval);
      [].slice.call(clocks).forEach(function (clock) {
        clock.innerHTML = "";
      });
    }
  }
  update_clock(); // run function once at first to avoid delay
  var timeInterval = setInterval(update_clock, 1000);
  timeIntervals.push(timeInterval);
  // console.log(timeInterval);
}

function clear_clock() {
  console.log(timeIntervals);
  for (let i = 0; i < timeIntervals.length; i++) {
    clearInterval(timeIntervals[i]);
  }
}
