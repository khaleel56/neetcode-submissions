class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res=[], preffix=1,suffix=1
        for(let i=0;i<nums.length;i++){
             res[i]=preffix;
             preffix*=nums[i]
        }
for(let i=nums.length-1;i>=0;i--){
    res[i] *= suffix;
        suffix *= nums[i];

        }
            return res

    }
}
