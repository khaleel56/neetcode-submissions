class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = [], r = [];
        let lmax = 0, rmax = 0
        for (let i = 0, j = height.length - 1; i < height.length; i++, j--) {
            if (lmax < height[i]) {
                lmax=height[i]
            }
                l.push(lmax)
            if (rmax < height[j]) {
                rmax=height[j]
            }
                r.unshift(rmax)

        }
        let sum = 0
        for (let i = 0; i < height.length - 1; i++) {
            let min = Math.min(l[i],r[i])
            sum = sum + (min - height[i])
        }
    return sum
    }
}
