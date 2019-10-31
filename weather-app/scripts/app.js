const cityForm = document.querySelector('form');
const card = document.querySelector('.card')
const details = document.querySelector('.details')

const updateUI = data => {
    
    // destructure properties from object
    const { cityDets, weather } = data;
    console.log(cityDets, weather)

    details.innerHTML = `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
        </div>
    `

    if(card.classList.contains('d-none')) {
        card.classList.remove('d-none')
    }
}

const updateCity = async (city) => {

    const cityDets = await getCity(city)
    const weather = await getWeather(cityDets.Key)

    return { cityDets, weather }
}

cityForm.addEventListener('submit', e => {
    e.preventDefault();

    // get city update
    const city = cityForm.city.value.trim();
    cityForm.reset();
    
    // update ui with new city
    updateCity(city)
        .then( data => updateUI(data))
        .catch( err => console.log(err))
})