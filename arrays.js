var chocolateBars = ["chocolateBars","snickers","hundred grand","kitkat","skittles"]
function addElementToBeginningOfArray(array, element){
var x = [element, ...array]
return x
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array, element){
  var x = [...array,element]
  return x
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array 
}
