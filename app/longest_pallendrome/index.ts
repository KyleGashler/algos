export const longestPallendrome = (parentString: string): number => {
    let longest: number = 0;
    let index: number = 0;

    while (index < parentString.length) {
        const frontLetter: string = parentString[index - 1];
        const backLetter: string = parentString[index + 1];

        if (parentString[index] === frontLetter) {
            // potentially N^2 worst
            const potentialPallLength = checkLengthOfPotentialPallendromme(index, index + 1, 2, parentString);
            if (potentialPallLength > longest) {
                longest = potentialPallLength;
            }
        }

        if (frontLetter === backLetter) {
            // potentially N^2 worst
            const potentialPallLength = checkLengthOfPotentialPallendromme(index - 1, index + 1, 3, parentString);
            if (potentialPallLength > longest) {
                longest = potentialPallLength;
            }
        }
        index++;
    }

    return longest;
};

const checkLengthOfPotentialPallendromme = (
    index1: number,
    index2: number,
    potentialPallLength: number,
    parentString: string,
): number => {
    while (true) {
        index1--;
        index2++;
        if (index1 < 0 || index2 > parentString.length - 1) {
            break;
        }
        if (parentString[index1] === parentString[index2]) {
            potentialPallLength += 2;
        } else {
            break;
        }
    }

    return potentialPallLength;
};
