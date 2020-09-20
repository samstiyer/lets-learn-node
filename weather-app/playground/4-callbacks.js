const add = (a, b, callback) => {
    let sum = a + b
    j
    setTimeout(() => {
        callback(sum)
    }, 2000)

    console.log('waiting for callback!')
}


add(1, 4, (sum) => {
    console.log(sum)
})