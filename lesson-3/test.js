function getSum2(a, b) {
    if ( a == b){
        return `${a} Since both are same`;
    } else {

        let start, finish;
        if( a < b){
            start = a;
            finish = b;
        } else {
            start = b;
            finish = a;
        }
            /// код из функции getSum ; тупняк
            let sum = start;
            for(let i = 0; i <= finish - start; i++) {
                sum = sum + i;
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