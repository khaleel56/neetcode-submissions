class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0, freq={}, maxLen=0, maxfreq=0;
            for (let right = 0; right < s.length; right++) {
                let ch=s[right];
                freq[ch] = (freq[ch] || 0) + 1
                
                maxfreq = Math.max(maxfreq, freq[ch])
                while(((right-left+1)-maxfreq)>k){
                    freq[s[left]]--;
                    left++
                }
                maxLen = Math.max(maxLen, right-left+1);   
            }
        return maxLen
    }
}
