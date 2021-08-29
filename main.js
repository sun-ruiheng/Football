const token = '7aa496fb7e9b4a2da942794924e18031';
const baseURL = 'http://api.football-data.org/v2/';

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
    console.log('BOOOOOOOOOOOOOOOO')

}



// ONCLICKS
if (document.querySelector('#epl')) {
    const EPL = document.getElementById('epl');
    EPL.addEventListener('click', function(event) {
        
        location.replace('standings.html');
        getStandings('2021');
        event.preventDefault();
    }, false);
    };
if (document.querySelector('#bundesliga')) {
    const bundesliga = document.getElementById('bundesliga');
    bundesliga.addEventListener('click', function(event) {
        getStandings('2088');
        location.replace('standings.html');
        event.preventDefault();
    }, false);
    };
if (document.querySelector('#laliga')) {
    const laliga = document.getElementById('laliga');
    laliga.addEventListener('click', function(event) {
        getStandings('2224');
        location.replace('standings.html');
        event.preventDefault();
    }, false);
    };
