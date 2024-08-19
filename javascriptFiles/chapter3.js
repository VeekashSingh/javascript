//Chapter Project
//3.1
let list = ["Milk","Bread","Apples"];
console.log(list.length);
list[1] = "bananas";
console.log(list);
//3.2
const myList = [];//the variable cannot be reassigned only pushed or popped too array cannot be assigned a new array
myList.push("Milk", "Bread", "Apples");
myList.splice(1, 1, "Bananas", "Eggs"); //updates bread with bananas and eggs 
const removeLast = myList.pop();
myList.sort(); //sort list alphabetically
console.log(myList.indexOf("Milk"));
myList.splice(1, 0, "Carrots", "Lettuce");
const myList2 = ["Juice", "Pop"];
const finalList = myList.concat(myList2, myList2);
console.log(finalList.lastIndexOf("Pop"));
console.log(finalList);
//Chapter Project
const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];
theList.pop();
theList.shift();
theList.unshift("FIRST");//adds first to the beginning of the array
theList[3] = "hello World";
theList[2] = "Middle";
theList.push("LAST"); 
console.log(theList);

//company product catalog
const inventory = [];
const item1 ={
    name:"name1",
    model:"model1",
    cost:"cost1",
    quantity:"quantity1"
}
const item2 ={
    name:"name2",
    model:"model2",
    cost:"cost2",
    quantity:"quantity2"
}
const item3 ={
    name:"name3",
    model:"model3",
    cost:"cost3",
    quantity:"quantity3"
}
/*
self check quiz
Can you use const and update values within an array?
yes
Which property in an array gives the number of items contained in the array?
.length
What is the output in the console?
const myArr1 = [1,3,5,6,8,9,15];
console.log(myArr1.indexOf(0));
console.log(myArr1.indexOf(3));
How do you replace the second element in an array myArr = [1,3,5,6,8,9,15] with the value 4?
What is the output in the console?
const myArr2 = [];
myArr2[10] = 'test'
console.log(myArr2);
console.log(myArr2[2]);

What is the output in the console?
const myArr3 = [3,6,8,9,3,55,553,434];
myArr3.sort();
myArr3.length = 0;
console.log(myArr3[0]);
 */