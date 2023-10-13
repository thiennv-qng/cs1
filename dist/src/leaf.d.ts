export declare class Leaf {
    readonly address: string;
    readonly amount: bigint;
    constructor(address: string, amount: bigint);
    get value(): Uint8Array;
    gte(leaf: Leaf): 1 | -1 | 0;
}
