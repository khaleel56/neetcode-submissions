class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let i = 0, j = height.length-1;
        let lmax = 0, rmax = 0, water=0
        while(i<j){
            if(height[i]<height[j]){
                if(height[i]>=lmax){
                    lmax=height[i]
                }
                else water+=lmax-height[i]
i++
            }else {
                if(height[j]>rmax){
                    rmax=height[j]
                }
                else water+=rmax-height[j]
                j--
            }
        }


    return water
    }
}
