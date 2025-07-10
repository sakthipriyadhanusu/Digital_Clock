const clockEl = document.getElementById("clock");
const dateEl = document.getElementById("date");
const use12Hour = true;
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = "";

  if (use12Hour) {
    ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    if (hours === 0) {
      hours = 12;
    }
  }
  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");

  clockEl.innerText = `${hours}:${minutes}:${seconds} ${ampm}`;
  const dateString = now.toDateString();
  dateEl.innerText = dateString;
}

setInterval(updateClock, 1000);
updateClock();
