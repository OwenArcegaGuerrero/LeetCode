from typing import List


class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:

        nums1.extend(nums2)
        nums1.sort()
        
        if (len(nums1) %2) == 0:
            res = int(len(nums1)/2)
            return ((nums1[res-1]+nums1[res])/2)
        else:
            res = int((len(nums1)/2)+0.5)
            return nums1[res-1]
            
