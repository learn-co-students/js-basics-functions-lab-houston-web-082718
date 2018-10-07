function distanceFromHqInBlocks(blocks) {
  if (blocks > 42)
    return (blocks - 42)
  else 
    return (42 - blocks) 
}

function distanceFromHqInFeet(blocks) {
  let blockNum = distanceFromHqInBlocks(blocks)
  return (blockNum * 264)
}

function distanceTravelledInFeet(startBlock, endBlock) {
  if (startBlock > endBlock)
    return (startBlock - endBlock) * 264
  else 
    return (endBlock - startBlock) * 264
}

function calculatesFarePrice(startBlock, endBlock) {
  let distance = distanceTravelledInFeet(startBlock, endBlock)
  if (distance < 400) {
    return 0
  }
  else if (distance > 2500) {
    return `cannot travel that far`
  }
  else if (distance < 2000 && distance > 400)
    return ((distance - 400) * .02)

  else if (distance > 2000) {
    return 25
  }
}