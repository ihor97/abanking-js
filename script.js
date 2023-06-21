function baz() {
    // такими ланцюжками визначається контекст виклику
    // стек викликів global-> baz
    // відповідно місце виклику належить глобальній області видимості
    console.log('baz');
    bar()
}
function bar() {
    // стек викликів: 'global'->'baz'->'bar'
    // відповідно місце виклику знаходиться в baz
    console.log('bar');
    foo()
}
function foo() {
    // стек викликів: 'global'->'baz'->'bar->foo'
    // відповідно місце виклику знаходиться в bar
    console.log('foo');
}

baz()