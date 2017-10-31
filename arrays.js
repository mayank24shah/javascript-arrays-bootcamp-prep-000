var chocolateBars = ["chocolateBars","snickers","hundred grand","kitkat","skittles"]
function addElementToBeginningOfArray(array, element){
var x = [element, ...array]
return x
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array 
}
