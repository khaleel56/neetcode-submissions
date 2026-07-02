class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let output=new Set()
        for(let i=0;i<nums.length-2;i++){
            for(let j=i+1;j<nums.length-1;j++){
                for(let k=j+1;k<nums.length;k++){
                    if(nums[i]+nums[j]+nums[k] ===0){
                        const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
                        output.add(triplet.join(","))
                    }
                }
            }
        }
        return [...output].map(str => str.split(",").map(Number))
    }
}
