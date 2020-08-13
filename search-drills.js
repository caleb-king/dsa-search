import BinarySearchTree from './BinarySearchTree.js';
// import largerDataSet from './store.js';
import Queue from './Queue.js';

function myIndexOf(array, value) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

function binarySearch(array, value, inputStart, inputEnd) {
  const start = inputStart === undefined ? 0 : inputStart;
  const end = inputEnd === undefined ? array.length : inputEnd;

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  if (item === value) {
    return index;
  }
  if (item < value) {
    return binarySearch(array, value, index + 1, end);
  }
  if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
}

function testingLinearSearchEfficiency(arr, item) {
  const i = myIndexOf(arr, item);
  if (i === -1) {
    return `Could not find item. It took ${arr.length} tries to discover this information.`;
  }
  return `It took ${i} tries to find the item`;
}

function testingBinarySearchEfficiency(arr, targetItem) {
  let numSearches = 0;

  function howManyBinarySearches(array, value, inputStart, inputEnd) {
    const start = inputStart === undefined ? 0 : inputStart;
    const end = inputEnd === undefined ? array.length : inputEnd;
    numSearches += 1;

    console.log(start, end);

    if (start > end) {
      return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    if (item === value) {
      return index;
    }
    if (item < value) {
      return howManyBinarySearches(array, value, index + 1, end);
    }
    if (item > value) {
      return howManyBinarySearches(array, value, start, index - 1);
    }
  }

  const i = howManyBinarySearches(arr, targetItem);
  if (i === -1) {
    return `Could not find item. It took ${numSearches} tries to discover this information.`;
  }
  return `It took ${numSearches} tries to find the item`;
}

function inOrderTreeTraversal(t, values = []) {
  if (t.left) inOrderTreeTraversal(t.left, values);
  values.push(t.value);
  if (t.right) inOrderTreeTraversal(t.right, values);

  return values;
}

function preOrderTreeTraversal(t, values = []) {
  values.push(t.value);
  if (t.left) preOrderTreeTraversal(t.left, values);
  if (t.right) preOrderTreeTraversal(t.right, values);

  return values;
}

function postOrderTreeTraversal(t, values = []) {
  if (t.left) postOrderTreeTraversal(t.left, values);
  if (t.right) postOrderTreeTraversal(t.right, values);
  values.push(t.value);

  return values;
}

function isEmpty(queue) {
  return queue.first === null;
}

function breadthFirstTraversal(t, values = []) {
  const queue = new Queue();
  let node = t;
  queue.enqueue(node);
  while (!isEmpty(queue)) {
    node = queue.dequeue();
    values.push(node.value);
    if (node.left) queue.enqueue(node.left);
    if (node.right) queue.enqueue(node.right);
  }
  return values;
}

function buildCommandStructure() {
  const bst = new BinarySearchTree();
  bst.insert(5, 'Captain Picard');
  bst.insert(3, 'Commander Riker');
  bst.insert(6, 'Commander Data');
  bst.insert(2, 'Lieutenant Commander Worf');
  bst.insert(1, 'Lieutenant Security Officer');
  bst.insert(4, 'Lieutenant Commander LaForge');
  bst.insert(8, 'Lieutenant Commander Crusher');
  bst.insert(7, 'Lieutenant Selar');
  return bst;
}

function findMaxProfit(sharePriceArr) {
  let maxProfit = sharePriceArr[1] - sharePriceArr[0];
  let buyAt = sharePriceArr[0];
  let sellAt = sharePriceArr[1];
  for (let i = 0; i < sharePriceArr.length; i += 1) {
    for (let j = i + 1; j < sharePriceArr.length; j += 1) {
      const currProfit = sharePriceArr[j] - sharePriceArr[i];
      if (currProfit > maxProfit) {
        maxProfit = currProfit;
        buyAt = sharePriceArr[i];
        sellAt = sharePriceArr[j];
      }
    }
  }
  return `Max profit would be if you bought at $${buyAt} per share and sold at $${sellAt} per share, profiting $${maxProfit} per share.`;
}

function main() {
  // const sortedList = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];
  // console.log(binarySearch(sortedList, 16));
  // console.log(testingLinearSearchEfficiency(largerDataSet, 17));
  // largerDataSet.sort((a, b) => a - b);
  // console.log(testingBinarySearchEfficiency(largerDataSet, 60));
  const BST = new BinarySearchTree();
  // eslint-disable-next-line prettier/prettier
  const sampleData = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];
  sampleData.forEach(value => BST.insert(value, value));
  const inOrderValues = inOrderTreeTraversal(BST);
  console.log('inOrderValues: ', inOrderValues);
  const preOrderValues = preOrderTreeTraversal(BST);
  console.log('preOrderValues: ', preOrderValues);
  const postOrderValues = postOrderTreeTraversal(BST);
  console.log('postOrderValues: ', postOrderValues);
  // const commandStructure = buildCommandStructure();
  // const commandOrder = breadthFirstTraversal(commandStructure);
  // console.log(commandOrder.join(', '));
  // const lastWeeksSharePrices = [128, 97, 121, 123, 98, 97, 105];
  // console.log(findMaxProfit(lastWeeksSharePrices));
}

main();
