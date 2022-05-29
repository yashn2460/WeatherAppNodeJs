const day =document.getElementById("day");
const date =document.getElementById("today_date");
const subtn = document.getElementById("sumbitBtn");
const CityName = document.getElementById("CityName");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const getinfo = async(event) =>{
    event.preventDefault();
    let cityVal = CityName.value;
    
    if(cityVal === ""){
        city_name.innerHTML ="plz enter city name";
     }
    else{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=b03da4a7883091cd3ccd0fadffb804e5`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            temp.innerHTML = arrData[0].main.temp;
            city_name.innerHTML =`${arrData[0].name},${arrData[0].sys.country}`;
            const tempStatus = arrData[0].weather[0].main;
            if (tempStatus == "Haze") {
                temp_status.innerHTML =
                  "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
              } else if (tempStatus == "Smoke") {
                temp_status.innerHTML =
                  "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
              } else if (tempStatus == "Rainy") {
                tempStatus.innerHTML =
                  "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
              } else {
                temp_status.innerHTML =
                  "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
              }
            
        } catch (err) {
            city_name.innerHTML ="plz enter  proper city name";

        }
    }
}
subtn.addEventListener("click",getinfo);
const getCurrentTime =()=>{
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const d = new Date();
    let mon = month[d.getMonth()];
    let dat = d.getDate();
    let hrs = d.getHours();
    let min = d.getMinutes();
    let periods = "AM";
    if(hrs > 11){
      periods = "PM"
      if(hrs>12) hrs -= 12;
    }
    if(min<10){
      min = "0" + min;
    }
    return `${mon} ${dat} | ${hrs} : ${min}`;
  }
const getCurrentDay = ()=>{
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const d = new Date();
    let day = weekday[d.getDay()];
    return day;
  }
  
  day.innerHTML = getCurrentDay();
  date.innerHTML = getCurrentTime();
