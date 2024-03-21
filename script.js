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

// Rome
function updatedRomeTime() {
  let romeElement = document.querySelector("#rome");
  let romeDateElement = romeElement.querySelector(".date");
  let romeTimeElement = romeElement.querySelector(".time");
  let romeTime = moment().tz("Europe/Rome");

  romeDateElement.innerHTML = romeTime.format("MMMM Do, YYYY");
  romeTimeElement.innerHTML = romeTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updatedRomeTime();
setInterval(updatedRomeTime, 1000);

//dropdownButton
function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
  let cityName;
  if (cityTimeZone.includes("_")) {
    cityName = cityTimeZone.replace("_", " ").split("_")[1];
  } else if (cityTimeZone.includes("/")) {
    cityName = cityTimeZone.split("/")[1];
  } else {
    cityName = "Unknown";
  }

  let cityTime = moment().tz(cityTimeZone);
  let citiesSelectElement = document.querySelector("#cities");
  citiesSelectElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small></div>
    </div>
    <a href="index.html"> <strong>All cities</strong></a>
    `;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);