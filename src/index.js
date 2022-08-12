
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined) return [];

    const res = matrix.reduce((acc, curr) => {
        if(curr === undefined) return acc;
        if (matrix.indexOf(curr) %2 !== 0) {
            acc.push(...curr.reverse());
        } else {
            acc.push(...curr);
        }
        return acc;
    }, []);

    return res;
}
