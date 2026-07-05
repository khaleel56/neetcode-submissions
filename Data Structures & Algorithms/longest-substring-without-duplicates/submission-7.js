class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let temp=new Set(),left =0,max=0
        for(let right=0;right<s.length;right++){
             let c=s[right]
             while(temp.has(c))
             {
                temp.delete(s[left])
                left++
             }
             temp.add(s[right])
             max=Math.max(temp.size, max)
            // if(!temp.includes(c)){
            //     temp+=c
            //     if(max<temp.length){
            //         max=temp.length
            //     }
            // } else{
            //     let index=temp.indexOf(c)
            //     temp=temp.slice(index+1,temp.length)+c
            //     if(max<temp.length){
            //         max=temp.length
            //     }
            // }
        }
        return max
    }
}
