//Chapter Project
let num = 100;
let found = false;
while(!found){
    let val = prompt("Please enter a number");
    val = Number(val);
    if (val>num){
        console.log("the number is greater than the value");
    }
    else if (val<num){
        console.log("the number is smaller than the value");
    }
    else if (val === num ){
        console.log("number found yay");
        found = true;
    }
}
/*
self check quiz
 */