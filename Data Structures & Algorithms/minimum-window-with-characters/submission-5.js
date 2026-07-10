class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {

        let min = "";
        if (s === t) return s
        if (s.length <= 1 || s.length<t.length) return ""
        
        for (let i = 0; i < s.length; i++) {
            if (t.includes(s[i])) {
                for (let j = s.length - 1; j >= i; j--) {
                    if (t.includes(s[j])) {
                        let substr = s.slice(i, j + 1)
                        let copySubstr =substr
                        let issubstr = true
                        for (let z = 0; z < t.length; z++) {
                            // if (!copySubstr.includes(t[z])) {
                            //     issubstr = false;
                            //     break
                            // }
                            console.log(copySubstr)
                            if (copySubstr.includes(t[z])) {
                                let ind=copySubstr.indexOf(t[z]);
                                                            console.log(ind)

copySubstr = copySubstr.slice(0, ind) + copySubstr.slice(ind + 1);                            }else {
                                issubstr=false
                                break
                            }
                        }
                        if (issubstr && (min.length>substr.length ||min==""))
                            min=substr
                    }
                }
            }
        }
        return min
    }
}
