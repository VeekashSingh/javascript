//Chapter Project 11.1
const elements = document.getElementsByTagName("div");
const firstElement = elements[0];
let buttonClicked = null;
firstElement.addEventListener("dblclick", function(){
    firstElement.style.backgroundColor = "red";
    buttonClicked = firstElement.innerHTML;
})
const secondElement = elements[1];
secondElement.addEventListener("click",function(){
    secondElement.style.backgroundColor = "blue";
    buttonClicked = secondElementElement.innerHTML;
})
const thirdElement = elements[2];
thirdElement.addEventListener("click",function(){
    thirdElement.style.backgroundColor = "green";
    buttonClicked = thirdElement.innerHTML;
})
const fourthElement = elements[3];
fourthElement.addEventListener("click",function(){
    fourthElement.style.backgroundColor = "yellow";
    buttonClicked = fourthElement.innerHTML;
})
/*
another way of doing this 
// Assuming 'divs' is a NodeList or an array of <div> elements
divs.forEach((el) => { // Loop through each <div> element in the 'divs' collection
    el.addEventListener("click", () => { // Add a click event listener to each <div>
        // When the <div> is clicked, this function executes
        document.body.style.backgroundColor = el.textContent; // Set the background color of the body to the text content of the clicked <div>
 */
