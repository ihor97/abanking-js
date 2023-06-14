// fetch('http://127.0.0.1:5500/index.html')
// .then(x=>{console.log(x);})

////можна юзати статичний метод для того щоб почати ланцюжок промісів
// Promise.resolve(true)
//     .then(() => fetch('http://127.0.0.1:5500/index.html'))
//     .then((res)=>{console.log(res);})


const getRandomInt=max=>{
    return Math.floor(Math.random()*max)
}
const getData=()=>{
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(getRandomInt(10))
        }, 1000*getRandomInt(10));
    })
}
// коли в хоть одному є помилка то всі рещта даних втрачаються
// Promise.all([getData(),getData(),getData()])
//     .then(arr=>{
//         console.log(arr);
//     })
//     .catch(err=>{console.log(err);})

// резолвить найшвидший проміс (наприклад коли тянемо інфу з датацентрів)
// Promise.race([getData(),getData(),getData()])
//     .then(arr=>{
//         console.log(arr);
//     })
//     .catch(err=>{console.log(err);})

// викидує обєкти з ключами status(або reason) і value , при тому якщо буде помилка ми не будемо валитися в catch 
Promise.allSettled([getData(),getData(),getData()])
    .then(arr=>{
        console.log(arr);
    })
    .catch(err=>{console.log(err);})