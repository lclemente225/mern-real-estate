function collatz(n, steps){                                                          
    if(n === 1){
        console.log(n);
        console.log("this is steps: ",steps);
        return "Stopping"
    }
    if(n%2 === 0 && n > 1){
        steps++;
        console.log("even: ",n);
        console.log("this is steps: ",steps);
        return collatz(n/2, steps)
    }
    if(n%2 !== 0 && n > 1){
        steps++;
        console.log("odd: ", n)
        console.log("this is steps: ",steps);
        let triple = 3*n;
        let complete = triple + 1;
        return collatz(complete, steps)
    }
}

const values = 5;
console.log(collatz(values, 0))