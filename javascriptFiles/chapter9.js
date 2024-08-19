//Chapter Project
document.addEventListener("DOMContentLoaded", function() 
{
    const output = document.querySelector(".output");
    const mainList = output.querySelector("ul");//recieve an object back from query selector
    mainList.id = "mainList";
    console.log(mainList);
    alert("hello");
    const eles = document.querySelectorAll("div");
    for (let x = 0; x < eles.length; x++)
         {
            console.log(eles[x].tagName);
            eles[x].id = "id" + (x + 1);
             if (x % 2) 
                {
                eles[x].style.color = "red";
                }
            else 
                {
                eles[x].style.color = "blue";
                }
        };
});
/*
self check quiz
skipped because not really necessary 
Self-check quiz
You should see an object representing the list of elements contained within body object of the HTML page.
Graphical user interface, text

Description automatically generated
document.body.textContent = "Hello World";
The code is as follows:
for (const property in document) {
    console.log(`${property}: ${document[property]}`);
}
The code is as follows:
for (const property in window) {
    console.log(`${property}: ${document[window]}`);
}
The code is as follows:
<!doctype html>
<html>
<head>
    <title>JS Tester</title>
</head>
<body>
    <h1>Test</h1>
 
    <script>
        const output = document.querySelector('h1');
        output.textContent = "Hello World";
    </script>
</body>
</html>
Go to your favorite website and open the browser console. Type document.body. What do you see in the console?
As we know, with objects, we can write to the property value and assign a new value with the assignment operator. Update the textContent property of the document.body object on a web page of your choosing to contain the string Hello World.
Use what we learned about objects to list out BOM object properties and values. Try it on the document object.
Now do the same for the window object.
Create an HTML file with an h1 tag. Use JavaScript and select the page element with the h1 tag and assign the element into a variable. Update the textContent property of the variable to Hello World.
 */