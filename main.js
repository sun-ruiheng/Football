// const token = '7aa496fb7e9b4a2da942794924e18031';
// const baseURL = 'http://api.football-data.org/v2/competitions/';

// const fetchResponse = async (url) => {
//     try {
//         const response = await fetch(url, {
//             headers: {
//                 'X-Auth-Token': token
//             }
//         });
//         if (response.ok) {
//             const jsonResponse = await response.json();
//             return jsonResponse;
//         } 
//     } catch(e) {
//         console.log(e);
//     }
// };

// async function getStandings (league) {
//     urlToFetch = baseURL + 'competitions/' + league;
//     let jsonResponse = fetchResponse(urlToFetch);
// }




const href = './standings.html?league=';
const goToStandings = (league) => {
    location.href = href + league;
}
// ONCLICKS
window.onload = function () {
    const EPL = document.querySelector('#epl');
    EPL.addEventListener('click', function() {
        goToStandings('2021');
    });
    
    const bundesliga = document.getElementById('bundesliga');
    bundesliga.addEventListener('click', function () {
        goToStandings('2002');
    });

    const laliga = document.getElementById('laliga');
    laliga.addEventListener('click', function () {
        goToStandings('2014');
    });

}
    


import React from 'react';
import ReactDOM from 'react-dom';

class TestComponentClass extends React.Component {
    render() {
        return (
            <h1>AYOOOOO lmaoooo</h1>
        );
    }
}
ReactDOM.render(
    <TestComponentClass />,
    document.getElementById('epl')
)