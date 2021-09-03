import { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';

const App = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState("");

    useEffect(() => {
        callToAPI('Lahore');
    }, []);

    const getWeather = (e) => {
        e.preventDefault();
        
        callToAPI(city);

    }

    const callToAPI = (cityName) => {
        setCity(cityName);
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=aad8438bfe9b1c33a64b32c32b8f504f`)
            .then(function (response) {
                // handle success
                console.log(response);
                setWeather((response.data.main.temp - 273.15).toFixed(2));
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
    return (
        <>
            <h1>Weather App</h1>
            <form onSubmit={getWeather}>
                <input type="text" value={city}
                    onChange={(e) => setCity(e.target.value)} />
                <input type="submit" value="search" />
            </form>
            <p>Location is {city}</p>
            <p>{weather}</p>
        </>
    );
}

export default App;