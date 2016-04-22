function walkLeft(spiralArray,n) {
  var newArray = [spiralArray,[]]
  if (n = spiralArray[spiralArray.length - 1]) {
    newArray[1].push(n +2, n+1)
  }
  return newArray
}

console.log(walkLeft( [1,2] , 3))

function walkRight(spiralArray,n) {
  var newArray = [ spiralArray ]
  if (n = spiralArray[0][0] + 1) {
    spiralArray.unshift([n,n+1,n+2])
  }
  return newArray
}

console.log(walkRight( [[6,1,2],[5,4,3]],7) )

function walkUp(spiralArray,n) {
  var newArray = [ spiralArray ]
  if (n = spiralArray[1][0] +1) {
    spiralArray[0].unshift(n+1)
    spiralArray[1].unshift(n)
  }
  return spiralArray
}

console.log(walkUp([[1,2],[4,3]],5))
