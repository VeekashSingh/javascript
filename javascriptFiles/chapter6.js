//Chapter Project
//Recursive function
const main = function counter(i) {
    console.log(i);
    if (i < 10) {
        return counter(i + 1);
    }
    return;
}
main(0);
//set a timeout order 
const one  = ()=> console.log('one'); 
const two  = ()=> console.log('two'); 
const three = () =>{
    console.log('three'); 
    one(); 
    two(); 
}
const four = () =>{
    console.log('four');  
    setTimeout(one,0); 
    three();
}
four();

/*
self check quiz
Arrow Functions: Shorter syntax, lexical this, no arguments object.
Anonymous Functions: Standard function syntax, own this, have arguments object.
Why Store a Function in a Variable?
Function Expression:

The pattern you're using is called a function expression. Instead of defining a function with a function declaration, you're defining it and immediately assigning it to a variable (main). This allows you to control the scope and visibility of the function.
Naming the Function:

Even though you're storing the function in a variable, you've also given the function a name (counter). This name is local to the function itself, meaning it's only accessible inside the function. This can be useful for recursion (as in your example), where the function needs to call itself.
Flexibility:

By storing the function in a variable, you can later change the implementation of the function by reassigning the variable, if it's not declared with const. However, with const, the function's reference cannot be reassigned, though the contents (the implementation) of the function can still execute and perform operations like any other function.
Recursion:

In your example, the counter function is recursive. It calls itself until the base condition (i >= 10) is met. The name counter inside the function allows it to reference itself, even though the function is stored in the main variable.
Encapsulation:

The pattern allows for encapsulation. If counter were not named, you'd only be able to refer to it via main. Naming it as counter lets the function refer to itself internally without exposing the name counter to the outside scope.

Calling four():

console.log('four'); is executed immediately, so 'four' is logged first.
setTimeout(one, 0); schedules one to run after 0 milliseconds. However, even though the delay is 0, one will not run immediately; it will be executed after the current call stack is clear, meaning after the current synchronous code finishes.
three() is then called, which logs 'three', followed by one() and two(). This will log 'three', 'one', and 'two' in that order.
What Happens Next?

After three() completes, the event loop checks the task queue, sees that the function one scheduled by setTimeout is ready to run, and then executes it. This results in 'one' being logged again, but only after all the synchronous code has finished.
 */