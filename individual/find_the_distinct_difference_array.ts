function distinctDifferenceArray(nums: number[]): number[] {
    let diff : number[] = [];
    const prefix = new Set<number>();
    let tempArr : number[] = [...nums];

    for(let i = 0; i < nums.length; i++){
        prefix.add(tempArr.shift() !);
        const suffix = new Set<number>(tempArr);
        diff.push(prefix.size - suffix.size);
    }

    return diff;
};