import { maxArea } from './';
import { expect } from 'chai';
import 'mocha';

describe('Hello function', () => {
    it('should return hello world', () => {
        const result = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
        expect(result).to.equal(49);
    });
});
