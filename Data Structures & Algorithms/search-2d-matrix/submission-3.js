class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let m =matrix.length;
        let n =matrix[0].length;
        let left =0,right=m*n-1;
        while(left<=right){
            let mid = Math.floor((left+right)/2);
            let row = Math.floor(mid/n)
            let col = mid%n;
            let val = matrix[row][col]
            if(target == val){
                return true
            } else if(target<val){
                right=mid-1
            } else if(target>val){
                left = mid+1
            }      
        }
        return false
    }
}
//       // let i=0, j=matrix.length-1
        // while(i<=j){
        //     let mid1=math.floor((i+j)/2)
        //     let array=matrix[i]
        //     if(array[0]<= target && target<=array[array.length-1]){
        //        let left = 0, right=array.length-1
        //         while(left<=right){
        //             let mid= Math.floor((left+right)/2)
        //             if(target=== array[mid]){
        //                 return true
        //             } else if(target<array[mid]){
        //                   right = mid-1
        //             } else if(target>array[mid]){
        //                 left =mid+1
        //             }
        //         }
        //         return false

        //     } else i++
        // }


        
        // for(let i=0;i<matrix.length;i++){
        //     for(let j=0;j<matrix[i].length;j++){
        //         if(matrix[i][j]=== target){
        //             return true
        //         }
        //     }
        // }