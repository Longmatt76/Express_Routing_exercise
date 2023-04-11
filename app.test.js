const { getMean, getMedian, getMode } = require("./mathfuncs");

test("should return the mean from given set of numbers", function () {
  const res = getMean([1, 2, 3, 4, 5]);
  expect(res).toEqual(3);
});

describe("testFindMedian", function () {
  it("finds the median of even set", function () {
    expect(getMedian([3, 5, 7, 8])).toEqual(6);
  });
  it("finds the median of odd set", function () {
    expect(getMedian([2,3,4,5,6])).toEqual(4);
  });
});
