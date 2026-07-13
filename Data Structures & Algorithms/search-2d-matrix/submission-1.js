class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let i=0;
        while(i<matrix.length){
            let array=matrix[i]
            if(array[0]<= target && target<=array[array.length-1]){
               let left = 0, right=array.length-1
                while(left<=right){
                    let mid= Math.floor((left+right)/2)
                    if(target=== array[mid]){
                        return true
                    } else if(target<array[mid]){
                          right = mid-1
                    } else if(target>array[mid]){
                        left =mid+1
                    }
                }
                return false

            } else i++
        }
        // for(let i=0;i<matrix.length;i++){
        //     for(let j=0;j<matrix[i].length;j++){
        //         if(matrix[i][j]=== target){
        //             return true
        //         }
        //     }
        // }
        return false
    }
}
