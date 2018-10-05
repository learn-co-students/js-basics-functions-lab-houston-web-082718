// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    if (blocks >= 42) {
        return blocks - 42;
    } else {
        return 42 - blocks;
    }
}

function distanceFromHqInFeet(blocks) {
    if (blocks >= 42) {
        return (blocks - 42) * 264;
    } else {
        return (42 - blocks) * 264;
    }
}

function distanceTravelledInFeet(start, destination) {
    if (start >= destination) {
        return (start - destination) * 264;
    } else {
        return (destination - start) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}