class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let temp="",max=0
        for(let c of s){
            if(!temp.includes(c)){
                temp+=c
                if(max<temp.length){
                    max=temp.length
                }
            } else{
                let index=temp.indexOf(c)
                temp=temp.slice(index+1,temp.length)+c
                if(max<temp.length){
                    max=temp.length
                }
            }
        }
        return max
    }
}
