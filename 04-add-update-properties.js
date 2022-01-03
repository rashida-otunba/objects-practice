//use equal sign to assign a new value 

const dataSample ={
    totalSteps: 677777, 
    avgSteps:95555, 
    workoutsThisWeek: '7 of 8'
};

//updating Properties 

dataSample.totalSteps=70000; //  will add three (3) to yield totalSteps: 70003,
//you can also use square brackets

//you can add to an existing number 

dataSample.totalSteps+= 3;

dataSample['workoutsThisWeek']='10 of 9';

//adding a new property 

dataSample.newpropertie='i am new';

console.log(dataSample);

