import React, { useState, useEffect } from "react";
import DetailsForecast from "../components/city_details/DetailsForecast";
import DetailsHeader from "../components/city_details/DetailsHeader";
import DetailsStats from "../components/city_details/DetailsStats";
import axios from "axios";
import { XyzTransition } from "@animxyz/react";
//environment variables for the API key
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const API_URL = process.env.REACT_APP_WEATHER_API_URL;

//Page for In depth weather report on a selected city
function CityDetails({ city }) {
  //output to the DOM - State has been lifted to the most top level component
  //state is passed down into child components
  const [weather, setWeather] = useState(null);
  //for holding data... could be normal variables...

  // const getLocation = async () => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     lat = position.coords.latitude;
  //     long = position.coords.longitude;
  //   });
  // };

  let headerInfo = {};
  let statInfo = {};

  const getData = async () => {
    try {
      const data = await axios.get(
        `${API_URL}lat=${city.coord.lat}&lon=${city.coord.lon}&units=metric&appid=${API_KEY}`
      );
      setWeather(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(weather);

  //if there is weather data then extract the values needed
  if (weather) {
    console.log(city);
    headerInfo = {
      city: city.name,
      temp: weather.current.temp,
      feel: weather.current.feels_like,
      weather: weather.current.weather[0]
    };

    statInfo = {
      wind: weather.current.wind_speed,
      high: weather.daily[0].temp.max,
      low: weather.daily[0].temp.min,
      pressure: weather.current.pressure,
      humidity: weather.current.humidity,
      sunrise: weather.current.sunrise,
      sunset: weather.current.sunset
    };

    return (
      <XyzTransition appear duration="auto" xyz="fade down-100% duration-10">
        <>
          <DetailsHeader mainData={headerInfo} />
          <DetailsStats statInfo={statInfo} />
          <DetailsForecast />
        </>
      </XyzTransition>
    );
  } else {
    return <div>Loading....</div>;
  }
}

export default CityDetails;
