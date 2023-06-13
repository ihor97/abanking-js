const btn=document.querySelector('.btn')
const wrapper=document.querySelector('.wrapper')
const line=document.querySelector('.line')
const fetchFromserver=(arr,count)=>{
let counter=1
const id=setInterval(() => {
    arr.push(`File ${counter}`)
    counter++
    if(counter>count){
        clearInterval(id)
    }
}, 700);
}
const download=(count)=>{
    const result=[]
    fetchFromserver(result,count)
   const id= setInterval(() => {
    // під час виконання цього інтервалу ми можемо взаємодіяти зі сторінкою без проблем
        line.style.width=result.length*(300/count)+'px'
        if(result.length===count){
            clearInterval(id)
        }
    }, 100);
}
btn.onclick=()=>download(6)