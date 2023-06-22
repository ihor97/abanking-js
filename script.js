// стрілкова ф-я

function foo() {
    return ()=>{
        console.log(this.a);
    }
    // return function () {
        // в такому разі буде виводити 3
    //     console.log(this.a);
        
    // }
    
}

const obj1={
    a:2
}
const obj2={
    a:3
}
const bar=foo.call(obj1)
// так як стрілка бере контекст батька то ми візьмемо дані з obj1
bar.call(obj2)