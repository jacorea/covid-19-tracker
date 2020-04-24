import axios from 'axios';

//url of api
const url = "https://covid19.mathdro.id/api"

export const fetchData = async () => {
    try {
        const { data: {confirmed, recovered, deaths, lastUpdate }} = await axios.get(url);
    
        //going to extract only the data that we need to work with
        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        
    }
}

export const fetchedDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`)
        const modifiedData = data.map((dailyData)=>({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))

        return modifiedData;
    } catch (error) {
        
    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries }} = await axios.get(`${url}/countries`)
        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }
}