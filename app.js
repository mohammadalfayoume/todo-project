var name,gender,age,answersArr;

getInformation(name,gender,age);

quistions(answersArr);


function getInformation(name, gender, age) {
    var name= prompt("Enter your name, please");
    var gender=prompt("Enter your gender (male or female)");
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
    var q1=confirm("Are you Married?");
    var q2=confirm("Are you Employee?");
    var q3=confirm("Are you Avaliable?");
    var answersArr=[q1,q2,q3];
    return console.log(answersArr);
}