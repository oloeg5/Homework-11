
//Task 1

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function evenOddNumbers (){
    for (let i = 0; i <= 11; i++){
        if((arr[i] % 2 === 0) === true){
            console.log(i)
        } }

    for (let i = 0; i <= 11; i++){
        if((arr[i] % 2 === 0) === false){
            console.log(i)
        } }
}
evenOddNumbers ();



//Task 2

function isSimple
 (num) {
    if (!Number.isInteger(num) || num < 2 && num > 1000)
        return "данные неверны";
    let k = Math.sqrt(num);
    for (let i = 2; i <= k; i++)
        if (num % i === 0) return "непростое число";
    return "простое число";
}
console.log(isSimple (5));




// Task 3

function sum(a) {
  return function(b) {
      return a + b;
  };
}
console.log( sum(5)(10), sum(11)(17), sum(22)(33) );




// Task 4

function max(a, b) {
  let num1 = a;

  let timerId = setInterval(function() {
      console.log(num1);
      if (num1 == b) {
          clearInterval(timerId);
      }
      num1++;
  }, 1000);
}

max(2, 11);





// Task 5

const num = (x, n)=> Math.pow(x, n);

console.log(num(2, 4));
