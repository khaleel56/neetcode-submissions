class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        function isAlphanumeric(char) {
            return /^[a-z0-9]$/i.test(char)
        }
        s=s.toLowerCase()
        let x=''
         for(let char of s){
            if(isAlphanumeric(char)){
                x+=char;
            }
         }
        for(let i=0,j=x.length-1;i<j;i++,j--){
            if(x.charAt(i) !=  x.charAt(j)){
                return false
            }
        }
        return true
    }
}
