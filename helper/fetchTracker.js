const fetch = require("node-fetch");

const cache = new Map();
const baseUrl = 'https://api.covid19tracker.ca/reports/province/';
const limitDate = '&after=2022-01-01&before=2022-01-03'; //this was for testing

function fetchTracker(province, stat,to,from){
    // Creates url
    let url = `${baseUrl}${province}?stat=${stat}${to}${from}`;
    // Stores in custom cache
    let data = cache.get(url);

    if (data) {
        // loaded from cache
        console.log('loaded'+url)
        return data;
    } else { 
        // fetchs new api
        console.log('saved', url);
        return fetch(url) 
            .then(response => {
                // saves clone to cache
                cache.set(url, response.clone().json());
                // return json
                return response.json()
            })
            
    }    
}

module.exports = fetchTracker;