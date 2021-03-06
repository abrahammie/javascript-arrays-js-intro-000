var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(a,e) {
  return [e, ...a];
}

function destructivelyAddElementToBeginningOfArray(a,e) {
  a.unshift(e);
  return a;
}

function addElementToEndOfArray(a,e) {
  return [...a, e];
}

function destructivelyAddElementToEndOfArray(a,e) {
  a.push(e);
  return a;
}

function accessElementInArray(a,i) {
  return a[i];
}

function destructivelyRemoveElementFromBeginningOfArray(a) {
  a.shift();
  return a;
}

function removeElementFromBeginningOfArray(a) {
  var newArray = a.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(a) {
  a.pop();
  return a;
}

function removeElementFromEndOfArray(a) {
  var newArray = a.slice(0, a.length-1);
  return newArray;
}
