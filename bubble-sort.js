function bubbleSort(arr, upToIndex){
  var swapped = false;
  var upToIndex = arr.length;
  //needs nested for loop
  for(var i = 0; i < arr.length; i ++){
    for (var j = 0; j < upToIndex; j++) {
      if(arr[j] > arr[j+1]){
        swapped = true;
        arr = swap(arr, j, j+1);
      }
   }
   upToIndex--;
   if(swapped == false){
    return arr; //means its all sorted
   } else {
    swapped = false;
   }
  }
  return arr;
}

var swap = function(arr, index1, index2){
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;
}
