class ListNode {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

class LinkedList {
  constructor() {
      this.head = null;
  }

  append(value) {
      const newNode = new ListNode(value);
      if (this.head === null) {
          this.head = newNode;
      } else {
          let current = this.head;
          while (current.next !== null) {
              current = current.next;
          }
          current.next = newNode;
      }
  }

  find(value) {
      let current = this.head;
      while (current !== null) {
          if (current.value === value) {
              return current;
          }
          current = current.next;
      }
      return null;
  }

  findByIndex(index) {
      let current = this.head;
      let count = 0;
      while (current !== null) {
          if (count === index) {
              return current;
          }
          count++;
          current = current.next;
      }
      return null;
  }

  insertAt(index, value) {
      const newNode = new ListNode(value);
      if (index === 0) {
          newNode.next = this.head;
          this.head = newNode;
      } else {
          let current = this.head;
          let previous = null;
          let count = 0;
          while (count < index && current !== null) {
              previous = current;
              current = current.next;
              count++;
          }
          if (current === null) {
              throw new Error("Index out of bounds");
          }
          previous.next = newNode;
          newNode.next = current;
      }
  }

  remove(value) {
      if (this.head === null) {
          return;
      }
      if (this.head.value === value) {
          this.head = this.head.next;
          return;
      }
      let current = this.head;
      let previous = null;
      while (current !== null && current.value !== value) {
          previous = current;
          current = current.next;
      }
      if (current === null) {
          return;
      }
      previous.next = current.next;
  }
}

class DoublyListNode {
  constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
  }

  append(value) {
      const newNode = new DoublyListNode(value);
      if (this.head === null) {
          this.head = newNode;
          this.tail = newNode;
      } else {
          this.tail.next = newNode;
          newNode.prev = this.tail;
          this.tail = newNode;
      }
  }

  find(value) {
      let current = this.head;
      while (current !== null) {
          if (current.value === value) {
              return current;
          }
          current = current.next;
      }
      return null;
  }

  findByIndex(index) {
      let current = this.head;
      let count = 0;
      while (current !== null) {
          if (count === index) {
              return current;
          }
          count++;
          current = current.next;
      }
      return null;
  }

  insertAt(index, value) {
      const newNode = new DoublyListNode(value);
      if (index === 0) {
          newNode.next = this.head;
          if (this.head !== null) {
              this.head.prev = newNode;
          }
          this.head = newNode;
          if (this.tail === null) {
              this.tail = newNode;
          }
      } else {
          let current = this.head;
          let count = 0;
          while (count < index && current !== null) {
              current = current.next;
              count++;
          }
          if (current === null) {
              throw new Error("Index out of bounds");
          }
          newNode.next = current;
          newNode.prev = current.prev;
          if (current.prev !== null) {
              current.prev.next = newNode;
          }
          current.prev = newNode;
      }
  }

  remove(value) {
      let current = this.head;
      while (current !== null && current.value !== value) {
          current = current.next;
      }
      if (current === null) {
          return;
      }
      if (current.prev !== null) {
          current.prev.next = current.next;
      } else {
          this.head = current.next;
      }
      if (current.next !== null) {
          current.next.prev = current.prev;
      } else {
          this.tail = current.prev;
      }
  }
}

class CircularDoublyListNode {
  constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
  }
}

class CircularDoublyLinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
  }

  append(value) {
      const newNode = new CircularDoublyListNode(value);
      if (this.head === null) {
          this.head = newNode;
          this.tail = newNode;
          newNode.next = newNode;
          newNode.prev = newNode;
      } else {
          newNode.prev = this.tail;
          newNode.next = this.head;
          this.tail.next = newNode;
          this.head.prev = newNode;
          this.tail = newNode;
      }
  }

  find(value) {
      let current = this.head;
      if (current === null) return null;
      do {
          if (current.value === value) {
              return current;
          }
          current = current.next;
      } while (current !== this.head);
      return null;
  }

  findByIndex(index) {
      let current = this.head;
      let count = 0;
      if (current === null) return null;
      do {
          if (count === index) {
              return current;
          }
          count++;
          current = current.next;
      } while (current !== this.head);
      return null;
  }

  insertAt(index, value) {
      const newNode = new CircularDoublyListNode(value);
      if (index === 0) {
          if (this.head === null) {
              this.head = newNode;
              this.tail = newNode;
              newNode.next = newNode;
              newNode.prev = newNode;
          } else {
              newNode.next = this.head;
              newNode.prev = this.tail;
              this.head.prev = newNode;
              this.tail.next = newNode;
              this.head = newNode;
          }
      } else {
          let current = this.head;
          let count = 0;
          do {
              if (count === index) {
                  newNode.next = current;
                  newNode.prev = current.prev;
                  current.prev.next = newNode;
                  current.prev = newNode;
                  if (current === this.head) {
                      this.tail = newNode;
                  }
                  return;
              }
              count++;
              current = current.next;
          } while (current !== this.head);
          throw new Error("Index out of bounds");
      }
  }

  remove(value) {
      let current = this.head;
      if (current === null) return;
      do {
          if (current.value === value) {
              if (current === this.head) {
                  if (this.head === this.tail) {
                      this.head = null;
                      this.tail = null;
                  } else {
                      this.head = current.next;
                      this.head.prev = this.tail;
                      this.tail.next = this.head;
                  }
              } else if (current === this.tail) {
                  this.tail = current.prev;
                  this.tail.next = this.head;
                  this.head.prev = this.tail;
              } else {
                  current.prev.next = current.next;
                  current.next.prev = current.prev;
              }
              return;
          }
          current = current.next;
      } while (current !== this.head);
  }
}

// Основной функционал для управления массивами и списками

let array = [];
let linkedList = new LinkedList();
let doublyLinkedList = new DoublyLinkedList();
let circularDoublyLinkedList = new CircularDoublyLinkedList();

function generateArrayAndLists() {
  const arraySize = parseInt(document.getElementById('arraySize').value);
  array = Array.from({ length: arraySize }, () => Math.floor(Math.random() * 100));

  linkedList = new LinkedList();
  doublyLinkedList = new DoublyLinkedList();
  circularDoublyLinkedList = new CircularDoublyLinkedList();

  array.forEach(value => {
      linkedList.append(value);
      doublyLinkedList.append(value);
      circularDoublyLinkedList.append(value);
  });

  displayResults();
}

function displayResults() {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = `<h2>Array</h2><pre>${JSON.stringify(array, null, 2)}</pre>`;
  
  resultsDiv.innerHTML += `<h2>Linked List</h2><pre>${linkedListToString(linkedList)}</pre>`;
  resultsDiv.innerHTML += `<h2>Doubly Linked List</h2><pre>${doublyLinkedListToString(doublyLinkedList)}</pre>`;
  resultsDiv.innerHTML += `<h2>Circular Doubly Linked List</h2><pre>${circularDoublyLinkedListToString(circularDoublyLinkedList)}</pre>`;
}

function linkedListToString(list) {
  let result = [];
  let current = list.head;
  while (current !== null) {
      result.push(current.value);
      current = current.next;
  }
  return JSON.stringify(result, null, 2);
}

function doublyLinkedListToString(list) {
  let result = [];
  let current = list.head;
  while (current !== null) {
      result.push(current.value);
      current = current.next;
  }
  return JSON.stringify(result, null, 2);
}

function circularDoublyLinkedListToString(list) {
  let result = [];
  let current = list.head;
  if (current === null) return JSON.stringify(result, null, 2);
  do {
      result.push(current.value);
      current = current.next;
  } while (current !== list.head);
  return JSON.stringify(result, null, 2);
}

function swapArrayElements(array, index1, index2) {
  if (index1 >= 0 && index1 < array.length && index2 >= 0 && index2 < array.length) {
      [array[index1], array[index2]] = [array[index2], array[index1]];
  }
}

function swapListElements(list, value1, value2) {
  const node1 = list.find(value1);
  const node2 = list.find(value2);
  if (node1 && node2) {
      const temp = node1.value;
      node1.value = node2.value;
      node2.value = temp;
  }
}

function insertIntoArray(array, index, value) {
  array.splice(index, 0, value);
}

function removeFromArray(array, index) {
  array.splice(index, 1);
}

function findInArray(array, value) {
  return array.indexOf(value);
}

function handleSwapElements() {
  const value1 = parseInt(prompt("Enter first value to swap:"));
  const value2 = parseInt(prompt("Enter second value to swap:"));
  swapArrayElements(array, findInArray(array, value1), findInArray(array, value2));
  swapListElements(linkedList, value1, value2);
  swapListElements(doublyLinkedList, value1, value2);
  swapListElements(circularDoublyLinkedList, value1, value2);
  displayResults();
}
