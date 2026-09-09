console.log("Honestly Louis you had nothing better to do than delve into the console of a wedding website? Absolute wrongun");

(function () {
  var target = new Date("2027-04-09T14:00:00+01:00");
  var el = document.getElementById("countdown");
  if (!el) return;

  function render() {
    var now = new Date();
    var diff = target - now;
    if (diff <= 0) {
      el.textContent = "The day is here";
      return;
    }
    var days = Math.floor(diff / 86400000);
    el.textContent = days + " days to go";
  }

  render();
  setInterval(render, 3600000);
})();
