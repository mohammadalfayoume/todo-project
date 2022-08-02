var name,gender,age,answersArr;

getInformation(name,gender,age);

quistions(answersArr);


function getInformation(name, gender, age) {
    var name= prompt("Enter your name, please");
    var gender=prompt("Enter your gender (male or female)");
    for (var i=0; ;i++){
        if (gender!=="male" && gender!=="female"){
        alert("you should select (male or female)");
        var gender=prompt("Enter your gender (male or female)");
        }
        else {
            break;
        }
    }
    var age = prompt("Enter your age");
    if (age<0) {
        alert("Invalid age !!!"); 
    }
    var skip=prompt("write 'confirm' and click 'Ok' if you want to skip welcoming massage.\nIf you want to see welcome massage click 'Cancel'");
    if (skip !== "confirm") {
        if (gender==="male") {
            alert("Welecom Mr."+name);
        }
        else if (gender === "female") {
            alert("Welecom Ms."+name);
        }
        else {
            alert("Welecom "+name); 
        }
    }
    return console.log(name,gender,age) ;
}

function quistions(answersArr) {
    var q1=prompt("Are you Married?");
    if ((q1 !== "yes" && q1 !== "no")){
        return alert("Invalid")
    }
    var q2=prompt("Are you Employee?");
    if ((q2 !== "yes" && q2 !== "no")){
        return alert("Invalid")
    }
    var q3=prompt("Are you Avaliable?");
    if ((q3 !== "yes" && q3 !== "no")){
        return alert("Invalid")
    }
    var answersArr=[q1,q2,q3];
    for (let i=0 ; i<answersArr.length ; i++) {
    return console.log(answersArr);
}
}