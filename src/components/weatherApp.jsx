import React,{useState} from 'react'
import DisplayNumber from './layout/DisplayNumber'
import WeatherForm from './layout/WeatherForm'

const WeatherApp = () => {
    const [temperature,setTemperature] = useState(null)

    function queryTemperature(e){
        e.preventDefault()
        const city = e.targetcity.value;
        const apikey = '7e2088558e5e43622d7b8ebb25fc9e47'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
        fetch(url)
         .then(response=>response.json())
         .then(weather=> setTemperature(weather))
    }
    console.log(temperature)
  return (
    <div>
        <h2>Weather App</h2>
        <form onSubmit={queryTemperature}>
        <input 
        type="text" 
        placeholder='digite la ciudad'
        id="city"
        />
        <button className='submit'>Enviar</button>
        </form>
        {/* operador ternario */}
       {/*  {temperature===!null
        ?<div><h2>{temperature}</h2></div>
        :null 
        } */}
        {/* operador de corto circuito */}
        {temperature===!null && <div><h2>{temperature}</h2></div> }
    </div>
  )
}

export default WeatherApp