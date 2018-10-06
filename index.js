// Code your solution in this file!

function distanceTravelledInFeet(start, finish) {
    let feet;
    if (start > finish) {
        feet =  ((start - finish) * 264)
    } else if (finish > start) {
        feet = ((finish - start) * 264)
    }
    return feet;
}

function calculatesFarePrice(start, finish) {
    let price;
    let feet;
    let blocks;
    feet = distanceTravelledInFeet(start, finish)
    blocks = distanceFromHqInBlocks(start)
    if (feet < 400 ) {
        price = 0 
    } else if  (feet < 2000) {
        price = ((feet - 400) * .02)
    } else if (feet > 2000 && feet < 2500) {
        price = 25
    } else {
        price = 'cannot travel that far'
    }
    return price
}

// return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'


function distanceFromHqInBlocks(input) {
    let outcome;
    if (input > 42) {
        outcome = (input - 42);
    } else if (42 > input) {
        outcome = (42 - input);
    }
return outcome
}

function distanceFromHqInFeet(start) {
    let outcome;
    if (start > 42) {
        outcome =  ((start - 42) * 264)
    } else if (42 > start) {
        outcome = ((42 - start) * 264)
    }
    return outcome;
}



