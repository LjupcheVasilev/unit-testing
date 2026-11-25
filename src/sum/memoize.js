const sum = async (a, b) => {
    return a + b
}

const cache = {}
const meomize = async (a, b) => {
    const key = `${a},${b}`
    if (cache[key]) {
        return cache[key]
    }
    const result = await sum(a, b)
    cache[key] = result
    return result
}

const execution = async () => {
    console.log(new Date().toISOString(), await meomize(1, 2)) // first execution
    console.log(new Date().toISOString(), await meomize(4, 6)) // second execution
    console.log(new Date().toISOString(), await meomize(1, 2)) // cache hit
    console.log(new Date().toISOString(), await meomize(1, 2)) // cache hit
}

execution()