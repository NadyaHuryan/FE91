function getSum2(a, b) {
    if ( a == b){
        return `${a} Since both are same`;
    } else {
        let start = a;
        let finish = b;
        if( a > b){
            start = b;
            finish = a;
        } 

        let sum = 0;

        for (let i = start; i <= finish ; i++) {
            sum = sum + start;
            start++;
        }

        return sum;   
     }

}

console.log(getSum2(1, 0));  
console.log(getSum2(1, 2)); 
console.log(getSum2(3, 1)); 
console.log(getSum2(0, 1));
console.log(getSum2(1, 1));
console.log(getSum2(-1, 0));
console.log(getSum2(-1, 2));