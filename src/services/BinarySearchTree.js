import Node from '../models/Node.js'

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  addKind = (dish, kind, root) => {
    const kindNode = new Node(kind)
    const dishNode = new Node(dish)

    let node = this.getNode(root)

    let father = node.parent

    if (father.right && father.right.value == root) {
      father.right = kindNode
    }

    if (father.left && father.left.value == root) {
      father.left = kindNode
    }

    node.parent = kindNode
    kindNode.parent = father
    kindNode.left = node
    kindNode.right = dishNode
  }

  getNode(value) {
    let queue = [this.root]
    while (queue.length) {
      let curr = queue.shift()

      if (curr.value == value) {
        return curr
      }

      if (curr.right) {
        queue.push(curr.right)
      }

      if (curr.left) {
        queue.push(curr.left)
      }
    }
    return null
  }

  getKind(kind) {
    return this.getNode(kind)
  };
};

export default BinarySearchTree