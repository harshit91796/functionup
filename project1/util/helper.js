
function printDate(){
    let currentDate = new Date();
    let day = currentDate.getDate();

    return day;
}


function printMonth(){
    let currentMonth = new Date();
    let month = currentMonth.getMonth()+1;

    return month;
}

function getBatchInfo(){
   

    return ('Californium, W3D4, the topic for today is Nodejs module system');
}

export {printDate,printMonth,getBatchInfo} 