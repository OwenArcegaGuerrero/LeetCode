class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        longestLength = 0
        currentSubstring = []

        index = 0
        while(True):
            for letter in range(index, len(s)):
                if(s[letter] not in currentSubstring):
                    currentSubstring.append(s[letter])
                else:
                    break
            if(len(currentSubstring) > longestLength):
                longestLength = len(currentSubstring)
            currentSubstring.clear()

            index += 1

            if(index > len(s)):
                break  

        return longestLength
