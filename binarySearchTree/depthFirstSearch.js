const dfs = (root) => {
  const values = [];
  const stack = [root];

  if (root.key === null) {
    return values;
  }

  while (stack.length > 0) {
    const node = stack.pop();
    values.push(node.key);

    if (node.right !== null) {
      stack.push(node.right);
    }
    if (node.left !== null) {
      stack.push(node.left);
    }
  }
  return values;
};

const dfsRecursive = (root) => {
  if (root === null) {
    return [];
  }

  const leftValues = dfsRecursive(root.left);
  const rightValues = dfsRecursive(root.right);

  return [root.key, ...leftValues, ...rightValues];
};
