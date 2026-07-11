class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        function bs(l, r) {
            if (l>=r) return -1;
            let mid = Math.floor((l + r) / 2)
            if (target == nums[mid]) {
                console.log(nums[mid], target)
                return mid
            }
            if (target < nums[mid]) {
                return bs(l, mid)
            } else if (target > nums[mid]) {
                return bs(mid + 1, r)
            }
        }
        const x = bs(0, nums.length)
        return x
    }
}
