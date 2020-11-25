import Node from '../models/Node';

class SearchTree {
  constructor() {
    this.root = null;
  }

  addKind(dish, kind, root) {
    const kindNode = new Node(kind);
    const dishNode = new Node(dish);

    const node = this.getNode(root);

    const father = node.parent;

    if (father.right !== null && father.right.value === root) {
      father.right = kindNode;
    }

    if (father.left !== null && father.left.value === root) {
      father.left = kindNode;
    }

    node.parent = kindNode;
    kindNode.parent = father;
    kindNode.left = node;
    kindNode.right = dishNode;
  }

  getNode(value) {
    const queue = [this.root];
    while (queue.length) {
      const curr = queue.shift();

      if (curr.value === value) {
        return curr;
      }

      if (curr.right) {
        queue.push(curr.right);
      }

      if (curr.left) {
        queue.push(curr.left);
      }
    }
    return null;
  }

  getKind(kind) {
    return this.getNode(kind);
  }
}

export default SearchTree;
