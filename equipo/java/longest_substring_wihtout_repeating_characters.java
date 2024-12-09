class Solution {
    public int lengthOfLongestSubstring(String s) {
        int greatestSubstringLength = 0;
        int index = 0;
        int charIndex = 0;
        String currentSubstring = "";
        char currentChar = ' ';
        while(index < s.length() && charIndex < s.length()){
            currentChar = s.charAt(charIndex);
            if(currentSubstring.indexOf(currentChar) > -1){
                index++;
                charIndex = index;
                if(greatestSubstringLength < currentSubstring.length()){
                    greatestSubstringLength = currentSubstring.length();
                }
                currentSubstring = "";
            } else {
                currentSubstring += currentChar;
                charIndex++;
            }
        }

        if(greatestSubstringLength < currentSubstring.length()){
            greatestSubstringLength = currentSubstring.length();
        }
        return greatestSubstringLength;
    }
}