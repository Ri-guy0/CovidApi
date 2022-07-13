const fetchTracker = require('../helper/fetchTracker');
const statMerge = require('../helper/statMerge');

async function reportsLogic(provincesList, statsList, to, from){
    var reportData = [];

    // iterates for each provinces
    for (index in provincesList) {
        //stores current province
        const provinceItem = provincesList[index];
        // promise <3 the fetch calls for all stats
        let requests = statsList.map(statV => fetchTracker(provinceItem,statV, to, from));
        const provinceData = await Promise.all(requests);
        // uses helper function to merge the stats
        const mergedProvince = statMerge(provinceData, provinceItem);
        // pushs to list of all the provinces 
        reportData.push(mergedProvince);
    }
    
    return reportData
}

module.exports = reportsLogic;