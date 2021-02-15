const API_KEY = '27329ff2cc8e77ccba89f2cc2e6c8ed4';

const getWeather = async (city) => {
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pl&units=metric&appid=${API_KEY}`);
        return await res.json();
    } catch (e) {
        return new Error(e);
    }
};

const getForecast = async (lat, lon) => {
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=pl&units=metric&exclude=current,minutely,hourly,alerts&appid=${API_KEY}`);
        return await res.json();
    } catch (e) {
        return new Error(e);
    }
};

const getWeatherInfo = async (city) => {
    try {
        const cityInfo = await getWeather(city);
        if (cityInfo.cod === '404') return cityInfo;
        const forecast = await getForecast(cityInfo.coord.lat, cityInfo.coord.lon);
        return { ...cityInfo, ...forecast };
    } catch (e) {
        return new Error(e);
    }
};

export { getWeather, getForecast, getWeatherInfo };
