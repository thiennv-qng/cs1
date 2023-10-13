"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
const ethers_1 = require("ethers");
const utils_1 = require("./utils");
class Node {
    constructor(value) {
        this.value = value;
    }
    hash(sibling) {
        const value = (0, ethers_1.getBytes)((0, ethers_1.keccak256)((0, utils_1.xor)(this.value, sibling.value)));
        return new Node(value);
    }
    toString() {
        return (0, ethers_1.zeroPadValue)((0, ethers_1.hexlify)(this.value), 32);
    }
    eq(node) {
        return this.toString() === node.toString();
    }
}
exports.Node = Node;
//# sourceMappingURL=node.js.map