var time_in_minutes = 10;
var current_time = Date.parse(new Date());
var deadline = new Date(current_time + time_in_minutes * 60 * 1000);
var timeintervals = new Array();

function time_remaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
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
function run_clock(id, endtime) {
  clear_clock();
  var clock = document.getElementById(id);
  function update_clock() {
    var t = time_remaining(endtime);
    clock.innerHTML = "minutes: " + t.minutes + "<br>seconds: " + t.seconds;
    if (t.total <= 0) {
      clearInterval(timeinterval);
      clock.innerHTML = "";
    }
  }
  update_clock(); // run function once at first to avoid delay
  var timeinterval = setInterval(update_clock, 1000);
  timeintervals.push(timeinterval);
  console.log(timeinterval);
}

function clear_clock() {
  console.log(timeintervals);
  for (let i = 0; i < timeintervals.length; i++) {
    clearInterval(timeintervals[i]);
  }
}
