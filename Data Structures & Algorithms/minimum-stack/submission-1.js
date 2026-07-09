class MinStack {
    constructor() {
        this.st =[]
        this.min=[]
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.st.push(val)
        if(this.min.length==0 || val<=this.min[this.min.length-1]){
            this.min.push(val)
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.min[this.min.length-1]==this.st[this.st.length-1]){
            this.min.pop()
        }
        this.st.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.st[this.st.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min[this.min.length-1]
    }
}
