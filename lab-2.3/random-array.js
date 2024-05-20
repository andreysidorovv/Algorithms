let array = [];
let originalArray = [];

function createRandomArray() {
    const size = parseInt(document.getElementById('arraySize').value);
    array = Array.from({ length: size }, () => Math.floor(Math.random() * 100));
    originalArray = [...array];
    displayArray();
}

function duplicateArray() {
    array = [...originalArray];
    displayArray();
}

function displayArray() {
    document.getElementById('arrayDisplay').value = array.join(', ');
}

function displaySortedArray(sortedArray) {
    document.getElementById('sortedArrayDisplay').value = sortedArray.join(', ');
}

function sortArray() {
    const algorithm = document.getElementById('sortingAlgorithm').value;
    let sortedArray = [];
    switch (algorithm) {
        case 'insertionSort':
            sortedArray = insertionSort([...array]);
            break;
        case 'selectionSort':
            sortedArray = selectionSort([...array]);
            break;
        case 'mergeSort':
            sortedArray = mergeSort([...array]);
            break;
        case 'quickSort':
            sortedArray = quickSort([...array]);
            break;
    }
    displaySortedArray(sortedArray);
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const right = arr.filter(x => x > pivot);
    const middle = arr.filter(x => x === pivot);
    return quickSort(left).concat(middle).concat(quickSort(right));
}
