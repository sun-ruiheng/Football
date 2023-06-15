# Football

June 2023 update: The API has stopped working, or changed the way it works. This website doesn't work anymore (for now)!

A website for information on matches, players, results, and maybe more, using a simple and convenient API.
It's my first time using an API in a project that isn't a spoonfed tutorial, so I'm really trying to figure out various functions and exploring the wild possibilities of APIs. Also, my friends (some of them) and I love football, so why not, right?

This project let me experience first-hand how it's like working with an external API, including key authorisation and documentation reading to determine URL paths. I also got to implement my recently-acquired knowledge on asynchronous JavaScript and its event loop, using Async-Await and the Fetch API to retrieve data from _football-data.org_.

Disclaimers:
1) Data of league tables, team information, including players' names, nationalities and positions, and teams' recent and upcoming fixtures are fetched from the _football-data.org_ API by Daniel Freitag.
2) Images (excluding team logos, which too are from the API) are found online, and their sources are in the teamPictures object in team.js.
3) The free version of this API only allows for 10 API calls per minute, meaning after a couple of clicks around the website it might start freezing up. Sorry about that, but I can't really afford to raise that 10/minute rate. Just wait a moment (for the minute to be over) and try again.
4) Yeah, some teams don't have pictures, just the API data. I didn't have time to look for aesthetic images for every team :(
