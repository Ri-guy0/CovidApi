const dateVerifier = require('../helper/dateVerifier');

const validStats = ["all", "cases", "fatalities", "hospitalizations", "criticals", "vaccinations", "vaccincated", "tests", "boosters_1", "boosters_2", "vaccines_distributed" ];
const validProvinces = ["nl", "pe", "ns", "nb", "qc", "on", "mb", "sk", "ab", "bc", "yt", "nt", "nu"];

const errorStat = {error: 'One or more stats are incorrect'};
const errorProvince = {error: 'One or more provinces are incorrect'};
const errorFrom = {error: 'From is formated incorrectly'};
const errorTo = {error: 'To is formated incorrectly'};

function reportsError(provincesList, statsList, from, to){
    // checks if all the stats in statslist are real stats
    for (index in statsList) {
        if(!validStats.includes(statsList[index])) return errorStat;
    }

    // checks if all the provinces in provinceslist are real provinces
    for (index in provincesList) {
        if(!validProvinces.includes(provincesList[index])) return errorProvince;
    }

    // uses helper functiont o verify dates.
    if (!dateVerifier(from)) return errorFrom;
    if (!dateVerifier(to)) return errorTo;
}


module.exports = reportsError;