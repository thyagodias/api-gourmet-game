import Node from '../models/Node.js'
import BinarySearchTree from '../services/BinarySearchTree.js'

let tree = new BinarySearchTree();

  tree.root = new Node('massa')
  
  tree.root.right = new Node('macarrao')
  tree.root.right.parent = tree.root
  
  tree.root.left = new Node('bolo')
  tree.root.left.parent = tree.root


export default tree