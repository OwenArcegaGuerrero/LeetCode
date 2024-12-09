function lengthOfLongestSubstring(s: string): number {
    let longestSubstringLength : number = 0;
    let index = 0;
    let currentCharIndex : number = 0;
    let currentSubstring : string = "";
    let currentChar : string = '';
    while(index < s.length && currentCharIndex < s.length){
        currentChar = s[currentCharIndex];
        if(currentSubstring.includes(currentChar)){
            longestSubstringLength = longestSubstringLength < currentSubstring.length ?
                                      currentSubstring.length : longestSubstringLength;
            index++;
            currentCharIndex = index;
            currentSubstring = "";
        } else {
            currentSubstring += currentChar;
            currentCharIndex++;
            if(currentCharIndex >= s.length){
                break;
            }
        }
    }

    return longestSubstringLength < currentSubstring.length ?
                                    currentSubstring.length : longestSubstringLength;;
};