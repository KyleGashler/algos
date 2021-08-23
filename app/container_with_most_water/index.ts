/**
 * @param {number[]} height
 * @return {number}
 */

export const maxArea = (height: number[]): number => {
    let highestVolume: number = 0;
    let index1: number = 0;
    let index2: number = 0;
    let runComplex = 0;

    while (index1 <= height.length) {
        runComplex++;
        index2 = index1;

        while (index2 <= height.length) {
            runComplex++;
            const newVolume = calcVolume(index1, height[index1], index2, height[index2]);
            newVolume > highestVolume ? (highestVolume = newVolume) : true;

            index2++;
        }

        index1++;
    }

    console.log(`runtime count given ${height.length} items: `, runComplex);
    return highestVolume;
};

const calcVolume = (index1: number, val1: number, index2: number, val2: number): number => {
    const length = index2 - index1;
    const height = Math.min(val1, val2);

    return length * height;
};
