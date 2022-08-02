var name,gender,age,skip,answersArr;

getInformation(name,gender,age, skip);

quistions(answersArr);

printData();




function getInformation(name, gender, age, skip) {
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
    return name,gender,age,skip ;
}

function quistions(answersArr) {
    var q1=confirm("Are you Married?");
    var q2=confirm("Are you Employee?");
    var q3=confirm("Are you Avaliable?");
    var answersArr=[q1,q2,q3];
    return answersArr;
}

function printData(){
    console.log(name,gender,age);
    console.log(answersArr);
    // console.log(name);
    // console.log(gender);
    // console.log(age);
    // console.log(answersArr);

}

// function isMarried(q1) {
//     var q1=confirm("Are you Married? (yes or no)");
//     return q1;
// };

// function isEmployee(q2) {
//     var q2=confirm("Are you Employee? (yes or no)");
//     return q2;
// };

// function isAvaliable(q3) {
//     var q3=confirm("Are you Avaliable? (yes or no)");
//     return q3;
// };

    
// var name= prompt("Enter your name, please");
// console.log(name);

// var gender=prompt("Enter your gender (male or female)");
// console.log(gender);

// var age = prompt("Enter your age");
// if (age <=0) {
//     console.log(alert("Invalid !!!!"));
// }

// var skip=prompt("write 'confirm' and click 'Ok' if you want to skip welcoming massage.\nIf you want to see welcome massage click 'Cancel'");

// if (skip !== "confirm"){

//     if (gender==="male") {
//         console.log(alert("Welecom Mr."+name));
//     }
//     else if (gender === "female") {
//         console.log(alert("Welecom Ms."+name));
//     }
//     else {
//         console.log(alert("Welecom "+name)); 
//     }
// }






