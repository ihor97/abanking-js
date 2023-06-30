function *foo(x) {
    // yield може як приймати так і віддавати
    const y=x *(yield 'please input number')
    return y
}
// це можна заюзати якщо у нас є якісь тяжкі обчислення і нам треба дочекатися значення якогось яке прийде пізніше
// так що ф-я може зупинитися на якомусь моменті і чекати введення цього значення
const iterator=foo(5)
// iterator.next()
console.log(iterator.next());

// ми тут кажемо замість yield підставити 2
console.log(iterator.next(2));
// console.log(iterator.next());

