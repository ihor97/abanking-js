const getRandomInt = max => {
    return Math.floor(Math.random() * max)
}

const promiseTimer = (n, data) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (getRandomInt(3) === 0) {
                rej(new Error('something went wrong'))
            }
            res(data)
        }, n * 1000);
    })
}
promiseTimer(1,'dsxdsds')
.then(data=>{
    console.log(data);

}
// якщо все гут rej просто не викликається
,err=>{
    console.log(err);
})
// викликається в любому випадку
.finally(()=>{
    console.log('finally');
})