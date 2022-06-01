var buttonEl = document.querySelector('.button');
var inputValueEl=document.querySelector('.inputValue');
var cityEl=document.querySelector('.city');
var timeEl=document.querySelector('.time')
var tempEl=document.querySelector('.temp');
var descEl=document.querySelector('.desc');
var humidityEl=document.querySelector('.humidity')
var windSpeedEl=document.querySelector('.windSpeed')

buttonEl.addEventListener('click',function(){

    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+inputValueEl.value+'&cnt=16&appid=ef67e5009d4692986dc5a35ad88f7290')
    .then(response=>response.json())
    .then(data=>{
        var cityElValue=data['city']['name']
        var timeElValue=data['list'][0]['dt_txt']
        var tempElValue=data['list'][0]['main']['temp']
        var descElValue=data['list'][0]['weather'][0]['description']
        var humidityElValue=data['list'][0]['main']['humidity']
        var windSpeedElValue=data['list'][0]['wind']['speed']

        cityEl.innerHTML=cityElValue
        timeEl.innerHTML='Time: ' + timeElValue
        tempEl.innerHTML='Temperature: '+ tempElValue
        descEl.innerHTML=descElValue
        humidityEl.innerHTML='Humidity: '+ humidityElValue +'%'
        windSpeedEl.innerHTML='Wind Speed: '+ windSpeedElValue +'MPH'
    })
.catch(err=>alert('Please enter a correct city.'))
})
 