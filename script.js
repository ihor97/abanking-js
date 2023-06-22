function foo() {
    console.log(this);
}
// якшо ми вставимо null або undefined то ми оотримаємо в консоль Window
// foo.call(undefined)

// щоб не було такого щоб коли ми передавали null undefined в call і нам вибивав window треба зробити наступне
foo.call(Object.create(null))
