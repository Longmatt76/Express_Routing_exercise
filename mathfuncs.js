function getMean(nums) {
  total = 0;
  for (let num of nums) {
    total += num;
  }
  result = total / nums.length;
  return result;
}

function getMedian(nums) {
  if (nums.length % 2 != 0) {
    result = nums[Math.floor(nums.length / 2)];
  } else {
    result = result = (nums[nums.length / 2 - 1] + nums[nums.length / 2]) / 2;
  }
  return result;
}

// function getMode(nums) {

// }

exports.getMean = getMean;
exports.getMedian = getMedian;

