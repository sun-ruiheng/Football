
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


// ON DOWN SCROLL, OPACITY DROPS DRAMATICALLY, TEAM NAME, LOGO, INFO TAKE OVER IN MIDDLE OF PAGE.
function changeNav() {
    var newScroll = document.scrollingElement.scrollTop;
    let newOpacity = String(100 - newScroll/2.5) + "%";
    teamPhoto.style.opacity = newOpacity;
}
const loadPage = async () => {

const token = '7aa496fb7e9b4a2da942794924e18031';
const baseURL = 'http://api.football-data.org/v2/teams/';
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const teamID = urlParams.get('team');

// database of team pictures (the large one that takes up half the screen)
let teamPictures = {
    57: [
        "https://media3.giphy.com/media/2WeODajqiUSylWx5GN/giphy.gif?cid=790b7611eadc4e3e13c6cccafe04fc256df071c501eb17b4&rid=giphy.gif&ct=g",
        "https://staticg.sportskeeda.com/editor/2021/02/58725-16140781656641.jpg",
        "https://i2-prod.football.london/incoming/article19481291.ece/ALTERNATES/s1200c/0_PEA.jpg"
    ], //Arsenal
    61: [
        './images/chelsea.gif',
        // "https://news.cgtn.com/news/2021-05-19/Chelsea-beat-Leicester-to-boost-top-four-bid-Brighton-upsets-Man-City-10o8qioV5pC/img/dbc7454f7a0746d68a01dee270ac80dd/dbc7454f7a0746d68a01dee270ac80dd.png",
        "https://scontent.fsin10-1.fna.fbcdn.net/v/t1.6435-9/137592622_10159309170042259_8227939711166751824_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=noqXK-T7vBkAX-ICjwx&_nc_ht=scontent.fsin10-1.fna&oh=cc333018759a3421afbaaebab6bc636c&oe=6190DFC1",
        "https://scontent.fsin10-1.fna.fbcdn.net/v/t1.6435-9/74453250_10158805711932259_7375199697777847883_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=OiN5NaF25pIAX8WMZq3&_nc_ht=scontent.fsin10-1.fna&oh=de899615840199e9c51201ae6fc3008b&oe=618F5588"
    ], //Chelsea
    62: [
        "https://cdn.vox-cdn.com/thumbor/f3NRJxdLzig-y020-fqcZ4Vur5Q=/0x0:2393x1751/1200x800/filters:focal(975x371:1357x753)/cdn.vox-cdn.com/uploads/chorus_image/image/69714376/1272310849.0.jpg",
        "https://cdn.mos.cms.futurecdn.net/sUKBdkT9wWpsdvbdUykx6P-1200-80.jpg",
        "https://imgix.bustle.com/uploads/getty/2021/9/2/1ec2c171-1a3a-49f0-adac-e6d1bc41bbc3-getty-1234922520.jpg?w=800&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.4653&fp-y=0.2214"
    ], //Everton
    64: [
        'https://c.tenor.com/2NJYWiMVrQAAAAAd/corner-taken-quickly-football.gif',
        // "https://cdn.vox-cdn.com/thumbor/_18GG01a8YkBwju56Nxvo3OcdHc=/2309x1663:5635x3757/1200x800/filters:focal(2828x1988:3728x2888)/cdn.vox-cdn.com/uploads/chorus_image/image/65479936/1139501072.jpg.0.jpg",
        "https://cdn.extra.ie/wp-content/uploads/2019/04/14182736/Mo-Salah-Chelsea.jpg",
        "https://64.media.tumblr.com/9a9a694da00d246eaaf1d744ba5437ba/tumblr_oihbkk64kV1uvl0iao1_1280.png"
    ], //Liverpool
    65: [
        "https://i.giphy.com/media/3ohjV6MZrvP2vH1D2w/giphy.gif",
        "https://i2-prod.mirror.co.uk/incoming/article24764597.ece/ALTERNATES/s1200c/0_Premier-League-Tottenham-Hotspur-v-Manchester-City.jpg",
        "https://i2-prod.manchestereveningnews.co.uk/incoming/article19687309.ece/ALTERNATES/s1200c/0_GettyImages-1295276356.jpg"
     ], //ManC
    66: [
        "https://thumbs.gfycat.com/JadedYellowishKingsnake-max-1mb.gif",
        "https://i.pinimg.com/originals/f1/8a/85/f18a8526b6e9994527660ad93ac10ab0.jpg",
        "https://i.pinimg.com/originals/88/de/86/88de860ae2fcd29e6c7d09483fbe8da1.jpg"
    ], //ManU
    67: [
        "https://e0.365dm.com/21/10/1600x900/skysports-newcastle-st-james-park_5540148.jpg?20211008203855",
        "https://static.highsnobiety.com/thumbor/kqnIiEbQ_nvOJF_oWwlIpvtGi3g=/1600x2000/static.highsnobiety.com/wp-content/uploads/2021/08/13154429/football-jersey-202122-season-editors-roundtable-05.jpg",
        "https://i2-prod.dailystar.co.uk/incoming/article25183587.ece/ALTERNATES/s615b/1_GettyImages-1345506997.jpg"
    ], //Newcastle
    73: [
        // './images/spursbg.jpg',
        './images/spurs.gif',
        "https://cdn.vox-cdn.com/thumbor/OP8FqHYnTLnYyqWqc-u4Xewb_-U=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22548497/1319644615.jpg",
        "https://pbs.twimg.com/media/FAyHybzXsAYnzHq.jpg"
    ], //Spurs
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
        "./images/vardy.gif",
        "https://i.guim.co.uk/img/media/ec76895615546ab508b62b48732b632f40a5c0bc/0_157_4786_2872/master/4786.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1693085d7d1dba3c67366248528d0d81",
        "https://www.footballfancast.com/wp-content/uploads/2019/10/2019-10-05T153950Z_711738545_RC12DD005960_RTRMADP_3_SOCCER-ENGLAND-LIV-LEI-REPORT.jpg"
    ],//Leicester
    340: [
        "https://static.standard.co.uk/2021/10/06/08/newFile.jpg?width=968&auto=webp&quality=75&crop=968%3A645%2Csmart",
        "https://www.dailyecho.co.uk/resources/images/11630013/",
        "https://www.dailyecho.co.uk/resources/images/11062297/"
    ], //Southampton
    563: [
        "https://www.whufc.com/sites/default/files/inline-images/NobleDesktop.jpg",
        "https://staticg.sportskeeda.com/editor/2020/08/50f2c-15964880204224.jpg",
        "https://www.whufc.com/sites/default/files/img/news_gallery/2020-08/CressManU.jpeg"
    ], //West Ham


    1: [
        "https://fc.de/fileadmin/_processed_/1/7/csm_Spielbericht_BMGKOE_210206_HP_b524ffa06d.jpg",
        "https://pbs.twimg.com/media/EDEMQ1NXsAAWQ37.jpg",
        "https://pbs.twimg.com/media/EEw-4ECXYAcy9EV.jpg:large",
    ], //Cologne
    2: [
        "https://totomaster.co/wp-content/uploads/2020/05/1-5.jpg",
        "https://cdn.vox-cdn.com/thumbor/4S1ZIUfY5Gq4Gr2KiPgaUoNCCWQ=/0x0:3520x5278/1200x0/filters:focal(0x0:3520x5278):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22328335/1303455587.jpg",
        "https://pbs.twimg.com/media/E8flqs2WEAIkI6k.jpg:large"
    ], //Hoffenheim
    3: [
        "https://img.bundesliga.com/tachyon/sites/2/2020/03/AS3_8607.jpg?crop=0px,0px,1920px,1080px&fit=1140",
        "https://scontent.fsin10-1.fna.fbcdn.net/v/t1.6435-9/244177010_1553903928294707_118603708122688583_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=pMfdgcoPQxkAX-I2N8t&_nc_ht=scontent.fsin10-1.fna&oh=eeefe87f893f758dfc086b45c656ee86&oe=618F7D66",
        "http://res.heraldm.com/content/image/2014/10/21/20141021001278_0.jpg"
    ], //Bayer
    4: [
        "https://c.tenor.com/AXXSARIyyhsAAAAC/haaland-erling-haaland.gif",
        "https://pbs.twimg.com/media/EyYMTKIXIAEsDv-.jpg",
        "https://cdn.vox-cdn.com/thumbor/qn1VqOUhMarVHm0IwPzIHLGVZqs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22846146/1235205487.jpg"
    ], //Dortmund
    5: [
        "https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fbayernstrikes.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2019%2F12%2F1190051343.jpeg",
        "https://img.fcbayern.com/image/upload/t_cms-9x12/f_auto/w_660,h_880,c_fill/cms/public/images/fcbayern-com/homepage/saison-17-18/profis/lewandowski/lewandowski_ima_100318.jpg",
        "https://pbs.twimg.com/media/EVeQRo6WkAATMHs.jpg"
    ], //Bayern
    9: [
        "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(683x205:685x203)/origin-imgresizer.eurosport.com/2020/12/04/2949350-60542968-2560-1440.jpg",
        "https://bilder.bild.de/fotos-skaliert/startelf-ich-komme-krzysztof-piatek-soll-heute-in-dortmund-gemeinsam-mit-jhon-cordoba-in-herthas-stu-a485bd94c0ff4cb185d93dcab31f5732-75720072/2,w=1986,q=low,c=0.bild.jpg",
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d28a6b63-492d-4052-8569-bd253f99893e/d9n5ck5-fcc0e1f8-04e5-43cb-be61-5b18f6a20fd1.jpg/v1/fill/w_1024,h_1821,q_75,strp/hertha_bsc_wallpaper_by_eins8neun2_d9n5ck5-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgyMSIsInBhdGgiOiJcL2ZcL2QyOGE2YjYzLTQ5MmQtNDA1Mi04NTY5LWJkMjUzZjk5ODkzZVwvZDluNWNrNS1mY2MwZTFmOC0wNGU1LTQzY2ItYmU2MS01YjE4ZjZhMjBmZDEuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.oIhg_X4SsvgFf6WFW-FtheY4-y4bEotw7SkdPi_sfJs"
    ], //Hertha
    11: [
        "https://www.sportingpedia.com/wp-content/uploads/2020/09/Wolfsburg-vs-Desna-EL.jpg",
        "https://cdn.vox-cdn.com/thumbor/EhMsIu5mpMQ3IRw0hzjl8gDelvQ=/0x0:1705x2557/1200x0/filters:focal(0x0:1705x2557):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22405165/1231833712.jpg",
        "https://pbs.twimg.com/media/En8hChRW8AI35MV.jpg"
    ], //Wolfsburg
    15: [
        "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1469x310:1471x308)/origin-imgresizer.eurosport.com/2021/04/24/3120534-63966408-2560-1440.jpg",
        "https://scontent.fsin10-1.fna.fbcdn.net/v/t1.6435-9/230074408_4494375753917437_7054859780838565639_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=BruH32aCjhQAX-_WJLS&_nc_ht=scontent.fsin10-1.fna&oh=8506a6b8f826dc4585583d46466c80ad&oe=61904CA0",
        "https://scontent.fsin10-1.fna.fbcdn.net/v/t1.6435-9/226769918_4474940582527621_1454446928296324974_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=cFuKvQf-kxoAX8PWgRU&_nc_ht=scontent.fsin10-1.fna&oh=65965d8292f33467ad93506c0ad0ea80&oe=618E24C9"
    ], //Mainz
    18: [
        "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1186858882%2F0x0.jpg",
        "https://www.thesun.co.uk/wp-content/uploads/2021/08/887b5e84-bec3-40a8-b225-bcfdae0d4593-1.jpg",
        "https://www.rousingthekop.com/static/uploads/4/2021/02/GettyImages-1201870396.jpg"
    ], //Gladbach
    721: [
        "https://www.getfootballnewsgermany.com/assets/fbl-ger-cup-nuremberg-leipzig-scaled.jpg",
        "https://ronaldo.com/wp-content/uploads/2020/03/GettyImages-1212256428.jpg",
        "https://i.pinimg.com/474x/bf/fa/34/bffa3443a58816a645718b71feb0ebb7.jpg"
    ], //Leipzig


    77: [
        "https://cdn-wp.thesportsrush.com/2019/09/GettyImages-1165378488.jpg",
        "https://pbs.twimg.com/media/E_CHlbYXIAsHOpm.jpg",
        "https://i.pinimg.com/originals/a1/7f/3c/a17f3cfb7d2aa4347da431728dc69688.jpg"
    ], //Athletic
    78: [
        "https://media4.giphy.com/media/N06n9vUHOzsX08eSQJ/giphy.gif?cid=790b76113f658abed76b035ffe3bc814bca36714363f0ffa&rid=giphy.gif&ct=g",
        "https://pbs.twimg.com/media/EslfHbbW8AMSDVN.jpg",
        "https://cdn.vox-cdn.com/thumbor/5RUGi9j9vc1Yhq0PTUgzpp412xw=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22853752/1340587572.jpg"
    ], //Atletico
    81: [
        "https://www.gifcen.com/wp-content/uploads/2021/02/messi-best-free-kick-gif.gif",
        // "https://img.bleacherreport.net/img/slides/photos/004/245/901/0a4b4330e177b08ce4d156a33546b0cb_crop_exact.jpg?w=2975&h=2048&q=85",
        "https://i.pinimg.com/originals/20/70/73/20707332e0158736ccdec2609672140f.jpg",
        "https://www.rousingthekop.com/static/uploads/4/2021/04/GettyImages-1277030554.jpg"

    ], //Barca
    86: [
        "http://4.bp.blogspot.com/-dT6cG8evdc4/VEEB-D5gB8I/AAAAAAAAFDI/5xofgwDTrtc/s640/ronaldo%2Bgif%2Bfail.gif",
        "https://i.pinimg.com/originals/5b/73/b3/5b73b391b0d6fb27f9e400bc6673465b.jpg",
        "https://www.deccanherald.com/sites/dh/files/article_images/2020/05/19/file77v4n2ve6gl14y9jbalh-1086691071-1573987495.jpg"
    ], //RMadrid
    92: [
        "https://cdn.realsociedad.eus//Uploads/contenidos/thumbs/a-cronica_945_.jpeg",
        "https://pbs.twimg.com/media/E9FGbw_WUAY2EJM.jpg",
        "https://fotos02.noticiasdegipuzkoa.eus/2020/11/25/690x278/januzaj-oyarzabal.jpg"
    ], //Sociedad
    94: [
        "https://editorial.uefa.com/resources/0233-0e95c54dd418-ce850eb24d7d-1000/villarreal_will_be_celebrating_again_with_victory_over_steaua.jpeg",
        "https://www.coachesvoice.com/wp-content/uploads/2021/05/VillarrealMobile.jpg",
        "https://pbs.twimg.com/media/EiByXSVWsAAE7Tn.jpg"
    ], //Villarreal
    95: [
        "https://e0.365dm.com/20/11/2048x1152/skysports-soler-valenica_5166353.jpg",
        "https://valenciacf.azureedge.net/images/x6qQv1grrc7L05Qd7njqfe9iSI2vLEWKOHBI7yy9SGyWlTm3YKmKf13dbtbS35zz.jpeg",
        "https://pbs.twimg.com/media/EXab6H4X0AEVHiV.jpg"
    ], //Valencia
    559: [
        "https://i0.wp.com/thesefootballtimes.co/wp-content/uploads/2016/05/52961e17fac74cc68246375d2bf260fe.jpg?fit=1600%2C1067&ssl=1",
        "https://editorial.uefa.com//resources/0263-10c6d263f7bd-755654eab22b-1000/format/free1/fc_sevilla_v_fc_krasnodar_group_e_-_uefa_champions_league.jpeg",
        "https://pbs.twimg.com/media/ESjiWXnXYAAunvf.jpg"
    ] //Sevilla
    };


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
    
}


const getMatches = async () => {
    const matchesJSON = await fetchResponse(baseURL + teamID + '/matches');
    matchesList = matchesJSON.matches;

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
    let teamsList = jsonResponse.teams;
    console.log("teamsList: \n" + teamsList);
    


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

    for (let i = 0; i < 3; i++) {
        fixtureHomeNames[i].innerHTML = threeMatches[i].homeTeam.name;
        fixtureAwayNames[i].innerHTML = threeMatches[i].awayTeam.name;
        scorelines[i].innerHTML = threeMatches[i].score.fullTime.homeTeam + " - " + threeMatches[i].score.fullTime.awayTeam;
        let dateISO = threeMatches[i].utcDate;
        let date = new Date(dateISO);
        console.log("dateISO:");
        console.log(dateISO);
        let dateDay = date.getDate().toString();
        let dateMonth = (date.getMonth() + 1).toString();
        let dateYear = date.getFullYear();
        let dateHours = date.getHours().toString();
        let dateMinutes = date.getMinutes().toString();
        if (dateHours === "0") {
            dateHours = "00";
        }
        if (dateHours.length === 1) {
            dateHours.shift('0');
        }
        if (dateMinutes === "0") {
            dateMinutes = "00";
        }
        dates[i].innerHTML = dateDay + "/" + dateMonth + "/" + dateYear + "\n" + dateHours + dateMinutes + "H";
    }

}


const fadeOutLoadingPage = () => {
    const loader = document.getElementById('loader-wrapper-team');
    loader.style.display = 'none';
    const subtitleTip = document.getElementById('team-name-below');
    subtitleTip.style.display = 'none';
    const entireScreen = document.getElementsByTagName('body')[0];
    entireScreen.style.overflow = "visible";
    if (teamPictures[teamID]) {
        teamPhoto.src = teamPictures[teamID][0];
        teamPhoto2.src = teamPictures[teamID][1];
        teamPhoto3.src = teamPictures[teamID][2];
    }
}

await getTeamInfo();
await getMatches();

fadeOutLoadingPage();
};



loadPage();