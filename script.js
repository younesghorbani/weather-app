const createCurrentForecastPanel = () => {
    const section = document.createElement('section');

    const divLocation = document.createElement('div');
    divLocation.classList.add('location');

    const locationSpan = document.createElement('span');

    const selectUnit = document.createElement('select');
    selectUnit.name = 'unit';
    selectUnit.id = 'unit';

    const optionMetric = document.createElement('option');
    optionMetric.value = 'metric';
    optionMetric.textContent = '℃';

    const optionImperial = document.createElement('option');
    optionImperial.value = 'imperial';
    optionImperial.textContent = '℉';

    const divForecast = document.createElement('div');
    divForecast.classList.add('forecast');

    const divCurrent = document.createElement('div');
    divCurrent.classList.add('current');

    const header = document.createElement('header');

    const spanCurrentTitle = document.createElement('span');
    spanCurrentTitle.classList.add('current-title');
    spanCurrentTitle.textContent = 'Current Weather';

    const spanLastUpdated = document.createElement('span');
    spanLastUpdated.classList.add('last-updated');

    const divCurrentDetails = document.createElement('div');
    divCurrentDetails.classList.add('current-details');

    const currentDetailsDiv = document.createElement('div');

    const divIcon = document.createElement('div');
    divIcon.classList.add('icon');

    const img = document.createElement('img');

    const divTemperature = document.createElement('div');
    divTemperature.classList.add('temperature');

    const spanCurrentTemperature = document.createElement('span');
    spanCurrentTemperature.classList.add('current-temperature');

    const spanUnit = document.createElement('span');
    spanUnit.classList.add('unit');

    const temperatureDiv = document.createElement('div');

    const divFeels = document.createElement('div');
    divFeels.classList.add('feels');

    const feelsSpan = document.createElement('span');
    feelsSpan.textContent = 'Feels like ';

    const feelsSpanValue = document.createElement('span');
    feelsSpanValue.classList.add('value');

    const spanCondition = document.createElement('span');
    spanCondition.classList.add('condition');

    const divMore = document.createElement('div');
    divMore.classList.add('more');

    const divFirstColumn = document.createElement('div');
    divFirstColumn.classList.add('first-column');

    const divWind = document.createElement('div');
    divWind.classList.add('wind');

    const windSpanTitle = document.createElement('span');
    windSpanTitle.classList.add('title');
    windSpanTitle.textContent = 'Wind';

    const windSpanValue = document.createElement('span');
    windSpanValue.classList.add('value');

    const divWindGusts = document.createElement('div');
    divWindGusts.classList.add('wind-gusts');

    const windGustsSpanTitle = document.createElement('span');
    windGustsSpanTitle.classList.add('title');
    windGustsSpanTitle.textContent = 'Wind Gusts';

    const windGustsSpanValue = document.createElement('span');
    windGustsSpanValue.classList.add('value');

    const divHumidity = document.createElement('div');
    divHumidity.classList.add('humidity');

    const humiditySpanTitle = document.createElement('span');
    humiditySpanTitle.classList.add('title');
    humiditySpanTitle.textContent = 'Humidity';

    const humiditySpanValue = document.createElement('span');
    humiditySpanValue.classList.add('value');

    const divPrecipitation = document.createElement('div');
    divPrecipitation.classList.add('precipitation');

    const precipitationSpanTitle = document.createElement('span');
    precipitationSpanTitle.classList.add('title');
    precipitationSpanTitle.textContent = 'Precipitation';

    const precipitationSpanValue = document.createElement('span');
    precipitationSpanValue.classList.add('value');

    const divSecondColumn = document.createElement('div');
    divSecondColumn.classList.add('second-column');

    const divUvIndex = document.createElement('div');
    divUvIndex.classList.add('uv-index');

    const uvIndexSpanTitle = document.createElement('span');
    uvIndexSpanTitle.classList.add('title');
    uvIndexSpanTitle.textContent = 'UV Index';

    const uvIndexDiv = document.createElement('div');

    const spanLevel = document.createElement('span');
    spanLevel.classList.add('level');

    const spanCategory = document.createElement('span');
    spanCategory.classList.add('category');
    spanCategory.textContent = '';

    const divPressure = document.createElement('div');
    divPressure.classList.add('pressure');

    const pressureSpanTitle = document.createElement('span');
    pressureSpanTitle.classList.add('title');
    pressureSpanTitle.textContent = 'Pressure';

    const pressureSpanValue = document.createElement('span');
    pressureSpanValue.classList.add('value');

    const divCloudCover = document.createElement('div');
    divCloudCover.classList.add('cloud-cover');

    const cloudCoverSpanTitle = document.createElement('span');
    cloudCoverSpanTitle.classList.add('title');
    cloudCoverSpanTitle.textContent = 'Cloud Cover';

    const cloudCoverSpanValue = document.createElement('span');
    cloudCoverSpanValue.classList.add('value');

    const divVisibility = document.createElement('div');
    divVisibility.classList.add('visibility');

    const visibilitySpanTitle = document.createElement('span');
    visibilitySpanTitle.classList.add('title');
    visibilitySpanTitle.textContent = 'Visibility';

    const visibilitySpanValue = document.createElement('span');
    visibilitySpanValue.classList.add('value');

    divVisibility.append(visibilitySpanTitle);
    divVisibility.append(visibilitySpanValue);

    divCloudCover.append(cloudCoverSpanTitle);
    divCloudCover.append(cloudCoverSpanValue);

    divPressure.append(pressureSpanTitle);
    divPressure.append(pressureSpanValue);

    uvIndexDiv.append(spanLevel);
    uvIndexDiv.append(spanCategory);

    divUvIndex.append(uvIndexSpanTitle);
    divUvIndex.append(uvIndexDiv);

    divSecondColumn.append(divUvIndex);
    divSecondColumn.append(divPressure);
    divSecondColumn.append(divCloudCover);
    divSecondColumn.append(divVisibility);

    divPrecipitation.append(precipitationSpanTitle);
    divPrecipitation.append(precipitationSpanValue);

    divHumidity.append(humiditySpanTitle);
    divHumidity.append(humiditySpanValue);

    divWindGusts.append(windGustsSpanTitle);
    divWindGusts.append(windGustsSpanValue);

    divWind.append(windSpanTitle);
    divWind.append(windSpanValue);

    divFirstColumn.append(divWind);
    divFirstColumn.append(divWindGusts);
    divFirstColumn.append(divHumidity);
    divFirstColumn.append(divPrecipitation);

    divMore.append(divFirstColumn);
    divMore.append(divSecondColumn);

    divFeels.append(feelsSpan);
    divFeels.append(feelsSpanValue);

    temperatureDiv.append(divFeels);
    temperatureDiv.append(spanCondition);

    divTemperature.append(spanCurrentTemperature);
    divTemperature.append(spanUnit);
    divTemperature.append(temperatureDiv);

    divIcon.append(img);

    currentDetailsDiv.append(divIcon);
    currentDetailsDiv.append(divTemperature);

    divCurrentDetails.append(currentDetailsDiv);
    divCurrentDetails.append(divMore);

    header.append(spanCurrentTitle);
    header.append(spanLastUpdated);

    divCurrent.append(header);
    divCurrent.append(divCurrentDetails);

    divForecast.append(divCurrent);

    selectUnit.append(optionMetric);
    selectUnit.append(optionImperial);

    divLocation.append(locationSpan);
    divLocation.append(selectUnit);

    section.append(divLocation);
    section.append(divForecast);

    const main = document.querySelector('main');

    main.append(section);
};

const getForecast = async (location) => {
    const KEY = 'ad9dc8bf748642ca80d133456230212';

    let response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${location}&days=3`, 
        { mode: 'cors' }
    );
    response = await response.json();

    const address = `${response.location.name}, ${response.location.region}, ${response.location.country}`;

    const current = {
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
        precipitationMm: response.current.precip_mm,
        precipitationIn: response.current.precip_in,
        uvIndex: response.current.uv,
        pressureMb: response.current.pressure_mb,
        pressureIn: response.current.pressure_in,
        cloudCover: response.current.cloud,
        visibilityKm: response.current.vis_km,
        visibilityMi: response.current.vis_miles
    };

    const days = response.forecast.forecastday;
    const daily = [];

    days.forEach(day => {
        daily.push({
            date: day.date,
            icon: day.day.condition.icon,
            maxTemperatureC: day.day.maxtemp_c,
            maxTemperatureF: day.day.maxtemp_f,
            avgTemperatureC: day.day.avgtemp_c,
            avgTemperatureF: day.day.avgtemp_f,
            minTemperatureC: day.day.mintemp_c,
            minTemperatureF: day.day.mintemp_f,
            condition: day.day.condition.text,
            windKph: day.day.maxwind_kph,
            windMph: day.day.maxwind_mph,
            avgHumidity: day.day.avghumidity,
            totalPrecipitationMm: day.day.totalprecip_mm,
            totalPrecipitationIn: day.day.totalprecip_in,
            sunrise: day.astro.sunrise,
            moonrise: day.astro.moonrise,
            uvIndex: day.day.uv,
            chanceOfRain: day.day.daily_chance_of_rain,
            chanceOfSnow: day.day.daily_chance_of_snow,
            sunset: day.astro.sunset,
            moonset: day.astro.moonset
        });
    });

    return {
        address,
        current,
        daily
    };
};