let now = new Date();
let currentDetails = document.querySelector(".current-details"); // Fixed variable name

let hours = now.getHours();
let date = now.getDate();
let minutes = now.getMinutes();

minutes = minutes < 10 ? `0${minutes}` : minutes;

currentDetails.innerHTML = `Sat ${hours}:${minutes}`;

document.addEventListener("DOMContentLoaded", function () {
  let searchForm = document.querySelector("form");
  let cityNameElement = document.querySelector(".current-city");

  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const cityName = document.querySelector(".search-input").value;

    cityNameElement.innerText = cityName;

    document.querySelector(".search-input").value = "";
  });
});
