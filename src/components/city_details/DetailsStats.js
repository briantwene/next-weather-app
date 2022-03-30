import React from "react";
import styles from "./detailsStats.module.scss";
import * as BsIcons from "react-icons/bs";

function DetailsStats({ statInfo }) {
  // const statInfo = {
  //   high: weather.main.temp_max,
  //   low: weather.main.temp_min,
  //   wind: weather.wind.speed,
  //   humidity: weather.main.humidity,
  //   sunrise: weather.main.sunrise,
  //   sunset: weather.main.sunset
  // };

  console.log(Date.now());

  const calcuateProgress = (sunrise, sunset) => {
    const currentTime = Date.now();
    return (currentTime - sunrise) / (sunset - sunrise);
  };

  console.log(statInfo.sunrise, statInfo.sunset, Date.now());

  console.log(calcuateProgress(statInfo.sunrise, statInfo.sunset));

  const sunriseTime = new Date(statInfo.sunrise * 1000).toLocaleTimeString(
    "en-IE",
    {
      hour: "2-digit",
      minute: "2-digit"
    }
  );

  const sunsetTime = new Date(statInfo.sunset * 1000).toLocaleTimeString(
    "en-IE",
    {
      hour: "2-digit",
      minute: "2-digit"
    }
  );
  console.log(statInfo);

  return (
    <div className={styles.statsContainer}>
      {/* put the vaules into an array so that it can be mapped over */}
      <div className={styles.infoGrid}>
        <div className={styles.infoGridItem}>
          <span className={styles.infoHeading}>Sunrise</span>
          <span className={styles.infoValue}>{sunriseTime}</span>
        </div>
        <div className={styles.infoGridItem}>
          <span className={styles.infoHeading}>Sunset</span>
          <span className={styles.infoValue}>{sunsetTime}</span>
        </div>
        <div className={styles.infoGridItem}>
          <span className={styles.infoHeading}>High</span>
          <span className={styles.infoValue}>
            {Math.round(statInfo.high)}&deg;C
          </span>
        </div>
        <div className={styles.infoGridItem}>
          <span className={styles.infoHeading}>Low</span>
          <span className={styles.infoValue}>
            {Math.round(statInfo.low)}&deg;C
          </span>
        </div>
        <div className={styles.infoGridItem}>
          <span className={styles.infoHeading}>Humidity</span>
          <span className={styles.infoValue}>{statInfo.humidity}%</span>
        </div>
        <div className={styles.infoGridItem}>
          <span className={styles.infoHeading}>Wind</span>
          <span className={styles.infoValue}>{statInfo.wind} m/s</span>
        </div>
      </div>
    </div>
  );
}

export default DetailsStats;
