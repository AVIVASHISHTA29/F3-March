console.log("Sorting");

// const arr = ["def", "xyz", "abc"];

// console.log("ORIGINAL>>>", arr);
// console.log("SORTED>>>", arr.sort());

// const arr2 = [26, 33, 12, 5, 99, 63, 72];
// console.log("ORIGINAL>>>", arr2);
// console.log(
//   "SORTED>>>",
//   arr2.sort((a, b) => a - b)
// );

function mergeTwoSortedArrays(arr1, arr2) {
  var i = 0;
  var j = 0;
  var arr3 = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      arr3.push(arr1[i]);
      i++;
    } else {
      arr3.push(arr2[j]);
      j++;
    }
  }
  if (i == arr1.length) {
    arr3 = arr3.concat(arr2.slice(j));
  } else {
    arr3 = arr3.concat(arr1.slice(i));
  }

  console.log("merged array", arr3);
  return arr3;
}

// const myArr1 = [3];
// const myArr2 = [8];

// console.log("my arr1", myArr1);
// console.log("my arr2", myArr2);

// console.log("merging 2 arrays", mergeTwoSortedArrays(myArr1, myArr2));

function mergeSort(arr) {
  // [9,6] -> [9]
  if (arr.length <= 1) {
    return arr;
  } else {
    // 9,6,3,8 -> // [9,6]
    const leftArr = arr.slice(0, arr.length / 2); // [9,6] - > [9] ->[6,9]

    const rightArr = arr.slice(arr.length / 2); // [3,8] -> [6]

    return mergeTwoSortedArrays(mergeSort(leftArr), mergeSort(rightArr));
  }
}

const myArr = [9, 6, 3, 5];
console.log("unsorted", myArr);
console.log("Merge Sort result", mergeSort(myArr));
