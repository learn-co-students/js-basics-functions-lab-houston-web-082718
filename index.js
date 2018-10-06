// Code your solution in this file!

//distanceFromHqInBlocks: Returns the number of blocks from Scuber's headquarters 
//to the pickup location.
function distanceFromHqInBlocks(pickupBlock) {
    const headquarterBlock = 42;
    return Math.abs(pickupBlock - headquarterBlock);
}

//distanceFromHqInFeet: Returns the number of feet from Scuber's headquarters to 
//the pickup location.
function distanceFromHqInFeet(pickupBlock) {
    const blockFeet = 264;
    return distanceFromHqInBlocks(pickupBlock) * blockFeet;
}

//distanceTravelledInFeet: Calculates the number of feet a passenger travels 
//given a starting block and an ending block
function distanceTravelledInFeet(startingBlock, endingBlock) {
    const blockFeet = 264;
    return Math.abs(startingBlock - endingBlock) * blockFeet;
}

//calculatesFarePrice: Given the same starting and ending block as the previous test 
//(hint hint), return the fare for the customer. 
function calculatesFarePrice(startingBlock, endingBlock) {
    const distance = distanceTravelledInFeet(startingBlock, endingBlock);
    //The first four hundred feet are free.
    if (distance <= 400) {
        return 0;
    }
    //For a distance between 400 and 2000 feet, the price is 2 cents per foot 
    else if (distance > 400 && distance <= 2000){
        return (distance - 400) * 0.02;
    }
    //Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet.
    else if (distance > 2000 && distance <= 2500){
        return 25;
    }
    //Scuber does not allow any rides over 2500 feet - the function returns 
    //'cannot travel that far' if a ride over 2500 feet is requested.
    else {
        return 'cannot travel that far';
    }
}


