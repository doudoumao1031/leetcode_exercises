/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i;
    let max=nums[0];
    if(nums.length>0){
        for(i=1;i<nums.length;i++){
            if(max == nums[i]){
                nums.splice(i,1);
                i--;
            }else{
                max=nums[i];
            }
        }
    }
    return nums.length;
};