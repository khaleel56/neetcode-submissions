class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
       while (tokens.length > 1) {
            for (let i = 0; i < tokens.length; i++) {
                if (["+", "-", "*", "/"].includes(tokens[i])) {
                    let a = Number(tokens[i - 2]);
                    let b = Number(tokens[i - 1]);
                    let op = tokens[i];
                    let result;

                    switch (op) {
                        case "+": result = a + b; break;
                        case "-": result = a - b; break;
                        case "*": result = a * b; break;
                        case "/": result = Math.trunc(a / b); break;
                    }

                    tokens.splice(i - 2, 3, result.toString());

                    break;
                }
            }
        }
        return Number(tokens[0]);
        
    }
}
