

const number = {
    100: 'one-hundred', 
    16: 'sixteen',
    '76 trombones': 'great song'
}

// console.log(number.100);// will return an error 

//another way of accessing the object item using array brackets 

console.log(number[100]); // will return 'one-hundred'; even though it is a number in the example, JS will turn it into a string 

console.log(number['100']);// turning it into a string will return the exact same result as the above 'one-hundred'

//this secondary method of notation is also used when an object name does not follow JS conventions 


console.log(number['76 trombones']);// will return 'great song'
//square brackets must always use quotes

const palette={
    red: 7666,
    yellow: 888, 
    green: 999 
}

//also used when there is a variable or a dynamic value as the key 


let mysteryColor='yellow'; 

console.log(palette[mysteryColor]) //will return 888; looking for the value of mysteryColor (yellow) and returns it to palette 

console.log(palette.mysteryColor)//this cannot work because it is actually looking for a value called mysteryColor ; this will return undefined 

console.log(palette['gre'+'en']); // will return 999 and evaluate to conclude green is what is being looked for 
