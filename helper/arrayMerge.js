/*
 * Credit to crgk from stackoverflow: https://stackoverflow.com/questions/35326682/lodash-merge-function-issue
*/
const _ = require('lodash');

function arrayMerge (objValue, srcValue){
    //checks if the object is an array
    if (_.isArray(objValue)){
        // conbines if they are.
        return _.union(objValue,srcValue);
    }
}

module.exports = arrayMerge;