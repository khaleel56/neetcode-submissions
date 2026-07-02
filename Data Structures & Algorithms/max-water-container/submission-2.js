class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max=0
        let i=0,j=heights.length-1
            while(i<j){
                let width =j-i
                let height =Math.min(heights[i], heights[j])
                let water=width*height
                if(max<water){
                    max=water
                }
                if(heights[i]<heights[j]){
                    i++
                } else j--
        }
        return max
    }
}
