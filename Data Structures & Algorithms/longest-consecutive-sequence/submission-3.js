class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length == 0) return 0
        let sorted =nums.sort((a,b)=>a-b)
    let reomvedDuplicate =[...new Set([...sorted])]
        console.log(reomvedDuplicate)
        let count=1, max=1
        for(let i=0;i<reomvedDuplicate.length-1;i++){4
                    console.log(reomvedDuplicate[i])

            if(reomvedDuplicate[i+1]-reomvedDuplicate[i] ===1 ){
                count++
                if(max<count){
                    max=count
                }
                    console.log(reomvedDuplicate[i])

            }

            else count=1
        }
    return max
    }
}
