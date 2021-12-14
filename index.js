
// getting the day (d) value where the value ranges from (0-6)
function calculateDayValue(){
  year = document.getElementById("yr").value;
  CC = parseInt(year.substring(0,2));
  YY = parseInt(year.substring(2,4));
  MM = parseInt(document.getElementById("mnth").value);
  DD = parseInt(document.getElementById("dt").value);
  d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
  console.log(d);
  return (Math.floor(d));
}

// declaration of variables

var CC, YY, MM, DD, d, dayValue;
var dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var mNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var fNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

// finding the gender and asigning the akan names based on the days
// ie, Sunday=0, monday=1, teusday=2, wednessday=3 etc...

function findGender(){
  var genders = document.getElementsByName("mfnames");
  if(genders[0].checked == true){
    var gender = "male";
  }
  else if(genders[1].checked == true){
    var gender = "female";
  }
  else{
    return false;
  }
  switch(gender){
    case "male":
      if (dayValue == 1){
        alert("Your akan name is " +mNames[0]+"💪🏿");
      }
      if(dayValue == 2){
        alert("Your akan name is " +mNames[1]+"💪🏿");
      }
      if(dayValue == 3){
        alert("Your akan name is " +mNames[2]+"💪🏿");
      }
      if(dayValue == 4){
        alert("Your akan name is " +mNames[3]+"💪🏿");
      }
      if(dayValue == 5){
        alert("Your akan name is " +mNames[4]+"💪🏿");
      }
      if(dayValue == 6){
        alert("Your akan name is " +mNames[5]+"💪🏿");
      }
      if(dayValue == -0){
        alert("Your akan name is " +mNames[6]+"💪🏿");
      }
    break;
    case "female":
      if (dayValue == 1){
        alert("Your akan name is  " +fNames[0]+"👧🏿");
      }
      if(dayValue == 2){
        alert("Your akan name is " +fNames[1]+"👧🏿");
      }
      if(dayValue == 3){
        alert("Your akan name is " +fNames[2]+"👧🏿");
      }
      if(dayValue == 4){
        alert("Your akan name is " +fNames[3]+"👧🏿");
      }
      if(dayValue == 5){
        alert("Your akan name is " +fNames[4]+"👧🏿");
      }
      if(dayValue == 6){
        alert("Your akan name is " + fNames[5]+"👧🏿");
      }if(dayValue == -0){
        alert("Your akan name is " +fNames[6]+"👧🏿");
      }
    break
    default:
          
  }
// validation of the form's entry boxes (year, date month)
function validate() {
  var genders = document.getElementsByName("mfnames");
  if( document.mainForm.year.value.length !=4 
    || document.mainForm.year.value <=1) {
     alert( "Enter valid year of birth!" );
     document.myForm.year.focus() ;
     return false;
  }
  else if( document.mainForm.month.value.length != 2 
    || document.mainForm.month.value > 12  
    || document.mainForm.month.value <= 1){
     alert( "Enter valid month of birth!" );
     document.mainForm.month.focus() ;
     return false;
  }
  else if( document.mainForm.date.value.length != 2
    || isNaN( document.mainForm.date.value ) 
    || document.mainForm.date.value > 31
    || document.mainForm.date.value<=0) {
     alert( "Enter valid day of birth!" );
     document.mainForm.date.focus() ;
     return false;
  }
  else if(genders[0].checked==false && genders[1].checked==false ) {
      alert("select male or female");
      return false;
  }   
  else{
    return true ;
  }
  
}







}
function nameCheckout(){
  dayValue = calculateDayValue();
  findGender();
}