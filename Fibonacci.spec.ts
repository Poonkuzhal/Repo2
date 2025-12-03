// TypeScript: negafibonacci(n: number) -> number
function negafibonacci(n: number): number {
    // Input validation
    if (typeof n !== "number" || !Number.isInteger(n)) {
        throw new TypeError("n must be an integer number");
    }

    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === -1) return 1;

    // If negative, compute fib(|n|) then apply sign rule
    if (n < 0) {
        const k = -n;
        // compute F(k) with loop
        let a = 0, b = 1;
        for (let i = 2; i <= k; i++) {
            const next = a + b;
            a = b;
            b = next;
        }
        // F(-n) = (-1)^(n+1) * F(n)  -> for k = |n|, sign = (-1)^(k+1)
        const sign = (k % 2 === 0) ? -1 : 1;
        return sign * b;
    }

    // n > 1: compute positive Fibonacci iteratively
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        const next = a + b;
        a = b;
        b = next;
    }
    return b;
}

// Example calls:
console.log(negafibonacci(8));   // 21
console.log(negafibonacci(-8));  // -21
console.log(negafibonacci(0));   // 0
console.log(negafibonacci(-3));  // 2
