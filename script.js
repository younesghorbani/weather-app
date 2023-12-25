const createForecastPanel = () => {
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

    const currentHeader = document.createElement('header');

    const spanCurrentTitle = document.createElement('span');
    spanCurrentTitle.classList.add('current-title');
    spanCurrentTitle.textContent = 'Current Weather';

    const spanLastUpdated = document.createElement('span');
    spanLastUpdated.classList.add('last-updated');

    const divCurrentDetails = document.createElement('div');
    divCurrentDetails.classList.add('current-details');

    const currentDetailsDiv = document.createElement('div');

    const divIcon1 = document.createElement('div');
    divIcon1.classList.add('icon');

    const img1 = document.createElement('img');

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

    const uvIndexDiv1 = document.createElement('div');

    const spanLevel1 = document.createElement('span');
    spanLevel1.classList.add('level');

    const spanCategory1 = document.createElement('span');
    spanCategory1.classList.add('category');
    spanCategory1.textContent = '';

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

    const dailyDiv = document.createElement('div');

    const divDayOne = document.createElement('div');
    divDayOne.classList.add('day-one');

    const divDate1 = document.createElement('div');
    divDate1.classList.add('date');

    const dayOneDiv = document.createElement('div');

    const divIcon2 = document.createElement('div');
    divIcon2.classList.add('icon');

    const img2 = document.createElement('img');

    const divDayTemperature1 = document.createElement('div');
    divDayTemperature1.classList.add('day-temperature');

    const spanMax1 = document.createElement('span');
    spanMax1.classList.add('max');

    const spanAvg1 = document.createElement('span');
    spanAvg1.classList.add('avg');

    const spanMin1 = document.createElement('span');
    spanMin1.classList.add('min');

    const divDayTwo = document.createElement('div');
    divDayTwo.classList.add('day-two');

    const divDate2 = document.createElement('div');
    divDate2.classList.add('date');

    const dayTwoDiv = document.createElement('div');

    const divIcon3 = document.createElement('div');
    divIcon3.classList.add('icon');

    const img3 = document.createElement('img');

    const divDayTemperature2 = document.createElement('div');
    divDayTemperature2.classList.add('day-temperature');

    const spanMax2 = document.createElement('span');
    spanMax2.classList.add('max');

    const spanAvg2 = document.createElement('span');
    spanAvg2.classList.add('avg');

    const spanMin2 = document.createElement('span');
    spanMin2.classList.add('min');

    const divDayThree = document.createElement('div');
    divDayThree.classList.add('day-three');

    const divDate3 = document.createElement('div');
    divDate3.classList.add('date');

    const dayThreeDiv = document.createElement('div');

    const divIcon4 = document.createElement('div');
    divIcon4.classList.add('icon');

    const img4 = document.createElement('img');

    const divDayTemperature3 = document.createElement('div');
    divDayTemperature3.classList.add('day-temperature');

    const spanMax3 = document.createElement('span');
    spanMax3.classList.add('max');

    const spanAvg3 = document.createElement('span');
    spanAvg3.classList.add('avg');

    const spanMin3 = document.createElement('span');
    spanMin3.classList.add('min');

    const divMore2 = document.createElement('div');
    divMore2.classList.add('more');

    const spanCondition2 = document.createElement('span');
    spanCondition2.classList.add('condition');

    const moreDiv = document.createElement('div');

    const divFirstColumn2 = document.createElement('div');
    divFirstColumn2.classList.add('first-column');

    const divMaxWind = document.createElement('div');
    divMaxWind.classList.add('max-wind');

    const maxWindSpanTitle = document.createElement('span');
    maxWindSpanTitle.classList.add('title');
    maxWindSpanTitle.textContent = 'Max. Wind Speed';

    const maxWindSpanValue = document.createElement('span');
    maxWindSpanValue.classList.add('value');

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

    const uvIndexDiv2 = document.createElement('div');

    const spanLevel2 = document.createElement('span');
    spanLevel2.classList.add('level');
    
    const spanCategory2 = document.createElement('span');
    spanCategory2.classList.add('category');

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

    uvIndexDiv2.append(spanLevel2);
    uvIndexDiv2.append(spanCategory2);

    divUvIndex2.append(uvIndexSpanTitle2);
    divUvIndex2.append(uvIndexDiv2);

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

    divMaxWind.append(maxWindSpanTitle);
    divMaxWind.append(maxWindSpanValue);

    divFirstColumn2.append(divMaxWind);
    divFirstColumn2.append(divAverageHumidity);
    divFirstColumn2.append(divTotalPrecipitation);
    divFirstColumn2.append(divSunrise);
    divFirstColumn2.append(divMoonrise);

    moreDiv.append(divFirstColumn2);
    moreDiv.append(divSecondColumn2);

    divMore2.append(spanCondition2);
    divMore2.append(moreDiv);

    divDayTemperature3.append(spanMax3);
    divDayTemperature3.append(spanAvg3);
    divDayTemperature3.append(spanMin3);

    divIcon4.append(img4);

    dayThreeDiv.append(divIcon4);
    dayThreeDiv.append(divDayTemperature3);

    divDayThree.append(divDate3);
    divDayThree.append(dayThreeDiv);

    divDayTemperature2.append(spanMax2);
    divDayTemperature2.append(spanAvg2);
    divDayTemperature2.append(spanMin2);

    divIcon3.append(img3);

    dayTwoDiv.append(divIcon3);
    dayTwoDiv.append(divDayTemperature2);

    divDayTwo.append(divDate2);
    divDayTwo.append(dayTwoDiv);

    divDayTemperature1.append(spanMax1);
    divDayTemperature1.append(spanAvg1);
    divDayTemperature1.append(spanMin1);

    divIcon2.append(img2);

    dayOneDiv.append(divIcon2);
    dayOneDiv.append(divDayTemperature1);

    divDayOne.append(divDate1);
    divDayOne.append(dayOneDiv);

    dailyDiv.append(divDayOne);
    dailyDiv.append(divDayTwo);
    dailyDiv.append(divDayThree);

    dailyHeader.append(spanDailyTitle);

    divDaily.append(dailyHeader);
    divDaily.append(dailyDiv);
    divDaily.append(divMore2);

    divVisibility.append(visibilitySpanTitle);
    divVisibility.append(visibilitySpanValue);

    divCloudCover.append(cloudCoverSpanTitle);
    divCloudCover.append(cloudCoverSpanValue);

    divPressure.append(pressureSpanTitle);
    divPressure.append(pressureSpanValue);

    uvIndexDiv1.append(spanLevel1);
    uvIndexDiv1.append(spanCategory1);

    divUvIndex1.append(uvIndexSpanTitle1);
    divUvIndex1.append(uvIndexDiv1);

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

    divIcon1.append(img1);

    currentDetailsDiv.append(divIcon1);
    currentDetailsDiv.append(divTemperature);

    divCurrentDetails.append(currentDetailsDiv);
    divCurrentDetails.append(divMore1);

    currentHeader.append(spanCurrentTitle);
    currentHeader.append(spanLastUpdated);

    divCurrent.append(currentHeader);
    divCurrent.append(divCurrentDetails);

    divForecast.append(divCurrent);
    divForecast.append(divDaily);

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