function getName(){
    let mNames=["Kwasi", "kwadwo", "Kwabena", "kwaku", "yaw", "kofi", "kwame"];
    let fNames=["Akosua", "Adwoa", "Abenaa", "Akua", "yaa", "Afua", "Ama"];
    let weekDays=["Sunday", "Monday", "Teusday","Wednessday", "Thursday","Friday", "Saturday"];
    let index =calcDay();
    var maleGender= document.querySelector("#male")
    var femaleGender= document.querySelector("#female")
    var kwasiNames;
    if (weekDays[index]&& maleGender.checked){
        kwasiNames=mNames[index]
    }
    if (weekDays[index]&& femaleGender.checked){
        kwasiNames=fNames[index]
    }
    var name= document.querySelector('#name')
    name.innerHTML = kwasiNames;

}


var button= document.querySelector('#checkname');





function calcDay(day, month, year) {
    var day=document.getElementsByClassName("date").value;
    var month=document.getElementsByClassName("monthbirth").value;
    var year=document.getElementsByClassName("yearbirth").value;
    let dd = day;
    let mm =month;
    let yearArr = year.toString().split("");
    let cc= parseInt(yearArr.slice(0,2).join(""));
    let yy = parseInt(yearArr.slice(2).join(''));
    if (year>=2000){
        yy = 100 + parseInt(yearArr.slice(2).join(''));
    }
    let d = math.floor((((cc/4)-2*cc-1) +((5*yy /4))+((26*(mm+1)/10))+dd)%7);
    return d

}

function validate(){
    let day= document.getElementsById("datebirth").value;
    let month= document.getElementsById("monthbirth").value;
    let year= document.getElementsById("yr").value;
    if ( day==null|| day<1 || day>31){
        alert("Enter valid date!")
    }
    if ( month==null|| month<1 || month>12){
        alert("Enter valid month!")
    }
    if ( year==null|| year<1800 || year>2099){
        alert("Enter valid date!")
    }
}

button.addEventListener('click', () => {
    getName();
    validate()
    let results = document.querySelector('.results');

  })