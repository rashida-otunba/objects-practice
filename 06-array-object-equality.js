


let nums = [1,2,3];
let mystery = [1,2,3];


nums === mystery //will return false even though they have the same value 

//this relatedt o the reference array / object issue; when JS stores an array it is storing the reference to the array not the array content iteself

//although mystery looks the exact same, the address/lcoation that is stored in the array memory is not the same as the address of nums 

// to make the array location equal assign the value to point to nums directly likebelow 

let moreNums=nums;  //this will return the nums array 

const user ={
    notifications : []
};

if(!user.notifications.length){ //will run if there are NO new notifications 
    console.log('no new notifications')
}