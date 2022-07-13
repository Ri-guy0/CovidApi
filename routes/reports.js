const router = require('express').Router();
const _ = require('lodash');
const reportsLogic = require('../logic/reportsLogic');
const reportsError = require('../logic/reportsError')

const allProvinces = "nl,pe,ns,nb,qc,on,mb,sk,ab,bc,yt,nt,nu";


router.get('/', async function(req, res, next) {
    // retrieve data from the query
    let {provinces, stats, from, to} = req.query;

    // defaults stats to all
    if (stats===undefined) stats='all';
    if (provinces===undefined) provinces=allProvinces;

    // splits the provinces and statss
    const provincesList = provinces.split(",");
    const statsList = stats.split(",");

    // error handling function
    const reportError = reportsError(provincesList, statsList, from, to); 
    
    if (reportError===undefined){
        // convert dates to strings the api can read. 
        if (!(from===undefined)) from=`&after=${from}`;
        else from='';

        if (!(to===undefined)) to=`&before=${to}`;
        else to='';

        // fetchs and manipulates data. 
        let reportData = await reportsLogic(provincesList, statsList, to, from);

        // gives json response
        res.json({provinces_data: reportData});
    } else {
        // gives error json response
        res.json(reportError);
    }
    
    
})

module.exports = router; 