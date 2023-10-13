"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xor = void 0;
const xor = (...arr) => {
    if (!arr || !arr.length)
        throw new Error('Cannot XOR empty input.');
    const [init, ...rest] = arr;
    return rest.reduce((result, next) => {
        if (result.length !== init.length)
            throw new Error('Cannot XOR different length inputs.');
        return result.map((el, i) => el ^ next[i]);
    }, init);
};
exports.xor = xor;
//# sourceMappingURL=utils.js.map