import React, { useState } from "react";
import styles from "../components/search/search.module.scss";
import cityList from "../cityList.json";
import { Link } from "react-router-dom";

console.log(cityList);
function SearchCity({ setLocation }) {
  //is used to output to the DOM
  const [query, setQuery] = useState("");
  const onchange = ({ target }) => {
    setQuery(target.value);
  };

  const setCity = (city, country, coord) => {
    setLocation({ name: `${city}, ${country}`, coord: coord });
  };

  const getResults = () => {
    const results = cityList.filter((city) => {
      if (query.length >= 3) {
        return city.name.toLowerCase().startsWith(query.toLowerCase());
      }
      return false;
    });

    console.log(results);
    return results.map((city) => {
      return (
        <Link
          to="/weather"
          className={styles.weatherLink}
          onClick={() => setCity(city.name, city.country, city.coord)}
        >
          <li>
            {city.name}, {city.country}
          </li>
        </Link>
      );
    });
  };

  return (
    <>
      <div className={styles.searchContainer}>
        <h1>Search</h1>
        <input
          className={styles.cityInput}
          type="text"
          placeholder="enter your city here...."
          onChange={(event) => onchange(event)}
        />
      </div>

      <ul className={styles.resultsContainer}>{getResults()}</ul>
    </>
  );
}

export default SearchCity;
