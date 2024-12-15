const lookupBtn = document.querySelector(".lookup-btn");
const isDisplay = document.querySelector(".ip-display");
const locationDisplay = document.querySelector(".location-display");
const geolocation = document.querySelector(".geolocation-display");
const loader = document.querySelector(".loader-container");
const details = document.querySelector(".details");

lookupBtn.addEventListener('click', () => {
    loader.style.display = "flex";
    details.style.display = "none";

    $.getJSON('https://ipapi.co/json/', function (data) {

        loader.style.display = "none";
        details.style.display = "block";
        isDisplay.textContent = `IP: ${data.ip}`;
        locationDisplay.textContent = `Region: ${data.city}, ${data.region}, ${data.country_name}`;
        geolocation.textContent = `Geo Location: ${data.latitude}, ${data.longitude}`;

    });
})



