const _ = require('lodash');
const arrayMerge= require('./arrayMerge');

function statMerge (obj, province) {    
    let merged = {};
    let mergedList = [];

    // merges every data
    obj.map(statData=>{
        merged = _.mergeWith(merged, statData.data, arrayMerge)
    })

    // converts object to list to fix formating and indexes for better visuals
    for (const i in merged) {
        mergedList.push(merged[i]);
    }
    
    // returns the province since it is deleted in the merging. Different formating then the fetched api
    return {[province] :{'data': mergedList}};

}

module.exports = statMerge;