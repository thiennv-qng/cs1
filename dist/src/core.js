"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerkleDistribution = void 0;
const ethers_1 = require("ethers");
const MerkleDistribution_json_1 = __importDefault(require("../abi/MerkleDistribution.json"));
class MerkleDistribution {
    constructor({ tree, wallet, contractAddress = '0x83A3D0C9c4508f1be74693f8D97478411bcc5818', }) {
        this.tree = tree;
        this.contract = new ethers_1.Contract(contractAddress, MerkleDistribution_json_1.default, wallet);
    }
    async token() {
        const address = await this.contract.token();
        return address;
    }
    async verify(address) {
        const leaf = this.tree.leaves.find((leaf) => leaf.address === address);
        if (!leaf)
            return false;
        const proof = this.tree.prove(leaf);
        const verified = this.tree.verify(leaf, proof);
        if (!verified)
            return false;
        const claimed = await this.contract.claimed(address);
        if (claimed)
            return false;
        return true;
    }
    async claim(address) {
        const leaf = this.tree.leaves.find((leaf) => leaf.address === address);
        if (!leaf)
            throw new Error('Invalid receiver');
        const proof = this.tree.prove(leaf);
        await this.contract.claim(leaf.amount, proof.map((e) => e.value));
    }
}
exports.MerkleDistribution = MerkleDistribution;
//# sourceMappingURL=core.js.map