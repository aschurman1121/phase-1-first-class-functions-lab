// Code your solution in this file!

const returnFirstTwoDrivers = drivers => [drivers[0], drivers[1]];

// const returnFirstTwoDrivers = (arrayOfDrivers) => {
//     return arrayOfDrivers.slice(0,2);
// }


const returnLastTwoDrivers = drivers => drivers.slice(-2)




const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]




function createFareMultiplier (multiplier) {
    return (fare) => 
    {return multiplier * fare };
}

const fareDoubler = createFareMultiplier(2)
fareDoubler(10)

const fareTripler = createFareMultiplier(3)
fareTripler(10)

function selectDifferentDrivers(drivers, selectingDrivers) {
    console.log(drivers, selectingDrivers);
    return selectingDrivers(drivers)
}


/*
// myArray = ['ali', 'vineet', 'pawan']
// // myArray(); 

// last = myArray.length-1
// console.log(myArray[last])

// function returnFirstTwoDrivers(firstNames){
//     const myArray = [firstNames[0], firstNames[1]]
//     return myArray

// }

const returnFirstTwoDrivers = firstNames => [firstNames[0], firstNames[1]];


const returnLastTwoDrivers = lastNames => [lastNames[lastNames.length - 2], lastNames[lastNames.length - 1]]


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(x) {
    return y => x * y
}

const fareDoubler = createFareMultiplier(2) 

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arr, func) {
   if(func == returnFirstTwoDrivers) {
       return returnFirstTwoDrivers(arr);
   } else {
       return returnLastTwoDrivers(arr)
   }
   
}

// const returnLastTwoDrivers = lastNames => {
//    let lastElementLocation = lastNames.length -1;
//    let secondLastElementLocation = lastNames.length - 2;
//    let myArray = [lastNames[lastElementLocation], lastNames[secondLastElementLocation]]
//    return myArray
// }
*/