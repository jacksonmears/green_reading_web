import { useState, useEffect } from "react";
import "./css/Header.css";
import rainCloud from "../assets/images/icons8-rain-48.png";
import cloud from "../assets/images/icons8-cloud-48.png";
import sunCloud from "../assets/images/icons8-sun-behind-large-cloud-48.png";
import sun from "../assets/images/icons8-sunny-48.png";
import lowWind from "../assets/images/icons8-wind-50.png";
import { fetchWeatherApi } from "openmeteo";
import {StyleSheet} from "@react-pdf/renderer";
import logo from "../assets/images/logo-transparent.png";

const params = {
    latitude: 41.6448512,
    longitude: -93.7230336,
    daily: [
        "temperature_2m_max",
        "temperature_2m_min",
        "precipitation_probability_max",
        "wind_speed_10m_max",
        "wind_gusts_10m_max",
        "cloud_cover_mean",
        "wind_direction_10m_dominant",
    ],
    current: ["temperature_2m", "precipitation"],
    timezone: "America/Chicago",
    wind_speed_unit: "mph",
    temperature_unit: "fahrenheit",
    precipitation_unit: "inch",
};
const url = "https://api.open-meteo.com/v1/forecast";


interface WeatherData {
    daily: {
        time: Date[];
        temperature2mMax: Float32Array;
        temperature2mMin: Float32Array;
        precipitationProbabilityMax: Float32Array;
        windSpeed10mMax: Float32Array;
        windGusts10mMax: Float32Array;
        cloudCoverMean: Float32Array;
        windDirection10mDominant: Float32Array;
    };
}



function Footer() {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    const windDirectionCalc = (dir: number) => {
        const res: string[] = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
        return res[Math.round(dir / 45) % 8];
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responses = await fetchWeatherApi(url, params);
                const response = responses[0];
                const utcOffsetSeconds = response.utcOffsetSeconds();
                const daily = response.daily()!;

                const daysCount = Math.floor(
                    (Number(daily.timeEnd()) - Number(daily.time())) / daily.interval()
                );
                const dates: Date[] = Array.from({ length: daysCount }).map((_, i) =>
                    new Date(
                        (Number(daily.time()) + i * daily.interval() + utcOffsetSeconds) * 1000
                    )
                );


                setWeatherData({
                    daily: {
                        time: dates,
                        temperature2mMax: daily.variables(0)!.valuesArray()!,
                        temperature2mMin: daily.variables(1)!.valuesArray()!,
                        precipitationProbabilityMax: daily.variables(2)!.valuesArray()!,
                        windSpeed10mMax: daily.variables(3)!.valuesArray()!,
                        windGusts10mMax: daily.variables(4)!.valuesArray()!,
                        cloudCoverMean: daily.variables(5)!.valuesArray()!,
                        windDirection10mDominant: daily.variables(6)!.valuesArray()!,
                    },
                });
            } catch (err) {
                console.error("Error fetching weather data:", err);
            }
        };

        fetchData().catch();
    }, []);

    if (!weatherData) {
        return null;
    }

    return (
        <div style={{ backgroundColor: "black" }}>
            <div style={styles.FooterContainer}>
                <div style={styles.boxContainers}>
                    <strong style={styles.boxText}>VISIT US</strong>
                    <p style={styles.boxText}>Beaver Creek Golf Club</p>
                    <p style={styles.boxText}>11200 NW Towner Dr</p>
                    <p style={styles.boxText}>Grimes, IA 50111</p>
                </div>

                <div style={styles.boxContainers}>
                    <img src={logo} alt="logo"
                         style={{
                             height: 300,
                             width: 300,
                             objectFit: 'contain',
                             marginTop: '10px',
                    }}/>
                </div>

                <div style={styles.boxContainers}>
                    <div style={styles.weatherWeekContainer}>
                        {weatherData.daily.time.slice(1).map((date: Date, i: number) => (
                            <div key={i} style={styles.weatherDayContainer}>
                                {i === 0 ? (
                                    <strong style={styles.whiteColor}>Today</strong>
                                ) : (
                                    <strong style={styles.whiteColor}>
                                        {date.toDateString().slice(0, 3)}
                                    </strong>
                                )}

                                <p style={styles.whiteColor}>
                                    {Math.floor(weatherData.daily.temperature2mMax[i])}°F
                                </p>
                                <p style={styles.whiteColor}>
                                    {Math.floor(weatherData.daily.temperature2mMin[i])}°F
                                </p>

                                {weatherData.daily.precipitationProbabilityMax[i] >= 35 ? (
                                    <img
                                        src={rainCloud}
                                        alt="raining"
                                        style={styles.weatherImage}
                                    />
                                ) : Math.floor(weatherData.daily.cloudCoverMean[i]) >= 50 ? (
                                    <img src={cloud} alt="cloudy" style={styles.weatherImage} />
                                ) : Math.floor(weatherData.daily.cloudCoverMean[i]) >= 35 ? (
                                    <img
                                        src={sunCloud}
                                        alt="sun and cloud"
                                        style={styles.weatherImage}
                                    />
                                ) : (
                                    <img src={sun} alt="sunny" style={styles.weatherImage} />
                                )}
                                <br />

                                {Array.from({
                                    length: Math.floor(
                                        weatherData.daily.windSpeed10mMax[i] / 5
                                    ),
                                }).map((_, index) => (
                                    <img
                                        key={index}
                                        src={lowWind}
                                        alt="low wind"
                                        style={styles.windImage}
                                    />
                                ))}
                                <br />

                                <p style={styles.whiteColor}>
                                    Wind {Math.floor(weatherData.daily.windSpeed10mMax[i])} mph
                                </p>
                                <p style={styles.whiteColor}>
                                    Gusts {Math.floor(weatherData.daily.windGusts10mMax[i])} mph
                                </p>
                                <p style={styles.whiteColor}>
                                    {windDirectionCalc(
                                        weatherData.daily.windDirection10mDominant[i]
                                    )}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;

const styles = StyleSheet.create({
    FooterContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: "black",
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
        // boxShadow: 'inset 0px 10px 30px 15px rgba(250, 250, 250, 0.4)',
        boxShadow: 'inset 0px 0px 50px 25px rgba(250, 250, 250, 0.4)',
        // borderTop: '1px solid white',
        // borderRadius: 20,
        // borderWidth: 1,
        // borderColor: 'white',
        // borderStyle: "solid",
    },
    boxContainers: {
        height: '50%',
        width: "25%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },

    boxText: {
        color: 'white',
    },
    weatherWeekContainer: {
        marginLeft: "20px",
        display: "flex",
        flexDirection: 'row',
        marginTop: '10px',
        marginBottom: '10px',
    },
    weatherDayContainer: {
        marginRight: "20px"
    },
    weatherImage: {
        height: "40px",
        width: "40px"
    },
    windImage: {
        height: "20px",
        width: "20px"
    },
    whiteColor: {
        color: 'white',
        margin: "0px",
        padding: "0px",
        fontSize: "12px",
    },
})
