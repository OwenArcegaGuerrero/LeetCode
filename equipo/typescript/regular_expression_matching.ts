function isMatch(s: string, p: string): boolean {
    if(p == '.*') return true;

    const regExp : RegExp = new RegExp(`^${p}$`);
    return regExp.test(s);
};
