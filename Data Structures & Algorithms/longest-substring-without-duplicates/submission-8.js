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
        }
        return max
    }
}
