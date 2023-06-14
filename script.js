// new Promise((res,rej)=>{
//     // async work
//     res(12)
//     rej(new Error(''))
// }).then((val)=>{
//     // тут можна викликати нові проміси
//     return Promise.resolve(111)
// }).then(
//     val=>{
//         console.log(val);
//     }
// ).catch(
//     err=>{
//         console.log(err);
//     }
// )

/*
state -pending -іде асинхронна дія,fullfiled,rejected


в промісі є ше поле result - результат проміса

*/ 
function func(time,data) {
    
        return new Promise((res,rej)=>{

            setTimeout(() => {
                // rej('eeee')
                res(data)
            }, time*1000);
        })
    }

func(3,'eeeede').then(val=>{

    console.log(val);
    // в then можна передати другим параметром колбек який буде ловити помилки
},err=>{
    console.log('error');
}
).catch(
    err=>{
        console.log(err);
    }
)

