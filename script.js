// New York
function updatedNewYorkTime() {
  let newYorkElement = document.querySelector("#newYork");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = moment().format("MMMM Do, YYYY");
  newYorkTimeElement.innerHTML = newYorkTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updatedNewYorkTime();
setInterval(updatedNewYorkTime, 1000);

// Cape Verde
function updatedCapeVerdeTime() {
  let capeVerdeElement = document.querySelector("#capeVerde");
  let capeVerdeDateElement = capeVerdeElement.querySelector(".date");
  let capeVerdeTimeElement = capeVerdeElement.querySelector(".time");
  let capeVerdeTime = moment().tz("Atlantic/Cape_Verde");

  capeVerdeDateElement.innerHTML = capeVerdeTime.format("MMMM Do, YYYY");
  capeVerdeTimeElement.innerHTML = capeVerdeTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updatedCapeVerdeTime();
setInterval(updatedCapeVerdeTime, 1000);
