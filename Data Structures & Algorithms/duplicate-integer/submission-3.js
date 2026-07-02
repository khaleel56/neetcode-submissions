class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        
        let x = new Set([...nums])
        if(x.size === nums.length) {
            return false
        } else return true
    }
}
