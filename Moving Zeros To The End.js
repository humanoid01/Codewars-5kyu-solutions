/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/
var moveZeros = function (arr) {
  let k = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1)
      i--
      k++
    }
  }
  for (let i = 0; i < k; i++) {
    arr.push(0)
  }
  return arr
}
var moveZeros = function (arr) {
  const filteredList = arr.filter((num) => num !== 0)
  const zeroList = arr.filter((num) => num === 0)
  return [...filteredList, ...zeroList]
}
