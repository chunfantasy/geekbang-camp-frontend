import { encode64 } from "..";

describe('Test input', () => {
  it('Should throw error when input is a string', () => {
    expect(() => {
      encode64('abc');
    }).toThrowError();
  });
  it('Should calculate correctly', () => {
    expect(encode64(123.456)).toBe('1X.tbNGvLDr8G3B');
  });
  it('Should calculate correctly', () => {
    expect(encode64(123)).toBe('1X.000000000000');
  });
  it('Should calculate correctly', () => {
    expect(encode64(0.456)).toBe('0.tbNGvLDr8G3B');
  });
  it('Should calculate correctly', () => {
    expect(encode64(123321.456654)).toBe('u6V.tet6OU/g3xYR');
  });
  it('Should calculate correctly', () => {
    expect(encode64(0.1)).toBe('0.6pCpCpCpCpCp');
  });
});
