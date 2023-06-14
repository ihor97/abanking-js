// setTimeout(() => {
//     console.log('After 1000ms');
//     setTimeout(() => {
//         console.log('After 2000ms');
//         setTimeout(() => {
//             console.log('After 3000ms');
//         }, 1000);
//     }, 1000);
// }, 1000);

// це те саме що зверху але через проміси 
// проміс виконується раз а колбеки не факт
const customSetTimeout = n => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(n)
        }, 1000);
    })
}

customSetTimeout(1000)
    .then((val) => {
        console.log('After ' + val)

        return customSetTimeout(2000)
    })
    .then(val => {
        console.log('After ' + val)
        // можна вертати проміси
        return customSetTimeout(3000)
    })
    // кастомно можна обробляти помилку
    .catch(err => {
        console.log(err);
    })
    .then(val => {
        console.log('After ' + val)
    })
    .catch(err => {
        console.log(err);
    })