

var month1 = document.getElementById('month1');
var month2 = document.getElementById('month2');
var month3 = document.getElementById('month3');
var year1 = document.getElementById('year1');
var year2 = document.getElementById('year2');
var year3 = document.getElementById('year3');
month1.addEventListener('change',
    function () {
        document.getElementById('mes1').innerText = month1.value + "/";
        console.log(month1.value);
    });

year1.addEventListener('change',
    function () {
        document.getElementById('año1').innerText = year1.value;
        console.log(year1.value);
    });

month2.addEventListener('change',
    function () {
        document.getElementById('mes2').innerText = month2.value + "/";
        console.log(month2.value);
    });

year2.addEventListener('change',
    function () {
        document.getElementById('año2').innerText = year2.value;
        console.log(year2.value);
    });

month3.addEventListener('change',
    function () {
        document.getElementById('mes3').innerText = month3.value + "/";
        console.log(month3.value);
    });

year3.addEventListener('change',
    function () {
        document.getElementById('año3').innerText = year3.value;
        console.log(year3.value);
    });


