import axios from 'axios';

const API = process.env.REACT_APP_BACKEND_URL;

export default class GithubGraphQL {
    async getYears(){
        return (await axios.get(`${API}/api/github/years`)).data.years;
    }

    async getYear(year){
        return (await axios.get(`${API}/api/github/contributions`, { params: { year } })).data;
    }
}
