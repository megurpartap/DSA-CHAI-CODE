class BSTNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BSTTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    const newNode = new BSTNode(key);
    if (this.root === null) {
      this.root = newNode;
      return;
    } else {
      this.insertNode(this.root, newNode);
      return;
    }
  }

  insertNode(node, newNode) {
    if (newNode.key === node.key) {
      console.log("key has a duplicate value");
      return;
    }
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
        return;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  delete(key) {
    this.root = this.deleteNode(this.root, key);
  }

  deleteNode(node, key) {
    if (node.key === null) {
      return;
    }
    if (key < node.key) {
      node.left = this.deleteNode(node.left, key);
    } else if (key > node.key) {
      node.right = this.deleteNode(node.right, key);
    } else {
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left === null) {
        console.log("here right node is " + node.key);
        return node.right;
      } else if (node.right === null) {
        console.log("here left node is " + node.key);
        return node.left;
      } else {
        const tempNode = this.findMin(node.right);
        node.key = tempNode.key;
        node.right = this.deleteNode(node.right, tempNode.key);
      }
    }
    return node;
  }

  findMin(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  inorder() {
    if (this.root === null) {
      return;
    } else {
      return this.inOrderTraversal(this.root);
    }
  }

  inOrderTraversal(node, result = []) {
    if (node !== null) {
      this.inOrderTraversal(node.left, result);
      result.push(node.key);
      this.inOrderTraversal(node.right, result);
    }
    return result;
  }

  preorder() {
    if (this.root === null) {
      return;
    } else {
      return this.preOrderTraversal(this.root);
    }
  }

  preOrderTraversal(node, result = []) {
    if (node !== null) {
      result.push(node.key);
      this.preOrderTraversal(node.left, result);
      this.preOrderTraversal(node.right, result);
    }
    return result;
  }

  postorder() {
    if (this.root === null) {
      return;
    } else {
      return this.postOrderTraversal(this.root);
    }
  }

  postOrderTraversal(node, result = []) {
    if (node !== null) {
      this.postOrderTraversal(node.left, result);
      this.postOrderTraversal(node.right, result);
      result.push(node.key);
    }
    return result;
  }
}

const tree = new BSTTree();
tree.insert(10);
tree.insert(9);
tree.insert(8);
tree.insert(7);
tree.insert(11);
tree.insert(12);
tree.insert(13);
tree.delete(7);
console.log(tree.inorder());
