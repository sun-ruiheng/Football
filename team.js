const token = '7aa496fb7e9b4a2da942794924e18031';
const baseURL = 'http://api.football-data.org/v2/teams/';
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const teamID = urlParams.get('team');

// database of team pictures (the large one that takes up half the screen)
let teamPictures = {
    57: [
        "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/Celebration_2.jpg?itok=pSkm1Zfx",
        "https://staticg.sportskeeda.com/editor/2021/02/58725-16140781656641.jpg",
        "https://i2-prod.football.london/incoming/article19481291.ece/ALTERNATES/s1200c/0_PEA.jpg"
    ], //Arsenal
    61: [
        "https://news.cgtn.com/news/2021-05-19/Chelsea-beat-Leicester-to-boost-top-four-bid-Brighton-upsets-Man-City-10o8qioV5pC/img/dbc7454f7a0746d68a01dee270ac80dd/dbc7454f7a0746d68a01dee270ac80dd.png",
        "https://scontent.fsin10-1.fna.fbcdn.net/v/t1.6435-9/137592622_10159309170042259_8227939711166751824_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=noqXK-T7vBkAX-ICjwx&_nc_ht=scontent.fsin10-1.fna&oh=cc333018759a3421afbaaebab6bc636c&oe=6190DFC1",
        "https://scontent.fsin10-1.fna.fbcdn.net/v/t1.6435-9/74453250_10158805711932259_7375199697777847883_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=OiN5NaF25pIAX8WMZq3&_nc_ht=scontent.fsin10-1.fna&oh=de899615840199e9c51201ae6fc3008b&oe=618F5588"
    ], //Chelsea
    62: [
        "https://cdn.vox-cdn.com/thumbor/f3NRJxdLzig-y020-fqcZ4Vur5Q=/0x0:2393x1751/1200x800/filters:focal(975x371:1357x753)/cdn.vox-cdn.com/uploads/chorus_image/image/69714376/1272310849.0.jpg",
        "https://cdn.mos.cms.futurecdn.net/sUKBdkT9wWpsdvbdUykx6P-1200-80.jpg",
        "https://imgix.bustle.com/uploads/getty/2021/9/2/1ec2c171-1a3a-49f0-adac-e6d1bc41bbc3-getty-1234922520.jpg?w=800&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.4653&fp-y=0.2214"
    ], //Everton
    64: [
        "https://cdn.vox-cdn.com/thumbor/_18GG01a8YkBwju56Nxvo3OcdHc=/2309x1663:5635x3757/1200x800/filters:focal(2828x1988:3728x2888)/cdn.vox-cdn.com/uploads/chorus_image/image/65479936/1139501072.jpg.0.jpg",
        "https://cdn.extra.ie/wp-content/uploads/2019/04/14182736/Mo-Salah-Chelsea.jpg",
        "https://64.media.tumblr.com/9a9a694da00d246eaaf1d744ba5437ba/tumblr_oihbkk64kV1uvl0iao1_1280.png"
    ], //Liverpool
    65: [
        "https://www.rp-assets.com/images/news/2021/05/11/92452-large.jpeg",
        "https://i2-prod.mirror.co.uk/incoming/article24764597.ece/ALTERNATES/s1200c/0_Premier-League-Tottenham-Hotspur-v-Manchester-City.jpg",
        "https://i2-prod.manchestereveningnews.co.uk/incoming/article19687309.ece/ALTERNATES/s1200c/0_GettyImages-1295276356.jpg"
     ], //ManC
    66: [
        "https://allballerzone.com/wp-content/uploads/2021/05/rashford-greenwood-manchester-united-2021_fzb7eveoqdhl1u6mdq16yw2i5.jpg",
        "https://i.pinimg.com/originals/f1/8a/85/f18a8526b6e9994527660ad93ac10ab0.jpg",
        "https://i.pinimg.com/originals/88/de/86/88de860ae2fcd29e6c7d09483fbe8da1.jpg"
    ], //ManU
    73: [
        "https://scontent.fsin10-1.fna.fbcdn.net/v/t1.6435-9/146630511_10158153826698505_3583957671248691053_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=e3f864&_nc_ohc=JsqfzcTqBH4AX-hK-n7&_nc_ht=scontent.fsin10-1.fna&oh=c6698f1fd75187de8579c65fff046741&oe=617F1CF1", //Spurs
        "https://cdn.vox-cdn.com/thumbor/OP8FqHYnTLnYyqWqc-u4Xewb_-U=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22548497/1319644615.jpg",
        "https://scontent.fsin10-1.fna.fbcdn.net/v/t1.6435-9/p720x720/48425370_10156111179778505_7960977369265602560_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_ohc=GNh_7g3YvUoAX9Hja0C&_nc_ht=scontent.fsin10-1.fna&oh=2f2f094e643d092b73243c3301f24569&oe=617FBA40"
    ],
    76: [
        "https://wolves-cdn.azureedge.net/media/18061/semedo-united.jpg",
        "https://i2-prod.football.london/incoming/article17622499.ece/ALTERNATES/s1200c/0_GettyImages-1195525837.jpg",
        "https://www.thesun.co.uk/wp-content/uploads/2020/08/NINTCHDBPICT000600415590.jpg"
    ], //Wolves
    328:["https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1476x277:1478x275)/origin-imgresizer.eurosport.com/2021/02/17/2997099-61497708-2560-1440.jpg",
        "https://i2-prod.lancs.live/incoming/article19904413.ece/ALTERNATES/s1200c/0_JS228552829.jpg",
        "https://www.thesun.co.uk/wp-content/uploads/2018/05/nintchdbpict000405536732.jpg"
    ], //Burnley
    338: [
        "https://resources.lcfc.com/leicesterfc/photo/2021/06/15/5e92a419-0b22-4e17-8976-82d5f77a95ce/775550334-279.jpg",
        "https://i.guim.co.uk/img/media/ec76895615546ab508b62b48732b632f40a5c0bc/0_157_4786_2872/master/4786.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1693085d7d1dba3c67366248528d0d81",
        "https://www.footballfancast.com/wp-content/uploads/2019/10/2019-10-05T153950Z_711738545_RC12DD005960_RTRMADP_3_SOCCER-ENGLAND-LIV-LEI-REPORT.jpg"
    ],//Leicester
    340: [
        "https://news.cgtn.com/news/2020-11-07/Southampton-go-top-at-Premiere-League-with-2-0-win-over-Newcastle-VdovbS8SAM/img/1e9b0af7efca455dbb526d4053b40904/1e9b0af7efca455dbb526d4053b40904.png",
        "https://www.dailyecho.co.uk/resources/images/11630013/",
        "https://www.dailyecho.co.uk/resources/images/11062297/"
    ], //Southampton

    3: [
        "https://img.bundesliga.com/tachyon/sites/2/2020/03/AS3_8607.jpg?crop=0px,0px,1920px,1080px&fit=1140",
        "https://scontent.fsin10-1.fna.fbcdn.net/v/t1.6435-9/244177010_1553903928294707_118603708122688583_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=pMfdgcoPQxkAX-I2N8t&_nc_ht=scontent.fsin10-1.fna&oh=eeefe87f893f758dfc086b45c656ee86&oe=618F7D66",
        "http://res.heraldm.com/content/image/2014/10/21/20141021001278_0.jpg"
    ], //Bayer
    4: [
        "https://img.bundesliga.com/tachyon/sites/2/2020/05/haaland-team-celebration-bvb-s04.jpg?crop=285px,0px,1350px,1080px",
        "https://pbs.twimg.com/media/EyYMTKIXIAEsDv-.jpg",
        "https://cdn.vox-cdn.com/thumbor/qn1VqOUhMarVHm0IwPzIHLGVZqs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22846146/1235205487.jpg"
    ], //Dortmund
    5: [
        "https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fbayernstrikes.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2019%2F12%2F1190051343.jpeg",
        "https://img.fcbayern.com/image/upload/t_cms-9x12/f_auto/w_660,h_880,c_fill/cms/public/images/fcbayern-com/homepage/saison-17-18/profis/lewandowski/lewandowski_ima_100318.jpg",
        "https://pbs.twimg.com/media/EVeQRo6WkAATMHs.jpg"
    ], //Bayern
    721: [
        "https://www.getfootballnewsgermany.com/assets/fbl-ger-cup-nuremberg-leipzig-scaled.jpg",
        "https://ronaldo.com/wp-content/uploads/2020/03/GettyImages-1212256428.jpg",
        "https://i.pinimg.com/474x/bf/fa/34/bffa3443a58816a645718b71feb0ebb7.jpg"
    ], //Leipzig

    78: [
        "https://img-estaticos.atleticodemadrid.com/system/file5s/65522/medium2x2/slmNIUttxG_pina.jpg?1598895694",
        "https://lh3.googleusercontent.com/proxy/zmSOAbrSAtuz9ftNqkLINQ7K9Pip0ftnnJhaoEiuxvzc7c6ULhvtQ-E2EkIlKvtNBrWvFsnigt_QCPZ1lGQBCemIEfQwZqIm4csrPZASxqp029Vi0SI-Dp9zcZfEqhFQaQ",
        "https://cdn.vox-cdn.com/thumbor/5RUGi9j9vc1Yhq0PTUgzpp412xw=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22853752/1340587572.jpg"
    ], //Atletico
    81: [
        "https://img.bleacherreport.net/img/slides/photos/004/245/901/0a4b4330e177b08ce4d156a33546b0cb_crop_exact.jpg?w=2975&h=2048&q=85",
        "https://i.pinimg.com/originals/20/70/73/20707332e0158736ccdec2609672140f.jpg",
        "https://www.rousingthekop.com/static/uploads/4/2021/04/GettyImages-1277030554.jpg"

    ], //Barca
    86: [
        "https://i1.wp.com/i.eurosport.com/2020/11/03/2928259-60159148-2560-1440.jpg",
        "https://i.pinimg.com/originals/5b/73/b3/5b73b391b0d6fb27f9e400bc6673465b.jpg",
        "https://www.deccanherald.com/sites/dh/files/article_images/2020/05/19/file77v4n2ve6gl14y9jbalh-1086691071-1573987495.jpg"
    ] //RMadrid
    }


// assigning JS variables to HTML objects
const title = document.getElementsByTagName('title');
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
const fixtureHomeImages = document.getElementsByClassName('fixture-home');
const fixtureAwayImages = document.getElementsByClassName('fixture-away');
const fixtureHomeNames = document.getElementsByClassName('fixture-home-name');
const fixtureAwayNames = document.getElementsByClassName('fixture-away-name');
const scorelines = document.getElementsByClassName('scoreline');
const arenas = document.getElementsByClassName('arena');
const dates = document.getElementsByClassName('date');
var leagueID;

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
    leagueID = team.activeCompetitions[0].id;
 
    if (teamPictures[teamID]) {
        teamPhoto.src = teamPictures[teamID][0];
        teamPhoto2.src = teamPictures[teamID][1];
        teamPhoto3.src = teamPictures[teamID][2];
    }

    title[0].innerHTML = team.name;
    teamName.innerHTML = team.name;
    teamLogo.src = team.crestUrl;
    teamStadium.innerHTML = team.venue;
    teamCountry.innerHTML = team.area.name;
    teamAddress.innerHTML = team.address;
    teamWebsite.innerHTML = team.website.substring(7);
    teamWebsite.href = team.website;
    teamYear.innerHTML = 'Founded ' + team.founded;



    let squad = team.squad;
    const positions = ["Goalkeeper", "Defender", "Midfielder", "Attacker"];

    squad = squad.filter(function(val) { //getting rid of players with "null" positions
        return val.position;
        });
    
    let squadLength = squad.length - 1;

    squad.sort(function(a, b) {
        return positions.indexOf(a.position) - positions.indexOf(b.position);
    });
    console.log('squad:');
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
//  ALSO EXPLORE FADING IN/OUT OR DRIFTING IN/OUT ON SCROLL FROM THE SIDES.

}


const getMatches = async () => {
    const matchesJSON = await fetchResponse(baseURL + teamID + '/matches');
    matchesList = matchesJSON.matches;
    console.log(matchesList); //DELETE LATER

    let listOfStatuses = matchesList.map(function(game) {
        return game.status;
    })
    let firstScheduledIndex = listOfStatuses.indexOf("SCHEDULED");
    let fixtureA = firstScheduledIndex - 2;
    let fixtureB = firstScheduledIndex - 1;
    let fixtureC = firstScheduledIndex;
    if (firstScheduledIndex < 2) {
        fixtureA = 0;
        fixtureB = 1;
        fixtureC = 2;
    }


    
    let threeMatches = [matchesList[fixtureA], matchesList[fixtureB], matchesList[fixtureC]];
    console.log(threeMatches);

    let jsonResponse = await fetchResponse('http://api.football-data.org/v2/competitions/' + leagueID + '/teams');
    console.log(jsonResponse); //delete later
    let teamsList = jsonResponse.teams;
    console.log(teamsList); //delete later
    


    for (let i = 0; i < teamsList["length"]; i++) {
        for (let u = 0; u < 3; u++) {
            if (teamsList[i].id == threeMatches[u].awayTeam.id) {
                fixtureAwayImages[u].src = teamsList[i].crestUrl;
            }
            if (teamsList[i].id == threeMatches[u].homeTeam.id) {
                fixtureHomeImages[u].src = teamsList[i].crestUrl;
                arenas[u].innerHTML = teamsList[i].venue;
            }
        }
    }


    // const fixtureHomeImages 
    // const fixtureHomeNames 
    // const fixtureAwayNames 

    for (let i = 0; i < 3; i++) {
        fixtureHomeNames[i].innerHTML = threeMatches[i].homeTeam.name;
        fixtureAwayNames[i].innerHTML = threeMatches[i].awayTeam.name;
        scorelines[i].innerHTML = threeMatches[i].score.fullTime.homeTeam + " - " + threeMatches[i].score.fullTime.awayTeam;
        let dateISO = threeMatches[i].utcDate;
        let date = new Date(dateISO);
        let dateDay = date.getDate().toString();
        let dateMonth = date.getMonth().toString();
        let dateYear = date.getFullYear();
        let dateHours = date.getHours().toString();
        let dateMinutes = date.getMinutes().toString();
        if (dateMinutes === "0") {
            dateMinutes = "00";
        }
        console.log(dateHours);
        console.log(dateMinutes);
        dates[i].innerHTML = dateDay + "/" + dateMonth + "/" + dateYear + "\n" + dateHours + dateMinutes + "H";
        // arenas[i].innerHTML AH SHIT I THINK THERES NO ARENA IN THREEMATCHES. MAYBE TRY SOME SHIT WITH THE FOR (I) FOR (U) THING ABOVE, LIKE WITH THE CRESTS
    }

//
//
//
//


    // console.log(threeMatches);


    // let i = 0;
    // fixtureHomeImages.forEach(function(item) {
    //     item.src = matchesList.
    // })


    //CONTINUE HERE... CRAFT AN ALGO THAT FINDS THE RECENT 3 MATCHES
    //CONTINUE HERE... CRAFT AN ALGO THAT FINDS THE RECENT 3 MATCHES
    //first time encountering status=not yet, plus two before that. so it's either done/ done/ next or done/ in progress/ next.
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