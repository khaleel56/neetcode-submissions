class MinStack {
    constructor() {
        this.st =[]
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.st.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
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
        return Math.min(...this.st)
    }
}
