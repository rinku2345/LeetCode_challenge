/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let leftsum=0;
    let rightsum=nums.reduce((accu,currentva)=>accu + currentva,0);
        console.log(nums, leftsum,rightsum)
        for(let i=0; i<nums.length; i++){
            console.log(nums[i])
            rightsum=rightsum-nums[i]
            if(leftsum===rightsum){
                return i;
            }
            leftsum=leftsum+nums[i]
        
        }
        return -1
};