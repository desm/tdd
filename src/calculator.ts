export const sum = (...n: number[]) => {
    return n.reduce((prev, curr) => prev + curr, 0);
};
