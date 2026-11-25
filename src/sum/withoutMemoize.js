const expensiveFunction = async (a, b) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    return a + b
}

const execution = async () => {
    console.log(new Date().toISOString(), await expensiveFunction(1, 2)) // first execution
    console.log(new Date().toISOString(), await expensiveFunction(4, 6)) // second execution
    console.log(new Date().toISOString(), await expensiveFunction(1, 2)) // third execution
    console.log(new Date().toISOString(), await expensiveFunction(1, 2)) // fourth execution
}

execution()