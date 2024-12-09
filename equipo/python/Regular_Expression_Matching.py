class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        stack = [(0, 0)]
        while stack:
            i, j = stack.pop()
            if j == len(p):
                return i == len(s)
            if j + 1 == len(p) or p[j + 1] != '*':
                print(i,j)
                if i < len(s) and (p[j] == s[i] or p[j] == '.'):
                    stack.append((i + 1, j + 1))
            else:
                stack.append((i, j + 2))
                while i < len(s) and (p[j] == s[i] or p[j] == '.'):
                    stack.append((i + 1, j + 2))
                    i += 1
        return False


    # class Solution:
    #def isMatch(self, s: str, p: str) -> bool:
    #    return bool(re.search(f'^{p}$', s))