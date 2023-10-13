"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tree = void 0;
const node_1 = require("./node");
class Tree {
    constructor(leaves) {
        this.leaves = leaves.sort((a, b) => a.gte(b));
    }
    get root() {
        let root = this.leaves.map((leaf) => new node_1.Node(leaf.value));
        while (root.length > 1) {
            const rs = [];
            for (let i = 0; i <= root.length; i += 2) {
                const currentNode = root[i];
                const nextNode = root[i + 1];
                if (!nextNode) {
                    rs.push(currentNode);
                    break;
                }
                const hash = currentNode.hash(nextNode);
                rs.push(hash);
            }
            root = rs;
        }
        return root[0];
    }
    prove(leaf) {
        let proof = [];
        let node = new node_1.Node(leaf.value);
        let siblings = this.leaves.map((leaf) => new node_1.Node(leaf.value));
        while (!node.eq(this.root)) {
            const index = siblings.findIndex((sibling) => node.eq(sibling));
            if (index === -1)
                throw new Error('The leaf is not valid.');
            let sibling = undefined;
            if (index % 2 === 1)
                sibling = siblings[index - 1];
            else if (index + 1 < siblings.length)
                sibling = siblings[index + 1];
            if (sibling) {
                node = node.hash(sibling);
                proof.push(sibling);
            }
            const cache = [];
            for (let i = 0; i < siblings.length; i += 2) {
                if (i + 1 < siblings.length)
                    cache.push(siblings[i].hash(siblings[i + 1]));
                else
                    cache.push(siblings[i]);
            }
            siblings = cache;
        }
        return proof;
    }
    verify(leaf, proof) {
        let node = new node_1.Node(leaf.value);
        for (let i = 0; i < proof.length; i++)
            node = node.hash(proof[i]);
        return this.root.eq(node);
    }
}
exports.Tree = Tree;
//# sourceMappingURL=tree.js.map