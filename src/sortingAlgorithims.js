//
export function bubbleSort(arr, animations, cout){
    let i = 0;
    let j = 0;
    if (i < arr.length) {
        for (let j = 0; j < arr.length - i - 1; j++) {
          let a = arr[j];
          let b = arr[j + 1];
          if (a > b) {
            swap(arr, j, j + 1);
            animations.push([j, j+1, true, cout])
          }
        }
      } else {
        i = 0;
        return animations;
      }
      i++;
      return animations;
}

const swap = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
};

export function mergeSort(arr){
    const animations = [];
    if(arr.length <= 1) return arr;
    const auxArr = arr.slice();
    mergeSortHelper(arr, 0, arr.length - 1, auxArr, animations);
    return animations;
}

function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxArr,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxArr, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxArr, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxArr, animations);
}
//
function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    animations.push([i, j, false]);
    animations.push([i, j, false]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      //swaping below
      animations.push([k, auxiliaryArray[i], true, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      //swaping below
      animations.push([k, auxiliaryArray[j], true, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    animations.push([i, i, false]);
    animations.push([i, i, false]);
    //swaping below
    console.log(auxiliaryArray[i], i)
    animations.push([k, auxiliaryArray[i], true, auxiliaryArray[k]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    animations.push([j, j, false]);
    animations.push([j, j, false]);
    //swapping below
    console.log(auxiliaryArray[j], mainArray[j])
    animations.push([k, auxiliaryArray[j], true,  auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}

function quickSwap(items, leftIndex, rightIndex) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

function partition(items, left, right, animations) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
    i       = left, //left pointer
    j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            quickSwap(items, i, j); //swapping two elements
            animations.push([i, j, true])
            i++;
            j--;
        }
    }
    return i;
}

export function quickSort(items, left, right, animations) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right, animations); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1, animations);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right, animations);
        }
    }
    return items;
}

export function insertionSort(arr, animations){
    for(let i = 0; i < arr.length; i++){
        let curr = arr[i]
        let j = i - 1

        while (j >= 0 && arr[j] > curr) {
            arr[j + 1] = arr[j]
            animations.push([j, j+1])
            j--
        }

        arr[j + 1] = curr
    }
    return animations;
}
