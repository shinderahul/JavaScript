const key = 'zrtMBuapi1hIWaPqkfTAQwhrdRe5e3nM';

// get city information

const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`

    const response = await fetch(base + query)
    const data =  await response.json()

    return data[0]
}

getCity('new york')
    .then(data => { console.log('data', data)})
    .catch(err => { console.log('err', err)})