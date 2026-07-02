class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b)
        let output = new Set()
        for (let i = 0; i < nums.length - 2; i++) {

            let left = i + 1, right = nums.length - 1
            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];
                if (sum === 0) {
                    output.add([nums[i], nums[left], nums[right]].join(","))
                    left++;
                    right--;
                }
                if (sum < 0) {
                    left++
                }
                if (sum > 0) {
                    right--
                }
            }
        }
        return [...output].map(str => str.split(",").map(Number))
    }
}
