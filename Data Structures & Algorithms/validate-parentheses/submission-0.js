class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let st=[]
        for(let ch of s){
        let top=st.length-1
            switch(ch){
                case'(':
                    st.push('(')
                    break
                case'{':
                    st.push('{')
                    break
                case'[':
                    st.push('[')
                    break
                case']':
                    if(st[top]!=='['){
                        return false
                    }
                    st.pop()
                    break;
                case'}':
                    if(st[top]!='{'){
                        return false
                    }
                    st.pop()
                    break;
                case')':
                    if(st[top]!='('){
                        return false
                    }
                    st.pop()
                    break
            }
        }
        if(st.length == 0){
            return true
        }
        return false
    }
}
