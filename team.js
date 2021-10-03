const token = '7aa496fb7e9b4a2da942794924e18031';
const baseURL = 'http://api.football-data.org/v2/teams/';
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const teamID = urlParams.get('team');

// database of team pictures (the large one that takes up half the screen)
let teamPictures = {
    65: "https://www.rp-assets.com/images/news/2021/05/11/92452-large.jpeg", //ManC
    66: [
        "https://allballerzone.com/wp-content/uploads/2021/05/rashford-greenwood-manchester-united-2021_fzb7eveoqdhl1u6mdq16yw2i5.jpg",
], //ManU
    73: [
        "https://scontent.fsin10-1.fna.fbcdn.net/v/t1.6435-9/146630511_10158153826698505_3583957671248691053_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=e3f864&_nc_ohc=JsqfzcTqBH4AX-hK-n7&_nc_ht=scontent.fsin10-1.fna&oh=c6698f1fd75187de8579c65fff046741&oe=617F1CF1", //Spurs
        "https://cdn.vox-cdn.com/thumbor/OP8FqHYnTLnYyqWqc-u4Xewb_-U=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22548497/1319644615.jpg",
        "https://scontent.fsin10-1.fna.fbcdn.net/v/t1.6435-9/p720x720/48425370_10156111179778505_7960977369265602560_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_ohc=GNh_7g3YvUoAX9Hja0C&_nc_ht=scontent.fsin10-1.fna&oh=2f2f094e643d092b73243c3301f24569&oe=617FBA40"
    ],
    338: "https://resources.lcfc.com/leicesterfc/photo/2021/06/15/5e92a419-0b22-4e17-8976-82d5f77a95ce/775550334-279.jpg", //Leicester

    5: [
        "https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fbayernstrikes.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2019%2F12%2F1190051343.jpeg",
        "https://img.fcbayern.com/image/upload/t_cms-9x12/f_auto/w_660,h_880,c_fill/cms/public/images/fcbayern-com/homepage/saison-17-18/profis/lewandowski/lewandowski_ima_100318.jpg",
        "https://pbs.twimg.com/media/EVeQRo6WkAATMHs.jpg"
    ], //Bayern

    81: [
        "https://www.sportsnet.ca/wp-content/uploads/2015/06/07756647.jpg",
], //Barca
    86: [
        "https://i1.wp.com/i.eurosport.com/2020/11/03/2928259-60159148-2560-1440.jpg" //RMadrid
    ]
    }


// assigning JS variables to HTML objects
// STUFF ON TOP
const fadeInDiv = document.getElementById('info-fading-in');
const teamPhoto = document.getElementById('team-photo');
const teamName = document.getElementById('team-name');
const teamLogo = document.getElementById('team-logo');
const teamStadium = document.getElementById('team-stadium');
const teamCountry = document.getElementById('team-country');
const teamAddress = document.getElementById('team-address')
const teamWebsite = document.getElementById('team-website-tag');
const teamYear = document.getElementById('team-year');
// PLAYERS
const teamList = document.getElementById('players-table');
const teamPhoto2 = document.getElementById("team-photo-2");
const playersPart = document.getElementById('players-part');
const players = document.getElementById('players');
//MATCHES
const teamPhoto3 = document.getElementById("team-photo-3");
const matchesPart = document.getElementById('matches-part');
const matches = document.getElementById('matches');
const fixture1 = document.getElementById('fixture1');
const fixture2 = document.getElementById('fixture2');
const fixture3 = document.getElementById('fixture3');


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

const getTeamInfo = async () => {
    const team = await fetchResponse(baseURL + teamID);
    console.log(team);
 
    teamPhoto.src = teamPictures[teamID][0];

    teamName.innerHTML = team.name;
    teamLogo.src = team.crestUrl;
    teamStadium.innerHTML = team.venue;
    teamCountry.innerHTML = team.area.name;
    teamAddress.innerHTML = team.address;
    teamWebsite.innerHTML = team.website.substring(7);
    teamWebsite.href = team.website;
    teamYear.innerHTML = 'Founded ' + team.founded;

    teamPhoto2.src = teamPictures[teamID][1];
    teamPhoto3.src = teamPictures[teamID][2];


    let squad = team.squad;
    let squadLength = squad["length"];
    const positions = ["Goalkeeper", "Defender", "Midfielder", "Attacker"];
    let playersToRemove = [];
    squad.forEach(element => {
        if (element.position == null) {
            playersToRemove.push(element);
            squadLength--;
        }
    squad = squad.filter(function(val) {
        return playersToRemove.indexOf(val) == -1;
        });
    });
    squad.sort(function(a, b) {
        return positions.indexOf(a.position) - positions.indexOf(b.position);
    });
    console.log(squad); //delete
    
    let col1 = document.createElement('div');
    let col2 = document.createElement('div');
    let col3 = document.createElement('div');
    col1.className = 'player-col';
    col2.className = 'player-col';
    col3.className = 'player-col';

    for (let i = 0; i < squadLength; i++) {

        let playerObject = squad[i];

        let playerName = document.createElement('h3');
        playerName.innerHTML = playerObject.name;
        col1.appendChild(playerName);

        let playerNationality = document.createElement('h3');
        playerNationality.innerHTML = playerObject.nationality;
        col2.appendChild(playerNationality);

        let playerPosition = document.createElement('h3');
        playerPosition.innerHTML = playerObject.position;
        col3.appendChild(playerPosition);

    }
    players.appendChild(col1);
    players.appendChild(col2);
    players.appendChild(col3);
    
//  ALSO EXPLORE FADING IN/OUT OR DRIFTING IN/OUT ON SCROLL, FROM THE SIDES.
//  ALSO EXPLORE FADING IN/OUT OR DRIFTING IN/OUT ON SCROLL, FROM THE SIDES.
//  ALSO EXPLORE FADING IN/OUT OR DRIFTING IN/OUT ON SCROLL,FROM THE SIDES.
//  ALSO EXPLORE FADING IN/OUT OR DRIFTING IN/OUT ON SCROLL, FROM THE SIDES.
//  ALSO EXPLORE FADING IN/OUT OR DRIFTING IN/OUT ON SCROLL, FROM THE SIDES.
//  ALSO EXPLORE FADING IN/OUT OR DRIFTING IN/OUT ON SCROLL FROM THE SIDES.

}

console.log(fetchResponse(baseURL + teamID + '/matches')); //testing stuff... delete later

const getMatches = async () => {

}

// ON DOWN SCROLL, OPACITY DROPS DRAMATICALLY, TEAM NAME, LOGO, INFO TAKE OVER IN MIDDLE OF PAGE. MAYBE SIDES STAY AT 100% OPACITY?
function changeNav() {
    var newScroll = document.scrollingElement.scrollTop;
    let newOpacity = String(100 - newScroll/2.5) + "%";
    teamPhoto.style.opacity = newOpacity;
}
// ON DOWN SCROLL, OPACITY DROPS DRAMATICALLY, TEAM NAME, LOGO, INFO TAKE OVER IN MIDDLE OF PAGE. MAYBE SIDES STAY AT 100% OPACITY?






getTeamInfo();
getMatches();