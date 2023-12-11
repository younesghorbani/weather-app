const key = 'ad9dc8bf748642ca80d133456230212';

const getForecast = async (location) => {
    let response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=3`, 
        { mode: 'cors' }
    );
    response = await response.json();

    return {
        location: {
            name: response.location.name,
            region: response.location.region,
            country: response.location.country
        },
        current: {
            lastUpdated: response.current.last_updated,
            icon: response.current.condition.icon,
            temperatureC: response.current.temp_c,
            temperatureF: response.current.temp_f,
            feelsLikeC: response.current.feelslike_c,
            feelsLikeF: response.current.feelslike_f,
            condition: response.current.condition.text,
            windDir: response.current.wind_dir,
            windKph: response.current.wind_kph,
            windMph: response.current.wind_mph,
            windGustKph: response.current.gust_kph,
            windGustMph: response.current.gust_mph,
            humidity: response.current.humidity,
            precipitationIn: response.current.precip_in,
            precipitationMm: response.current.precip_mm,
            uvIndex: response.current.uv,
            pressureMb: response.current.pressure_mb,
            pressureIn: response.current.pressure_in,
            cloudCover: response.current.cloud,
            visibilityKm: response.current.vis_km,
            visibilityMi: response.current.vis_miles
        },
    };
};