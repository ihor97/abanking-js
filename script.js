// приклад 
const iterableObject = {
    data: [1, 2, 3],
    [Symbol.iterator]: function () {
      let index = 0;
      const data = this.data;
      
      return {
        next: function () {
          if (index < data.length) {
            return { value: data[index++], done: false };
          } else {
            // якщо value  не вказати то воно і так буде undefined
            return { done: true };
          }
        }
      };
    }
  };
  
  for (const item of iterableObject) {
    console.log(item);
  }

class CountDown{
    constructor(start){
        this.nextValue=start
    }
    // цей символ є для того щоб ми не могли створити свій ітератор і щоб не перезаписалися інші ітератори тобто воно є унікальним
    [Symbol.iterator](){
        let nextValue=this.nextValue
        return ()=>{
            return {

                next(){}
            }
        }
    }
}
const x = new CountDown()
for (const iterator of x) {
    
}