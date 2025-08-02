import axios from 'axios';

export default class GithubGraphQL {
    async getContributions(){
        const options = {
            method: "POST",
            url: "https://api.github.com/graphql",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' +process.env.REACT_APP_GITHUBGRAPHQL_TOKEN
            },
            data: {
                variables: {
                    'username': 'AylexCODE'
                },
                query: `
                    query($username:String!) {
                        user(login:$username){
                            contributionsCollection {
                              contributionCalendar {
                                totalContributions
                                colors
                                months {
                                  name
                                }
                                weeks {
                                  contributionDays {
                                    contributionCount
                                    contributionLevel
                                    color
                                    date
                                    weekday
                                  }
                                }
                              }
                            }
                        }
                        rateLimit {
                            limit
                            remaining
                            used
                            resetAt
                            cost
                        }
                    }
                `
            }
        }
        
        try{
            const response = (await axios(options)).data.data;
            console.info(response.rateLimit);
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
