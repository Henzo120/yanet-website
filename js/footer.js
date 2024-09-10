//year js

const calender = document.getElementById('calender');

function Update(){
    const updateYear = new Date;
    const updateIt = updateYear.getFullYear();

    calender.innerHTML = updateIt;
}
Update();
