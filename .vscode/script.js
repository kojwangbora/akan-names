var CC, YY, DD, d, dayValue, MM;
var dNames=["Sunday", "Monday", "Teusday", "Wednessday", "Thursday", "Friday", "Saturday"];
var fNames=["Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afua","Ama"];
var mNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "kwame"];


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
    var gender=document.getElementsByName("g-nder");
    if(document.mainForm.yearbirth.value==""|| document.mainForm.yearbirth.length !=4|| document.mainForm.yearbirth.value<=1799||document.mainForm.yearbirth.value>2099){
    alert("A valid year is Required!");
        document.mainForm.yearbirth.focus() ;
        return false;
    }
    else if(document.mainForm.monthbirth.value==""||isNaN(document.mainForm.monthbirth.value )||
    document.mainForm.monthbirth.value.length!=2 || document.mainForm.monthbirth.value>12 || document.mainForm.monthbirth.value<0){
        alert("A valid month is required!");
        document.mainForm.monthbirth.focus();
        return false;
    }
    else if(document.mainForm.date.value==""||isNaN(document.mainForm.date.value )||
    document.mainForm.date.value.length!=2 || document.mainForm.date.value>31|| document.mainForm.date.value<0){
        alert("A valid month is required!");
        document.mainForm.date.focus();
        return false;
    }
    else if (gender[0]. checked==false&& gender[1].checked==false){
        alert("select gender");
        return false;
    }
    else{
        return true;
    }
    
}
function findGender(){
    var gender= document.getElementsByName("g-nder");
    if(gender[0].checked==true){
        var gender="female";
    }
    else{
        return false;
    }
    switch(gender){
        case"female":
            if(dayValue== 1){
            alert("Akan name is " +fNames[0]+ "!"+ "and your born day is" +dNames[0]);
            }
            else if(dayValue==2){
                alert("Akan name is " +fNames[1]+ "!"+ "and your born day is" +dNames[1]);
            }
            else if(dayValue==3){
                alert("Akan name is " +fNames[2]+ "!"+ "and your born day is" +dNames[2]);
            }
            else if(dayValue==4){
                alert("Akan name is " +fNames[3]+ "!"+ "and your born day is" +dNames[3]);
            }
            else if(dayValue==5){
                alert("Akan name is " +fNames[4]+ "!"+ "and your born day is" +dNames[4]);
            }
            else if(dayValue==6){
                alert("Akan name is " +fNames[5]+ "!"+ "and your born day is" +dNames[5]);
            }
            else if(dayValue==-0){
                alert("Akan name is " +fNames[6]+ "!"+ "and your born day is" +dNames[6]);
            }
        break;
            case"male":
            if(dayValue== 1){
            alert("Akan name is " +mNames[0]+ "!"+ "and your born day is" +dNames[0]);
            }
            else if(dayValue==2){
                alert("Akan name is " +mNames[1]+ "!"+ "and your born day is" +dNames[1]);
            }
            else if(dayValue==3){
                alert("Akan name is " +mNames[2]+ "!"+ "and your born day is" +dNames[2]);
            }
            else if(dayValue==4){
                alert("Akan name is " +mNames[3]+ "!"+ "and your born day is" +dNames[3]);
            }
            else if(dayValue==5){
                alert("Akan name is " +mNames[4]+ "!"+ "and your born day is" +dNames[4]);
            }
            else if(dayValue==6){
                alert("Akan name is " +mNames[5]+ "!"+ "and your born day is" +dNames[5]);
            }
            else if(dayValue==-0){
                alert("Akan name is " +mNames[6]+ "!"+ "and your born day is" +dNames[6]);
            }
        break
        default:

    }
}
 function finDname(){
     dayValue=calculateDayvalue();
     getGender();
 }