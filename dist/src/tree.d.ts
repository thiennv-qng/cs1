import { Leaf } from './leaf';
import { Node } from './node';
export declare class Tree {
    readonly leaves: Leaf[];
    constructor(leaves: Leaf[]);
    get root(): Node;
    prove(leaf: Leaf): Node[];
    verify(leaf: Leaf, proof: Node[]): boolean;
}
