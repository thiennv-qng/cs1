import { Contract, ContractRunner } from 'ethers';
import { Tree } from './tree';
export declare class MerkleDistribution {
    readonly tree: Tree;
    readonly contract: Contract;
    constructor({ tree, wallet, contractAddress, }: {
        tree: Tree;
        wallet: ContractRunner;
        contractAddress?: string;
    });
    token(): Promise<string>;
    verify(address: string): Promise<boolean>;
    claim(address: string): Promise<void>;
}
