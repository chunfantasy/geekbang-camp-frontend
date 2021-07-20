import { calculate } from "../../src/calculate";

describe("Test calculate", () => {
  it("成对的单层括号", () => {
    expect(calculate("(1+2)*(3-1)")).toEqual(((1+2)*(3-1)).toString());
  });
  it("括号里套括号", () => {
    expect(calculate("5+(4/(8+1))")).toEqual((5+(4/(8+1))).toString());
  });
  it("括号里套括号再套括号", () => {
    expect(calculate("(5+(4/(8+1)))*10")).toEqual(
      ((5+(4/(8+1)))*10).toString()
    );
  });
  it("复杂计算", () => {
    expect(calculate("(10-5+(4/(8+1)))*10")).toEqual(
      ((10-5+(4/(8+1)))*10).toString()
    );
  });
  it("负数计算", () => {
    expect(calculate("(-10-5+(4/(8+1)))*10")).toEqual(
      ((-10-5+(4/(8+1)))*10).toString()
    );
  });
  it("负数开头计算", () => {
    expect(calculate("-10-5+(4/(8+1))*10")).toEqual(
      (-10-5+(4/(8+1))*10).toString()
    );
  });
});
