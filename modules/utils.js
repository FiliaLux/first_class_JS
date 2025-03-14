export const calculator = (...params) => {
    let result = 0;
    const sum = (...params) => {
        result += params;
    };
    const sub = (...params) => {
        result -= params;
    };
    const div = (...params) => {
        if (params === 0) {
            throw Error("Not divisible by 0")
        };
        result /= params;
    };
    const mult = (...params) => {
        result *= params;
    };
    const total = () => {
        return result;
    };
    return {
        sum, sub, div, mult, total
    };
};