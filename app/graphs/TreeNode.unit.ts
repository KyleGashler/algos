import { expect } from 'chai';
import 'mocha';

import TreeNode from './TreeNode';
import Tree from './Tree';

describe('TreeNode Tests', () => {
    it('should print the expected values for DFS', () => {
        const tree = new Tree(100);
        const node1 = new TreeNode(1, 99);
        const node2 = new TreeNode(2, 3);
        const node3 = new TreeNode(3, 19);
        const node4 = new TreeNode(4, -20);
        const node5 = new TreeNode(5, 33);
        const node6 = new TreeNode(6, 3663);
        const node7 = new TreeNode(7, 3663);
        const node8 = new TreeNode(8, 3663);
        const node9 = new TreeNode(9, 3663);
        tree.addNode(node1);
        tree.addNode(node2);
        tree.addNode(node3);
        tree.addNode(node4);
        tree.addNode(node5);
        tree.addNode(node6);
        tree.addNode(node7);
        tree.addNode(node8);
        tree.addNode(node9);
        tree.setConnection(0, 1);
        tree.setConnection(0, 2);
        tree.setConnection(2, 6);
        tree.setConnection(1, 3);
        tree.setConnection(1, 4);
        tree.setConnection(1, 5);
        tree.setConnection(3, 7);
        tree.setConnection(4, 8);
        tree.setConnection(4, 9);

        expect(JSON.stringify(tree.breadthFirstSearch())).to.equal('[0,1,2,3,4,5,6,7,8,9]');
    });
});
