function bubbleSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - i - 1; j++) {
      if(arr[j] > arr[j + 1])
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
}

function selectSort(arr){
  for(let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for(let j = i; j < arr.length; j++)
      if(arr[minIndex] > arr[j]) minIndex = j;      
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];    
  }
  return arr;
}

function insertionSort(arr){
  for(let i = 1; i < arr.length; i++) {
    for(let j = i - 1; j >= 0 && j + 1 < arr.length; j--) {
      if(arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
}

console.log(bubbleSort([5, 9, 1, 3, 2]));
console.log(selectSort([5, 9, 1, 3, 2]));
console.log(insertionSort([5, 9, 1, 3, 2]));