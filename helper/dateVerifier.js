function dateVerifier(date){
    // 2020-05-06

    // handles no input and wrong lengths
    if (date===undefined) return true;
    if (!(date.length===10)) return false;

    // stores as variables to decrease time (iterates the string less)
    const year = parseInt(date.substring(0,4));
    const month = parseInt(date.substring(5,7));
    const day = parseInt(date.substring(8,10));

    // API allows for yyyy.mm.dd and yyyy/mm/dd and more formats. I do not wish to limit it
    // if (!(date.substring(4,5)==="-")||!(date.substring(7,8)==="-")) return false;
    
    // handles each constraint, covid occured in 2020
    if (!(year>=2020)) return false;
    else if (!(month<=12&&month>0)) return false;
    else if (!(day<=31&&day>0)) return false;
 
    //defaults to true
    return true;
}

module.exports = dateVerifier;