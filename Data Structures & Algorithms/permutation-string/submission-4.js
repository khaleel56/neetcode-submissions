class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let freq={}, freq2={}, output =true
        for(let s of s1){
            freq[s]=(freq[s] || 0) +1
        }

        let keys1=Object.keys(freq)
        for(let i=0;i<s2.length;i++){
            let subs = s2.slice(i, s1.length+i)
            let freq2={}
            for(let s of subs){
                freq2[s]=(freq2[s] || 0) +1
            }
            let keys2=Object.keys(freq2)

            if(keys1.length === keys2.length){
                let match = true;
                for(let key of keys1){
                    if(freq[key]!==freq2[key]){
                        match= false
                        break;
                    }
                }
                if(match) return true
                
            } 
        }
        return false
    }
}
