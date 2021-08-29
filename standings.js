
const token = '7aa496fb7e9b4a2da942794924e18031';
const baseURL = 'http://api.football-data.org/v2/';
var teamCount = 0;

const fetchResponse = async (url) => {
    try {
        const response = await fetch(url, {
            headers: {
                'X-Auth-Token': token
            }
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        } 
    } catch(e) {
        console.log(e);
    }
};

const getStandings = async (league) => {
    let urlToFetch = baseURL + 'competitions/' + league;
    let jsonResponse = fetchResponse(urlToFetch);
    console.log(jsonResponse);

}



// ASSIGNING VAR TO DOMS


// ONCLICKS