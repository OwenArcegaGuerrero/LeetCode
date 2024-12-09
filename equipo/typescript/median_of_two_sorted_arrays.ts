function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let nums = nums1.concat(nums2);
    let res = 0
    nums.sort((a,b) => a-b);

     if (nums.length%2 == 0){
        res = (nums.length/2)
        return ((nums[res-1]+nums[res])/2)
    }else{
        res = Number(((nums.length/2)+0.5))
        return nums[res-1]
    }
};