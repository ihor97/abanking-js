// стрілкова ф-я
// use strict не заканає так settimeout викликається відносно api браузера
// call зразу викликає ф-ю 
function foo() {
// var піднімається тільки в функціональній області видимості
    // буде undefined
    // call не рішить проблему так як він зразу викликає ф-ю
    (function (context) {
        setTimeout(function () {
            console.log(context.a);
        }, 100);
    })(this)




    //  буде ок
    setTimeout(() => {
        console.log(this.a);
    }, 100);

}

const obj = {
    a: 2
}

foo.call(obj)