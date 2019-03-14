const rl = require('readline');

const getUserInput = (callback) => {
  const prompts = rl.createInterface(process.stdin, process.stdout);
  prompts.question("Type the yout Integer: \n", function(n){
    prompts.close();
    const result = callback(n);
    console.log(result);
  });
}


const perfectInt = (n) => {
  let sum=0;
  for(let i=1;i<n;i++) {
   if(n%i==0) sum+=i;
    if(sum==n)break;
  }
  return sum==n;
}

const howMuch = (n) => {
let count = (n>0) ? 1 : 0;
while( (n /= 10)  >= 1) {
  count++;
}
return count;
}

const howMuchSum = (n) => {
let sum = 0, tmp;
while(n) {
  tmp = n % 10;
  n = (n - tmp) / 10;
  sum += tmp;
}
return sum;
}

getUserInput(perfectInt);
