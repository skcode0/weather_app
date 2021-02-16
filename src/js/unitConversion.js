function toF(cel){
    return 9 / 5 * cel  + 32;
}

function toC(fah){
    return 5 / 9 * (fah - 32);
}

function toMPH(meter){
    return meter / 0.44704;
}

function toMeterPerSec(miles){
    return miles * 0.44704;
}


// temperature conversion
let impMet = document.getElementById("imp-met");
let imperial = document.getElementById("imperial");
let metric = document.getElementById("metric");
let tempConv = document.querySelectorAll(".temp-conv");

let meterMile = document.getElementsByClassName("meter-mile");


impMet.addEventListener("click", () =>{
    imperial.classList.toggle("bold");
    metric.classList.toggle("bold");

    // if metric chosen
    let weatherNums = document.querySelectorAll(".conversion");
    let speedConv = document.getElementsByClassName("speed-conv");
    if(metric.classList.contains("bold")){
        weatherNums.forEach(num =>{
            num.textContent = Math.round(toC(+num.textContent));
        });
        [...tempConv].map(dom => dom.textContent = "°C");

        [...speedConv].forEach(num =>{
            num.textContent = toMeterPerSec(+num.textContent).toFixed(2);
        });
        [...meterMile].map(dom => dom.textContent = " M/S");
    }
    // if imperial chosen
    else{
        weatherNums.forEach(num =>{
            num.textContent = Math.round(toF(+num.textContent));
        });
        [...tempConv].map(dom => dom.textContent = "°F");

        [...speedConv].forEach(num =>{
            num.textContent = toMPH(+num.textContent).toFixed(2);
        });
        [...meterMile].map(dom => dom.textContent = " Mi/H");
    }
});