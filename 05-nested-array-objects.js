// you can fill objects with keys that are arrays or other objects 

const student = {
    firstName: 'Daniel',
    lastName: 'Smith',
    stengths: ['art', 'history'],
    exams: {
        midterm: 89,
        final: 78
    }
};

//quiz: access  the exams in the array and add them together 

let midtermAvg = (student.exams.midterm + student.exams.final) / 2;

console.log(midtermAvg); //will return the average 83.5

//example 2 = each element in the array is an object 

const shoppingCart=[
    {
        product: 'Chess',
        price: 2.99, 
        quantity: 4
    },
    {
        product: 'Checkers ',
        price: 9.99, 
        quantity: 3
    },
    {
        product: 'Clue ',
        price: 1.99, 
        quantity: 2
    }

];

//array is a reference type; values are not stored in memory only  the reference 
//objects are also reference types 
//actual objects are not stored they are storing the reference 
//const is used because we want the reference to remain the same 
//you cannot reassign the obejct to anything different once it is declared 

const palette={
    red: 6784,
    green: 8888, 
};

const palette2=palette;

console.log(palette2);// will return everything in palette 

palette2.yellow=34444; 

console.log(palette2);// will return everything in palette + yellow value that was added in line 16; { red: 6784, green: 8888, yellow: 34444 }


