document.getElementById("show-weather"),document.getElementById("search-btn").onclick=e=>{e.preventDefault(),async function(e){let t="http://api.openweathermap.org/data/2.5/weather?q="+e+"&APPID=a631e1e5b48cd37e87f8123460fe88e6";var n;!function(e,t){const n=document.getElementById("show-name"),o=document.getElementById("show-temp"),m=document.getElementById("show-condition"),r=document.getElementById("show-humid"),a=document.getElementById("show-pressure");n.innerText=t,o.innerText=parseInt(e.main.temp-273)+"°C",m.innerText=e.weather[0].description,r.innerText="Humidity: "+e.main.humidity,a.innerText="Pressure: "+e.main.pressure,document.getElementById("show-weather").style.display="block"}(await fetch(t,{mode:"cors"}).then((function(e){return e.json()})),(n=e,n=n.charAt(0).toUpperCase()+n.slice(1).toLowerCase()))}(document.getElementById("cityname").value)};