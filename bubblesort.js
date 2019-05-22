function swap(arr, i, j){
    let elem = arr[j]
    arr[j] = arr[i]
    arr[i] = elem
}


function bubbleSort(arr) {
    for(let i=0; i<arr.length; i++){
        for(let j = 1; j < arr.length; j++){
            if(arr[j-1] > arr[j]){
                swap(arr, j-1, j)
            }
        }
    }
    return arr
  }

bubbleSort([9,5,6,7,2,4])