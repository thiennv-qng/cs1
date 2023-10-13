export declare class Node {
    readonly value: Uint8Array;
    constructor(value: Uint8Array);
    hash(sibling: Node): Node;
    toString(): string;
    eq(node: Node): boolean;
}
