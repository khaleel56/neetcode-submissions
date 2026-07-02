class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count={}
        for(const num of nums)
            count[num] =(count[num] ||0) +1

        let res=Object.entries(count).sort((a, b) => b[1] - a[1])
        return res.slice(0, k).map(pair => Number(pair[0]))
        return res
    }}
