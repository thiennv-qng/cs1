"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Leaf = void 0;
const ethers_1 = require("ethers");
class Leaf {
    constructor(address, amount) {
        this.address = address;
        this.amount = amount;
    }
    get value() {
        const abiCoder = new ethers_1.AbiCoder();
        return (0, ethers_1.getBytes)((0, ethers_1.keccak256)((0, ethers_1.toBeArray)(abiCoder.encode(['address', 'uint'], [this.address, this.amount]))));
    }
    gte(leaf) {
        if (this.address > leaf.address)
            return 1;
        if (this.address < leaf.address)
            return -1;
        if (this.amount > leaf.amount)
            return 1;
        if (this.amount < leaf.amount)
            return -1;
        return 0;
    }
}
exports.Leaf = Leaf;
//# sourceMappingURL=leaf.js.map