function identify() {
    // this визначається тим де ми викликаємо ф-ю
    return this.name.toUpperCase()
}
function speak() {
    // ще треба прибити контекст і всередині
    const greeting="hello i am " +identify.call(this)
    console.log(greeting);
}
const me={
    name:'teacher'
}
const you={
    name:'student'
}
// контекст - обєкт до якого ми можемо звернутися в ф-ї
speak.call(me)
speak.call(you)