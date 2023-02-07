function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const middleIndex = Math.ceil(arr.length / 2);
  const arrL = mergeSort(arr.splice(0, middleIndex));
  const arrR = mergeSort(arr.splice(-middleIndex));

  const newArr = [];
  function sort(leftArr, rightArr, lai = 0, rai = 0) {
    // lai= left array index, rai=right array index
    if (lai >= leftArr.length && rai >= rightArr.length) return;
    if (lai >= leftArr.length || rightArr[rai] < leftArr[lai]) {
      newArr.push(rightArr[rai]);
      sort(leftArr, rightArr, lai, ++rai);
    } else {
      newArr.push(leftArr[lai]);
      sort(leftArr, rightArr, ++lai, rai);
    }
  }
  sort(arrL, arrR);

  return newArr;
}

const unsortedArr = [9, 2, 5, 7, 72, 24, 986, 123, 0];
console.log(`Sorted! ${mergeSort(unsortedArr)}`);
