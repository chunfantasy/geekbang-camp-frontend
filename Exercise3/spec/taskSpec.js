import { reverse } from "..";

describe('Test reversing linked list', () => {
  it('should work with any linked list', () => {
    expect(reverse([])).toEqual([]);
    expect(reverse([1, 2])).toEqual([2, 1]);
    expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
    expect(reverse([1, 2, 3])).toEqual([1, 2, 3].reverse());
  });
});
