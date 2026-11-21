import axios from 'axios';

export default class GithubGraphQL {
    async getContributions(){
        try{
            const response = (await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/github/contributions`)).data;
            const contribution = {
                years: [],
                data: {},
                colors: response.user.contributionsCollection.contributionCalendar.colors,
                totalContributions: response.user.contributionsCollection.contributionCalendar.totalContributions
            };
            
            for(const week of response.user.contributionsCollection.contributionCalendar.weeks){
                for(const day of week.contributionDays){
                    const year = day.date.split("-")[0];
                    if(!contribution.years.includes(year)){
                        contribution.years.push(year);
                        contribution.data['y'+year] = [];
                    }
                    contribution.data['y'+year].push(day);
                }
            }
            
            contribution.years.push("Last Year");
            return contribution;
        }catch(error){
            console.log(error);
            return "An error occured, please try again later.";
        }
    }
}
