// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  return Math.abs(location - 42)
}

function distanceFromHqInFeet(block) {
  return Math.abs(block - 42) * 264
}

function distanceTravelledInFeet(block1, block2) {
  return Math.abs(block1 - block2) * 264
}

function blocksToFeet(block) {
  return block * 264
}

function calculatesFarePrice(start, distance) {
  let total = Math.abs(blocksToFeet(start) - blocksToFeet(distance))
  console.log(total)
  if (total < 400) {
    return 0
  } else if (400 < total && total < 2000) {
    return (total - 400) * 0.02
  } else if (total > 2000 && total < 2500) {
    return 25
  } else if (total > 2500) {
    return 'cannot travel that far'
  }
}
