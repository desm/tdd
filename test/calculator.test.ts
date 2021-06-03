import { sum } from '../src/calculator';

it('should add numbers', () => {
    expect(sum(0)).toEqual(0);
    expect(sum(1)).toEqual(1);
    expect(sum(1)).toEqual(1);
    expect(sum(1, 1)).toEqual(2);
    expect(sum(1, 1, 1)).toEqual(3);
    expect(sum(1, 1, 1)).toEqual(3);
    expect(sum(1, 2, 3)).toEqual(6);
});
