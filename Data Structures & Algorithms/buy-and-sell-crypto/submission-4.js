class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min=prices[0], p=0;
        for(let i=0;i<prices.length;i++){
            if(min>prices[i]){
                min=prices[i]
            } else if(p<prices[i]-min)
            p=prices[i]-min
        }
        return p
    }
}
