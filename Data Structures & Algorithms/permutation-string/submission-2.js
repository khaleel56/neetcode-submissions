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
                                    console.log(keys1, keys2)
                output=true
                for(let key of keys1){
                    if(freq[key]!==freq2[key]){
                        output= false
                        break;
                    }
                    console.log(output)
                }
                if(output == true) return true
                
            } else output= false


        }
        return output
        // function getPermutaitons(s1){
        //     if(s1.length==1) return [s1]
        // let result=[]

        //     for(let i=0;i<s1.length;i++){
        //         let ch =s1[i]
        //         let remaining = s1.slice(0,i)+s1.slice(i+1)
        //         let perms = getPermutaitons(remaining)
        //         for(let perm of perms){
        //             result.push(ch+perm)
        //         }
        //     }
        //     return result
        // }
        // const ps=getPermutaitons(s1)
        // console.log(ps)
        // for(let p of ps){
        //     if(s2.includes(p))
        //     return true
        // }
        // return false
    }
}
