function mergeSort(arr) {
  // console.log(arr);
  if (arr.length < 2) {
    return arr;
  }
  // spliting array
  const middleIndex = Math.ceil(arr.length / 2);
  const leftHalf = arr.splice(0, middleIndex);
  const rightHalf = arr.splice(-middleIndex);

  // sort left half
  const arrL = mergeSort(leftHalf);
  //   console.log(`Left ${arrL}`);

  // sort right half
  const arrR = mergeSort(rightHalf);

  // merge sorted halves
  const newArr = [];

  // function sort(leftArr, rightArr, lai, rai) {
  //   if (lai >= leftArr.length && rai >= rightArr.length) return;
  //   if (leftArr[lai] < rightArr[rai]) {
  //     newArr.push(leftArr[lai]);
  //     if (lai === leftArr.length - 1) {
  //       newArr.push(rightArr[rai]);
  //       sort(leftArr, rightArr, lai, ++rai);
  //     }
  //     sort(leftArr, rightArr, ++lai, rai);
  //   } else if (leftArr[lai] > rightArr[rai]) {
  //     newArr.push(rightArr[rai]);
  //     if (rai === rightArr.length - 1) {
  //       newArr.push(leftArr[lai]);
  //       // sort(leftArr, rightArr, ++lai, rai);
  //     }
  //     sort(leftArr, rightArr, lai, ++rai);
  //   }
  // }
  function sort(leftArr, rightArr, lai = 0, rai = 0) {
    if (lai >= leftArr.length && rai >= rightArr.length) return;
    if (lai >= leftArr.length) {
      newArr.push(rightArr[rai]);
      sort(leftArr, rightArr, lai, ++rai);
    } else if (rai >= rightArr.length) {
      newArr.push(leftArr[lai]);
      sort(leftArr, rightArr, ++lai, rai);
    } else if (leftArr[lai] < rightArr[rai]) {
      newArr.push(leftArr[lai]);
      sort(leftArr, rightArr, ++lai, rai);
    } else {
      newArr.push(rightArr[rai]);
      sort(leftArr, rightArr, lai, ++rai);
    }
  }
  sort(arrL, arrR, 0, 0);
  // console.log(`left ${arrL}`);
  // console.log(`right ${arrR}`);
  console.log(`new ${newArr}`);
  return newArr;
}

const unsortedArr = [9, 2, 5, 7, 72, 24, 986, 123];
console.log(`Final! ${mergeSort(unsortedArr)}`);
