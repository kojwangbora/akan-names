var button=document.querySelector('#butn');

var CC, YY, DD, d, dayValue, MM;


function calculateDayvalue() {
    DD=parseInt(document.getElementById("dayofbirth").value);
    MM=parseInt(document.getElementById("Monthofbirth").value);
    year=document.getElementById("yearofbirth").value;
    CC=parseInt(year.substring(0,2));
    YY=parseInt(year.substring(2,4));
    d=Math.floor(((CC/4) -2 * CC - 1) + (( 5 * YY / 4)) +(( 26 * (MM + 1) / 10)) + DD) % 7;
    console.log(d);
    return (math.floor(d));
}
function validate(){
    let day=document.getElementById("dayofbirth").value;
    let month=document.getElementById("Monthofbirth").value;
    let year=document.getElementById("yearofbirth").value;
}