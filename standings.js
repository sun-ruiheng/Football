const token = '7aa496fb7e9b4a2da942794924e18031';
const baseURL = 'http://api.football-data.org/v2/competitions/';

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
    let urlToFetch = baseURL + league + '/standings';
    let jsonResponse = await fetchResponse(urlToFetch);
    console.log(jsonResponse); //delete later
    let standings = jsonResponse.standings[0].table;
    console.log(standings); //delete later
    let tbody = document.getElementById('standings-body');
    let tlength = standings.length;
    for (let i = 0; i < tlength; i++) {
        let row = document.createElement("tr");
        tbody.appendChild(row);

        // adding click listener to each row for when team is clicked, to bring to team info page
        let thisTeamID = standings[i].team.id;
        row.addEventListener('click', function() {
            getTeam(thisTeamID)
        });

        let td1 = document.createElement('td');
        let data = document.createTextNode(i+1);
        td1.appendChild(data);
        row.appendChild(td1);
        
        let td2 = document.createElement('td');
        let data2 = document.createTextNode(standings[i].team.name);
        td2.appendChild(data2);
        row.appendChild(td2);
        
        let td3 = document.createElement('td');
        let data3 = document.createTextNode(standings[i].playedGames);
        td3.appendChild(data3);
        row.appendChild(td3);
        
        let td4 = document.createElement('td');
        let data4 = document.createTextNode(standings[i].won);
        td4.appendChild(data4);
        row.appendChild(td4);
        
        let td5 = document.createElement('td');
        let data5 = document.createTextNode(standings[i].draw);
        td5.appendChild(data5);
        row.appendChild(td5);
        
        let td6 = document.createElement('td');
        let data6 = document.createTextNode(standings[i].lost);
        td6.appendChild(data6);
        row.appendChild(td6);
        
        let td8 = document.createElement('td');
        let data8 = document.createTextNode(standings[i].goalsFor);
        td8.appendChild(data8);
        row.appendChild(td8);
        
        let td9 = document.createElement('td');
        let data9 = document.createTextNode(standings[i].goalsAgainst);
        td9.appendChild(data9);
        row.appendChild(td9);
        
        let td10 = document.createElement('td');
        let data10 = document.createTextNode(standings[i].goalDifference);
        td10.appendChild(data10);
        row.appendChild(td10);
        
        let td7 = document.createElement('td');
        let data7 = document.createTextNode(standings[i].points);
        td7.appendChild(data7);
        row.appendChild(td7);

    }
    
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const league = urlParams.get('league');
getStandings(league);


// ONCLICKS
const href = './team.html?team=';
const getTeam = (teamID) => {
    location.href = href + teamID;
}