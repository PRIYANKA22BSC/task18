//Question 1:
/*

let numbers=[2,3,4,5,6];
function square(num){
    return num*num;
}

 let newarray=numbers.map(square);
 console.log(newarray);
*/

//Question 2:
/*
 function isPrime(num) {
    if (num < 2) return false; 
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false; 
    }
    return true; 
}

let filtered=numbers.filter(isPrime);
console.log(filtered);
*/

//Question 3:
/*
function result(score) {
    return (score >= 90) ? 'A' :
           (score >= 80) ? 'B' :
           (score >= 70) ? 'C' :
           (score >= 60) ? 'D' : 'F';
}

console.log(result(95)); 
console.log(result(82)); 
console.log(result(76));
console.log(result(61)); 
console.log(result(50)); 
*/

// Question 4
/*
let car = {
    company: "Toyota",
    model: "Corolla",
    year: 2022
};

function year(newyear){
     car.year=newyear;
     console.log(`car new year:${car.year}`)
}

function modelyear({ model, year }) {
    console.log(`Model: ${model}, Year: ${year}`);
}
year(2024);
modelyear(car);

*/

//Question 5 solution is in index.html

//Question 6->Weather app
/*
let input = document.getElementById('input');
let cityName = document.getElementById('city');
let Rain = document.getElementById('weather');
let maxtem = document.getElementById('max');
let mintem = document.getElementById('min');
let temp = document.getElementById('degree');
let humidity = document.getElementById('moderate');
input = input.value;

function fetchData() {

    let input = document.getElementById('input');
    let cityName = document.getElementById('city');
    let Rain = document.getElementById('weather');
    let maxtem = document.getElementById('max');
    let mintem = document.getElementById('min');
    let temp = document.getElementById('degree');
    let humidity = document.getElementById('moderate');
    input = input.value;


    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + encodeURIComponent(input) + '&appid=3869d8f56b7ab4d51ab327376487367d';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            cityName.innerText = data.name;
            Rain.innerText = data.weather[0].description;
            maxtem.innerText = (data.main.temp_max - 273.15).toFixed(2) + "°C";
            mintem.innerText = (data.main.temp_min - 273.15).toFixed(2) + "°C";
            temp.innerText = (data.main.temp - 273.15).toFixed(2) + "°C";
            humidity.innerText = "Humidity: " + data.main.humidity + "%";
            document.getElementById('images').src='icon/'+data.weather[0].icon+'.png';

        })
        .catch(error => {
            console.log('Error fetching data:', error);
        });

}

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Supaul&appid=3869d8f56b7ab4d51ab327376487367d';
fetch(url)
    .then(response => response.json())
    .then(data => {
        cityName.innerText = data.name;
        Rain.innerText = data.weather[0].description;
        maxtem.innerText = (data.main.temp_max - 273.15).toFixed(2) + "°C";
        mintem.innerText = (data.main.temp_min - 273.15).toFixed(2) + "°C";
        temp.innerText = (data.main.temp - 273.15).toFixed(2) + "°C";
        humidity.innerText = "Humidity: " + data.main.humidity + "%";
        document.getElementById('images').src='icon/'+data.weather[0].icon+'.png';
    })
    .catch(error => {
        console.log('Error fetching data:', error);
    });*/


//Question 7
/*
const personWithoutContact = {
    name: "Bob Johnson",
    address: {
      street: "101 Oak St",
      city: "Chicago",
      postalCode: "60616"
    }
  };
  
  const phoneNumberMissing = personWithoutContact.contact?.phone;

  console.log(phoneNumberMissing); 
  */








  






 