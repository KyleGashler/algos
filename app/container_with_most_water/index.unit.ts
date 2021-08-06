import { maxArea } from './';
import { expect } from 'chai';
import 'mocha';

describe('maxArea', () => {
    it('should return the highest volume', () => {
        const result = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
        expect(result).to.equal(49);
    });
});
