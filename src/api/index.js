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