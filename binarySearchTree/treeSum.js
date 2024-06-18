const treesSumWithBfs = (root) => {
  if (root === null) {
    return 0;
  }
  const queue = [root];
  const sum = 0;

  while (queue.length > 0) {
    const node = queue.shift();
    sum += node.key;

    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
  }
  return sum;
};

const dfsSumRescursive = (root) => {
  if (root == null) {
    return 0;
  }

  return root.key + dfsSumRescursive(root.left) + dfsSumRescursive(root.right);
};
