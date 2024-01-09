const createForecastPanel = (numberOfDays) => {
    const section = document.createElement('section');

    const divAddress = document.createElement('div');
    divAddress.classList.add('address');

    const addressSpan = document.createElement('span');

    const selectSystem = document.createElement('select');
    selectSystem.name = 'system';
    selectSystem.id = 'system';

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

    const currentHeader = document.createElement('header');

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

    const spanCondition1 = document.createElement('span');
    spanCondition1.classList.add('condition');

    const divMore1 = document.createElement('div');
    divMore1.classList.add('more');

    const divFirstColumn1 = document.createElement('div');
    divFirstColumn1.classList.add('first-column');

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

    const divSecondColumn1 = document.createElement('div');
    divSecondColumn1.classList.add('second-column');

    const divUvIndex1 = document.createElement('div');
    divUvIndex1.classList.add('uv-index');

    const uvIndexSpanTitle1 = document.createElement('span');
    uvIndexSpanTitle1.classList.add('title');
    uvIndexSpanTitle1.textContent = 'UV Index';

    const spanLevel1 = document.createElement('span');
    spanLevel1.classList.add('level');

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

    const divDaily = document.createElement('div');
    divDaily.classList.add('daily');

    const dailyHeader = document.createElement('header');
    dailyHeader.classList.add('daily-header');

    const spanDailyTitle = document.createElement('span');
    spanDailyTitle.classList.add('daily-title');
    spanDailyTitle.textContent = 'Daily Weather';

    const divDays = document.createElement('div');
    divDays.classList.add('days');

    for (let index = 0; index < numberOfDays; index++) {
        const divDay = document.createElement('div');
        divDay.classList.add(`day-${index}`);
        divDay.id = index;

        const divDate = document.createElement('div');
        divDate.classList.add('date');

        const dayDiv = document.createElement('div');

        const divIcon = document.createElement('div');
        divIcon.classList.add('icon');

        const img = document.createElement('img');

        const divDayTemperature = document.createElement('div');
        divDayTemperature.classList.add('day-temperature');

        const spanMax = document.createElement('span');
        spanMax.classList.add('max');

        const spanAvg = document.createElement('span');
        spanAvg.classList.add('avg');
    
        const spanMin = document.createElement('span');
        spanMin.classList.add('min');

        divDayTemperature.append(spanMax);
        divDayTemperature.append(spanAvg);
        divDayTemperature.append(spanMin);

        divIcon.append(img);

        dayDiv.append(divIcon);
        dayDiv.append(divDayTemperature);

        divDay.append(divDate);
        divDay.append(dayDiv);

        divDays.append(divDay);
    }

    const divMore2 = document.createElement('div');
    divMore2.classList.add('more');

    const spanCondition2 = document.createElement('span');
    spanCondition2.classList.add('condition');

    const moreDiv = document.createElement('div');

    const divFirstColumn2 = document.createElement('div');
    divFirstColumn2.classList.add('first-column');

    const divMaxWindSpeed = document.createElement('div');
    divMaxWindSpeed.classList.add('max-wind-speed');

    const maxWindSpeedSpanTitle = document.createElement('span');
    maxWindSpeedSpanTitle.classList.add('title');
    maxWindSpeedSpanTitle.textContent = 'Max. Wind Speed';

    const maxWindSpeedSpanValue = document.createElement('span');
    maxWindSpeedSpanValue.classList.add('value');

    const divAverageHumidity = document.createElement('div');
    divAverageHumidity.classList.add('average-humidity');

    const averageHumiditySpanTitle = document.createElement('span');
    averageHumiditySpanTitle.classList.add('title');
    averageHumiditySpanTitle.textContent = 'Avg. Humidity';

    const averageHumiditySpanValue = document.createElement('span');
    averageHumiditySpanValue.classList.add('value');

    const divTotalPrecipitation = document.createElement('div');
    divTotalPrecipitation.classList.add('total-precipitation');

    const totalPrecipitationSpanTitle = document.createElement('span');
    totalPrecipitationSpanTitle.classList.add('title');
    totalPrecipitationSpanTitle.textContent = 'Total Precip.';

    const totalPrecipitationSpanValue = document.createElement('span');
    totalPrecipitationSpanValue.classList.add('value');

    const divSunrise = document.createElement('div');
    divSunrise.classList.add('sunrise');

    const sunriseSpanTitle = document.createElement('span');
    sunriseSpanTitle.classList.add('title');
    sunriseSpanTitle.textContent = 'Sunrise';

    const sunriseSpanValue = document.createElement('span');
    sunriseSpanValue.classList.add('value');

    const divMoonrise = document.createElement('div');
    divMoonrise.classList.add('moonrise');

    const moonriseSpanTitle = document.createElement('span');
    moonriseSpanTitle.classList.add('title');
    moonriseSpanTitle.textContent = 'Moonrise';

    const moonriseSpanValue = document.createElement('span');
    moonriseSpanValue.classList.add('value');

    const divSecondColumn2 = document.createElement('div');
    divSecondColumn2.classList.add('second-column');

    const divUvIndex2 = document.createElement('div');
    divUvIndex2.classList.add('uv-index');

    const uvIndexSpanTitle2 = document.createElement('span');
    uvIndexSpanTitle2.classList.add('title');
    uvIndexSpanTitle2.textContent = 'UV Index';

    const spanLevel2 = document.createElement('span');
    spanLevel2.classList.add('level');

    const divRain = document.createElement('div');
    divRain.classList.add('rain');

    const rainSpanTitle = document.createElement('span');
    rainSpanTitle.classList.add('title');
    rainSpanTitle.textContent = 'Chance of Rain';

    const rainSpanValue = document.createElement('span');
    rainSpanValue.classList.add('value');

    const divSnow = document.createElement('div');
    divSnow.classList.add('snow');

    const snowSpanTitle = document.createElement('span');
    snowSpanTitle.classList.add('title');
    snowSpanTitle.textContent = 'Chance of Snow';

    const snowSpanValue = document.createElement('span');
    snowSpanValue.classList.add('value');

    const divSunset = document.createElement('div');
    divSunset.classList.add('sunset');

    const sunsetSpanTitle = document.createElement('span');
    sunsetSpanTitle.classList.add('title');
    sunsetSpanTitle.textContent = 'Sunset';

    const sunsetSpanValue = document.createElement('span');
    sunsetSpanValue.classList.add('value');

    const divMoonset = document.createElement('div');
    divMoonset.classList.add('moonset');

    const moonsetSpanTitle = document.createElement('span');
    moonsetSpanTitle.classList.add('title');
    moonsetSpanTitle.textContent = 'Moonset';

    const moonsetSpanValue = document.createElement('span');
    moonsetSpanValue.classList.add('value');

    divMoonset.append(moonsetSpanTitle);
    divMoonset.append(moonsetSpanValue);

    divSunset.append(sunsetSpanTitle);
    divSunset.append(sunsetSpanValue);

    divSnow.append(snowSpanTitle);
    divSnow.append(snowSpanValue);

    divRain.append(rainSpanTitle);
    divRain.append(rainSpanValue);

    divUvIndex2.append(uvIndexSpanTitle2);
    divUvIndex2.append(spanLevel2);

    divSecondColumn2.append(divUvIndex2);
    divSecondColumn2.append(divRain);
    divSecondColumn2.append(divSnow);
    divSecondColumn2.append(divSunset);
    divSecondColumn2.append(divMoonset);

    divMoonrise.append(moonriseSpanTitle);
    divMoonrise.append(moonriseSpanValue);

    divSunrise.append(sunriseSpanTitle);
    divSunrise.append(sunriseSpanValue);

    divTotalPrecipitation.append(totalPrecipitationSpanTitle);
    divTotalPrecipitation.append(totalPrecipitationSpanValue);

    divAverageHumidity.append(averageHumiditySpanTitle);
    divAverageHumidity.append(averageHumiditySpanValue);

    divMaxWindSpeed.append(maxWindSpeedSpanTitle);
    divMaxWindSpeed.append(maxWindSpeedSpanValue);

    divFirstColumn2.append(divMaxWindSpeed);
    divFirstColumn2.append(divAverageHumidity);
    divFirstColumn2.append(divTotalPrecipitation);
    divFirstColumn2.append(divSunrise);
    divFirstColumn2.append(divMoonrise);

    moreDiv.append(divFirstColumn2);
    moreDiv.append(divSecondColumn2);

    divMore2.append(spanCondition2);
    divMore2.append(moreDiv);
    
    dailyHeader.append(spanDailyTitle);

    divDaily.append(dailyHeader);
    divDaily.append(divDays);
    divDaily.append(divMore2);

    divVisibility.append(visibilitySpanTitle);
    divVisibility.append(visibilitySpanValue);

    divCloudCover.append(cloudCoverSpanTitle);
    divCloudCover.append(cloudCoverSpanValue);

    divPressure.append(pressureSpanTitle);
    divPressure.append(pressureSpanValue);

    divUvIndex1.append(uvIndexSpanTitle1);
    divUvIndex1.append(spanLevel1);

    divSecondColumn1.append(divUvIndex1);
    divSecondColumn1.append(divPressure);
    divSecondColumn1.append(divCloudCover);
    divSecondColumn1.append(divVisibility);

    divPrecipitation.append(precipitationSpanTitle);
    divPrecipitation.append(precipitationSpanValue);

    divHumidity.append(humiditySpanTitle);
    divHumidity.append(humiditySpanValue);

    divWindGusts.append(windGustsSpanTitle);
    divWindGusts.append(windGustsSpanValue);

    divWind.append(windSpanTitle);
    divWind.append(windSpanValue);

    divFirstColumn1.append(divWind);
    divFirstColumn1.append(divWindGusts);
    divFirstColumn1.append(divHumidity);
    divFirstColumn1.append(divPrecipitation);

    divMore1.append(divFirstColumn1);
    divMore1.append(divSecondColumn1);

    divFeels.append(feelsSpan);
    divFeels.append(feelsSpanValue);

    temperatureDiv.append(divFeels);
    temperatureDiv.append(spanCondition1);

    divTemperature.append(spanCurrentTemperature);
    divTemperature.append(spanUnit);
    divTemperature.append(temperatureDiv);

    divIcon.append(img);

    currentDetailsDiv.append(divIcon);
    currentDetailsDiv.append(divTemperature);

    divCurrentDetails.append(currentDetailsDiv);
    divCurrentDetails.append(divMore1);

    currentHeader.append(spanCurrentTitle);
    currentHeader.append(spanLastUpdated);

    divCurrent.append(currentHeader);
    divCurrent.append(divCurrentDetails);

    divForecast.append(divCurrent);
    divForecast.append(divDaily);

    selectSystem.append(optionMetric);
    selectSystem.append(optionImperial);

    divAddress.append(addressSpan);
    divAddress.append(selectSystem);

    section.append(divAddress);
    section.append(divForecast);

    const main = document.querySelector('main');

    main.append(section);
};

const setUvIndexCategory = (index) => {
    if (index >= 0 && index <= 2) return 'Low';
    if (index >= 3 && index <= 5) return 'Moderate';
    if (index >= 6 && index <= 7) return 'High';
    if (index >= 8 && index <= 10) return 'Very High';
    if (index >= 11) return 'Extreme';
};

const displayDayDetails = (forecast, index) => {
    const condition = document.querySelector('.daily .condition');
    const maxWindSpeed = document.querySelector('.max-wind-speed > .value');
    const averageHumidity = document.querySelector('.average-humidity > .value');
    const totalPrecipitation = document.querySelector('.total-precipitation > .value');
    const sunrise = document.querySelector('.sunrise > .value');
    const moonrise = document.querySelector('.moonrise > .value');
    const uvIndex = document.querySelector('.daily .uv-index .level');
    const chanceOfRain = document.querySelector('.rain > .value');
    const chanceOfSnow = document.querySelector('.snow > .value');
    const sunset = document.querySelector('.sunset > .value');
    const moonset = document.querySelector('.moonset > .value');

    const days = document.querySelectorAll('.days > div');

    for (let day of days) {
        if (day.className.includes('selected')) {
            day.classList.remove('selected');
        }
    }

    days[index].classList.add('selected');

    const dailyForecast = forecast.daily;

    condition.textContent = dailyForecast[index].condition;
    averageHumidity.textContent = `${dailyForecast[index].avgHumidity}%`;
    sunrise.textContent = dailyForecast[index].sunrise;
    moonrise.textContent = dailyForecast[index].moonrise;
    uvIndex.textContent = `${dailyForecast[index].uvIndex} ${setUvIndexCategory(dailyForecast[index].uvIndex)}`;
    chanceOfRain.textContent = `${dailyForecast[index].chanceOfRain}%`;
    chanceOfSnow.textContent = `${dailyForecast[index].chanceOfSnow}%`;
    sunset.textContent = dailyForecast[index].sunset;
    moonset.textContent = dailyForecast[index].moonset;

    const system = document.querySelector('#system');

    const selectedSystem = system[system.selectedIndex].value;

    if (selectedSystem === 'metric') {
        maxWindSpeed.textContent = `${Math.round(dailyForecast[index].maxWindSpeedKph)} km/h`;
        totalPrecipitation.textContent = `${dailyForecast[index].totalPrecipitationMm} mm`;
    } else {
        maxWindSpeed.textContent = `${Math.round(dailyForecast[index].maxWindSpeedMph)} mi/h`;
        totalPrecipitation.textContent = `${dailyForecast[index].totalPrecipitationIn} in`;
    }
};

const displayForecast = (forecast) => {
    const address = document.querySelector('.address > span');
    const lastUpdated = document.querySelector('.last-updated');
    const currentIcon = document.querySelector('.current-details .icon > img');
    const currentTemperature = document.querySelector('.current-temperature');
    const unit = document.querySelector('.unit');
    const currentFeelsLike = document.querySelector('.feels .value');
    const currentCondition = document.querySelector('.temperature .condition');
    const currentWind = document.querySelector('.wind > .value');
    const currentWindGusts = document.querySelector('.wind-gusts > .value');
    const currentHumidity = document.querySelector('.humidity > .value');
    const currentPrecipitation = document.querySelector('.precipitation > .value');
    const currentUvIndex = document.querySelector('.current-details .uv-index .level');
    const currentPressure = document.querySelector('.pressure > .value');
    const currentCloudCover = document.querySelector('.cloud-cover > .value');
    const currentVisibility = document.querySelector('.visibility > .value');
    const dailyDates = document.querySelectorAll('.days .date');
    const dailyIcons = document.querySelectorAll('.days .icon > img');
    const dailyMaxTemperatures = document.querySelectorAll('.days .day-temperature > .max');
    const dailyAvgTemperatures = document.querySelectorAll('.days .day-temperature > .avg');
    const dailyMinTemperatures = document.querySelectorAll('.days .day-temperature > .min');

    address.textContent = forecast.address;
    lastUpdated.textContent = forecast.current.lastUpdated;
    currentIcon.src = `https:${forecast.current.icon}`;
    currentCondition.textContent = forecast.current.condition;
    currentHumidity.textContent = `${forecast.current.humidity}%`;
    currentUvIndex.textContent = `${forecast.current.uvIndex} ${setUvIndexCategory(forecast.current.uvIndex)}`;
    currentCloudCover.textContent = `${forecast.current.cloudCover}%`;

    const dailyForecast = forecast.daily;

    dailyForecast.forEach((day, index) => {
        dailyDates[index].textContent = day.date.slice(day.date.indexOf('-') + 1);
        dailyIcons[index].src = `https:${day.icon}`;
    });

    const system = document.querySelector('#system');

    const selectedSystem = system[system.selectedIndex].value;

    if (selectedSystem === 'metric') {
        currentTemperature.textContent = Math.round(forecast.current.temperatureC);
        unit.textContent = '℃';
        currentFeelsLike.textContent = `${Math.round(forecast.current.feelsLikeC)}℃`;
        currentWind.textContent = `${forecast.current.windDir} ${Math.round(forecast.current.windKph)} km/h`;
        currentWindGusts.textContent = `${Math.round(forecast.current.windGustKph)} km/h`;
        currentPrecipitation.textContent = `${forecast.current.precipitationMm} mm`;
        currentPressure.textContent = `${forecast.current.pressureMb} mb`;
        currentVisibility.textContent = `${forecast.current.visibilityKm} km`;

        dailyForecast.forEach((day, index) => {
            dailyMaxTemperatures[index].textContent = `${Math.round(day.maxTemperatureC)}°`;
            dailyAvgTemperatures[index].textContent = `${Math.round(day.avgTemperatureC)}°`;
            dailyMinTemperatures[index].textContent = `${Math.round(day.minTemperatureC)}°`;
        });
    } else {
        currentTemperature.textContent = Math.round(forecast.current.temperatureF);
        unit.textContent = '℉';
        currentFeelsLike.textContent = `${Math.round(forecast.current.feelsLikeF)}℉`;
        currentWind.textContent = `${forecast.current.windDir} ${Math.round(forecast.current.windMph)} mi/h`;
        currentWindGusts.textContent = `${Math.round(forecast.current.windGustMph)} mi/h`;
        currentPrecipitation.textContent = `${forecast.current.precipitationIn} in`;
        currentPressure.textContent = `${Math.round(forecast.current.pressureIn)} in`;
        currentVisibility.textContent = `${forecast.current.visibilityMi} mi`;

        dailyForecast.forEach((day, index) => {
            dailyMaxTemperatures[index].textContent = `${Math.round(day.maxTemperatureF)}°`;
            dailyAvgTemperatures[index].textContent = `${Math.round(day.avgTemperatureF)}°`;
            dailyMinTemperatures[index].textContent = `${Math.round(day.minTemperatureF)}°`;
        });
    }
};

const getForecast = async (location) => {
    const KEY = 'ad9dc8bf748642ca80d133456230212';

    let response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${location}&days=3`, 
        { mode: 'cors' }
    );
    response = await response.json();

    let address = '';
    if (response.location.region) {
        address = `${response.location.name}, ${response.location.region}, ${response.location.country}`;
    } else {
        address = `${response.location.name}, ${response.location.country}`;
    }

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
            maxWindSpeedKph: day.day.maxwind_kph,
            maxWindSpeedMph: day.day.maxwind_mph,
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

    createForecastPanel(days.length);

    return {
        address,
        current,
        daily
    };
};