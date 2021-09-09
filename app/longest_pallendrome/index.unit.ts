import { longestPallendrome } from './';
import { expect } from 'chai';
import 'mocha';

describe('maxArea', () => {
    it('should return the longest pallendrome', () => {
        const example1 = 'abcbde';
        const example2 = 'llll';

        const result = longestPallendrome(example1);
        const result2 = longestPallendrome(example2);

        expect(result).to.equal(3);
        expect(result2).to.equal(4);
    });
});
