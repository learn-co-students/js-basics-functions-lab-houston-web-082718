// Code your solution in this file!
function distanceFromHqInBlocks (blocks) {
    return Math.abs(blocks - 42)
};

function distanceFromHqInFeet (blocks) {
    return Math.abs(distanceFromHqInBlocks(blocks) * 264);
};

function distanceTravelledInFeet(x,y) {
    return Math.abs((y-x) * 264);
};

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400) {
        return 0;
    } else if (distanceTravelledInFeet(start, destination) >= 400  && distanceTravelledInFeet(start, destination) < 2000) {
        return (distanceTravelledInFeet(start, destination)-400) * 0.02;
    } else if (distanceTravelledInFeet(start, destination) >= 2000  && distanceTravelledInFeet(start, destination) < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
};