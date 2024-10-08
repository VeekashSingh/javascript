//Chapter Project
//Employee Tracking App
class Employee {
    constructor(first, last, years) {
        this.first = first;
        this.last = last;
        this.years = years;
    }
}
const person1 = new Employee("Laurence", "Svekis", 10);
const person2 = new Employee("Jane", "Doe", 5);
const workers = [person1, person2];
Employee.prototype.details = function(){
    return this.first + " " + this.last + " has worked here " +
           this.years + " years";
}
workers.forEach((person) => {
    console.log(person.details());
});

//Menu items Price Calculator
class Menu {
    #offer1 = 10;
    #offer2 = 20;
    constructor(val1, val2) {
        this.val1 = val1;
        this.val2 = val2;
    }
    calTotal(){
        return (this.val1 * this.#offer1) + (this.val2 * this.#offer2);
    }
    get total(){
        return this.calTotal();
    }
}
 
const val1 = new Menu(2,0);
const val2 = new Menu(1,3);
const val3 = new Menu(3,2);
console.log(val1.total);
console.log(val2.total);
console.log(val3.total);
/*
self check quiz
Summary:
const is used to declare variables and objects that should not be reassigned, enhancing code reliability and clarity.
While const does not make objects immutable, it ensures that the variable's reference cannot be changed, reducing the risk of accidental errors.
Using const where appropriate helps create more robust and maintainable code by clearly defining the intended usage and reducing the likelihood of unintentional changes.
 */