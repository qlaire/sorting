function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */
  var midPoint = Math.floor(wholeArray.length/2);
  var firstHalf = wholeArray.slice(0,midPoint);
  var secondHalf = wholeArray.slice(midPoint);

  return [firstHalf, secondHalf];
}

function merge(arr1,arr2){
  var sortedArray = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      sortedArray.push(arr1.shift());
    } else {
      sortedArray.push(arr2.shift());
    }
  }
  if (arr1.length) {
    sortedArray = sortedArray.concat(arr1);
  } else {
    sortedArray = sortedArray.concat(arr2);
  }
  return sortedArray;
}

function mergeSort(array) {
  var firstHalf;
  var secondHalf;
  if(array.length > 1){ //split into two
    firstHalf = split(array)[0];
    secondHalf = split(array)[1];
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
  else{
    return array;
  }
}
