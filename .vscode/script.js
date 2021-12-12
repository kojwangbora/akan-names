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
    if(day==null1||day>31||day<1){
        alert("valid Day is required")
    }
    if(month==null||month>12||month<1){
        alert("valid Month is required")
    }
    if(year==null|| year<1){
        alert("valid Year is required")
    }
    
}
button.addEventListener('click',()=>{
    getName();
    validate()
    let results=document.querySelector('#results');
    
})