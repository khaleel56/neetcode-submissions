class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let freq={}, output =true
        for(let s of s1){
            freq[s]=(freq[s] || 0) +1
        }
        console.log(freq)
        let keys1=Object.keys(freq)
        for(let i=0;i<s2.length;i++){
            let subs = s2.slice(i, s1.length+i)
            console.log(subs)
            let freq2={}
            for(let s of subs){
                freq2[s]=(freq2[s] || 0) +1
            }
                    console.log(freq2)

            let keys2=Object.keys(freq2)

            if(keys1.length === keys2.length){
                let match = true;
                for(let key of keys1){
                    if(freq[key]!==freq2[key]){
                        match= false
                        break;
                    }
                    console.log(output)
                }
                if(match) return true
                
            } 


        }
        return false
    }
}
