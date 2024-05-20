let array = [];

function createRandomArray() {
    const size = parseInt(document.getElementById('arraySize').value);
    array = Array.from({ length: size }, () => Math.floor(Math.random() * 100));
    displayArray();
}

function createSortedArray() {
    const size = parseInt(document.getElementById('arraySize').value);
    array = Array.from({ length: size }, (_, i) => i + 1);
    displayArray();
}

function displayArray() {
    document.getElementById('arrayDisplay').value = array.join(', ');
}

function displayResult(result) {
    document.getElementById('resultDisplay').value = result;
}

function searchArray() {
    const value = parseInt(document.getElementById('searchValue').value);
    const index = array.indexOf(value);
    if (index !== -1) {
        displayResult(`Value ${value} found at index ${index}`);
    } else {
        displayResult(`Value ${value} not found`);
    }
}

function binarySearchArray() {
    const value = parseInt(document.getElementById('searchValue').value);
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (array[mid] === value) {
            displayResult(`Value ${value} found at index ${mid}`);
            return;
        } else if (array[mid] < value) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    displayResult(`Value ${value} not found`);
}

function insertValue() {
    const value = parseInt(document.getElementById('insertValue').value);
    array.push(value);
    array.sort((a, b) => a - b);
    displayArray();
    displayResult(`Value ${value} inserted`);
}

function deleteValue() {
    const value = parseInt(document.getElementById('deleteValue').value);
    const index = array.indexOf(value);
    if (index !== -1) {
        array.splice(index, 1);
        displayArray();
        displayResult(`Value ${value} deleted`);
    } else {
        displayResult(`Value ${value} not found`);
    }
}
