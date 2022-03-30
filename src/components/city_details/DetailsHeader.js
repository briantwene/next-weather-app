import React from "react";
import styles from "./detailsHeader.module.scss";
import * as WiIcons from "react-icons/wi";
function DetailsHeader({ mainData }) {
  //   const HeaderInfo = {
  //     city: mainData.name,
  //     code: mainData.sys.country,
  //     temp: mainData.main.temp,
  //     feel: mainData.main.feels_like,
  //     weather: {
  //       condition: mainData.weather.main,
  //       description: mainData.weather.main.description
  //     }
  //   };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerInfo}>
        <span className={styles.weatherText}>{`${mainData.city}`}</span>
        <div className={styles.tempText}>
          <span>{Math.round(mainData.temp)}&deg;C</span>
          <span className={styles.tempFeelText}>
            Feels like: {Math.round(mainData.feel)}&deg;C
          </span>
        </div>
        <span className={styles.weatherText}>
          {mainData.weather.main} <br />
          {mainData.weather.description}
        </span>
      </div>

      <div className={styles.weatherIconContainer}>
        <span className={styles.weatherIconMain}>
          <WiIcons.WiCloudy />
        </span>
      </div>
    </div>
  );
}

export default DetailsHeader;
