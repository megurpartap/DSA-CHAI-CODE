const bfs = (root) => {
  const values = [];
  const queue = [];

  if (!root.key) {
    return values;
  }

  while (queue.length > 0) {
    const node = queue.shift();
    values.push(node.key);

    if (node.left !== null) {
      queue.push(node.left);
    }

    if (node.right !== null) {
      queue.push(node.right);
    }
  }

  return values;
};
