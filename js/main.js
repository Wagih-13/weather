let barsBtn = document.querySelector("#bars");
barsBtn.addEventListener("click", () => {
  document.querySelector(".navBar").classList.toggle("open");
});

let country_list = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua &amp; Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia &amp; Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Cayman Islands",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cruise Ship",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyz Republic",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre &amp; Miquelon",
  "Samoa",
  "San Marino",
  "Satellite",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "St Kitts &amp; Nevis",
  "St Lucia",
  "St Vincent",
  "St. Lucia",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad &amp; Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks &amp; Caicos",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

let day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const date = new Date();

async function getWeather(governorateName = "ciro") {
  let resp = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=f623af5d7ba94d1a992112233240101&q=${governorateName}&days=3`
  );
  let infoArray = await resp.json();
  document.querySelector(".Location").innerHTML = infoArray.location.name;
  document.querySelector(
    ".wind"
  ).innerHTML = `<img src="images/icon-compass.png" alt="" /> ${infoArray.forecast.forecastday[0].hour[0].wind_dir}`;
  document.querySelector(
    ".speed"
  ).innerHTML = `<img src="images/icon-wind.png" alt="" />${infoArray.forecast.forecastday[0].day.avgvis_km} km/h`;
  document.querySelector(" #s1").innerHTML = day[date.getDay()];
  document.querySelectorAll(".s2")[0].innerHTML = `${date.getDate()} ${
    month[date.getMonth()]
  }`;

  document.querySelectorAll(".T1")[0].innerHTML =
    infoArray.forecast.forecastday[1].day.mintemp_c + "°C";
  document.querySelectorAll(".T1")[1].innerHTML =
    infoArray.forecast.forecastday[2].day.mintemp_c + "°C";
  document.querySelectorAll(".s2")[1].innerHTML = `${date.getDate() + 1} ${
    month[date.getMonth()]
  }`;
  document.querySelectorAll(".s2")[2].innerHTML = `${date.getDate() + 2} ${
    month[date.getMonth()]
  }`;
  let Deg = document.querySelectorAll(".Deg");
  Deg[0].innerHTML = `${infoArray.forecast.forecastday[0].day.maxtemp_c}°C`;
  Deg[1].innerHTML = `${infoArray.forecast.forecastday[1].day.maxtemp_c}°C`;
  Deg[2].innerHTML = `${infoArray.forecast.forecastday[2].day.maxtemp_c}°C`;

  let pic = document.querySelectorAll(".pic");
  pic[0].innerHTML = `<img src=${infoArray.forecast.forecastday[0].day.condition.icon} alt="" />`;
  pic[1].innerHTML = `<img src=${infoArray.forecast.forecastday[1].day.condition.icon} alt="" />`;
  pic[2].innerHTML = `<img src=${infoArray.forecast.forecastday[2].day.condition.icon} alt="" />`;

  let custom = document.querySelectorAll(".custom");
  custom[0].innerHTML = infoArray.forecast.forecastday[0].day.condition.text;
  custom[1].innerHTML = infoArray.forecast.forecastday[1].day.condition.text;
  custom[2].innerHTML = infoArray.forecast.forecastday[2].day.condition.text;
}

getWeather();

(async function () {
  let findCountry = document.querySelector("#findInput");
  findCountry.addEventListener("keydown", function () {
    for (let i = 0; i < country_list.length; i++) {
      if (country_list[i].includes(findCountry.value)) {
        getWeather(country_list[i]);
        break;
      }
    }
  });
})();
