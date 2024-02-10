export const sum = (a: number, b: number) => {
    if (a === 0) {
        return b
    }

    if (b === 0) {
        return a
    }

    return a + b
}