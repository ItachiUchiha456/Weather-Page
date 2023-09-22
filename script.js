
let search1 = document.getElementById("search")
let btn = document.getElementById("btn")
let ciry = document.querySelector(".city")
let dg = document.querySelector(".dg")
let wind = document.getElementById("wind")
let hum = document.getElementById("hum")
let img = document.getElementById("img")
let desc = document.querySelector("#desc")
btn.addEventListener("click",async()=>{
      const key = 'bcf97c766000096504fb6ce44fba6d96'
      const api = `https://api.openweathermap.org/data/2.5/weather?q=${search1.value}&appid=${key}&units=metric`
      const res = await fetch(api)
      var data = await res.json()
      console.log(data)
      dg.innerText = data.main.temp +"°C"
      ciry.innerText = data.name
     wind.innerText =  data.wind.speed
    hum.innerText =  data.main.humidity

    let imgs = ['clear.png','clouds.png','drizzle.png','mist.png','rain.png','snow.png']

    if(data.weather[0].main == 'mist'){
      img.src = imgs[3]
    }
    if(data.weather[0].main == 'Haze'){
        img.src = imgs[3]
      }
    if(data.weather[0].main == 'Clouds'){
        img.src = imgs[1]
      }
      if(data.weather[0].main == 'Rain'){
        img.src = imgs[4]
      }
     if(data.weather[0].main == 'Thunderstorm'){
        img.src = imgs[4]
      }
      if(data.weather[0].main == 'Clear'){
        img.src = imgs[0]
      }
      if(data.weather[0].main == 'Snow'){
        img.src = imgs[5]
      }
      if(data.weather[0].main == 'Drizzle'){
        img.src = imgs[2]
      }
      desc.innerText = data.weather[0].description
    // if()
})

function showImgs(){

  }






