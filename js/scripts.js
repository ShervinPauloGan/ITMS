function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function updateInputVisibility() {
    const computationType = document.getElementById('computationType').value;
    const rLabel = document.getElementById('rLabel');
    const rInput = document.getElementById('r');

    if (computationType === 'permutation' || computationType === 'combination') {
        rLabel.style.display = 'block';
        rInput.style.display = 'block';
    } else {
        rLabel.style.display = 'none';
        rInput.style.display = 'none';
    }
}

function compute() {
    const n = parseInt(document.getElementById('n').value);
    const computationType = document.getElementById('computationType').value;

    let result;

    switch (computationType) {
        case 'permutation':
            const rPermutation = parseInt(document.getElementById('r').value);
            result = factorial(n) / factorial(n - rPermutation);
            document.getElementById('result').innerHTML = `Permutation: ${result}`;
            break;

        case 'combination':
            const rCombination = parseInt(document.getElementById('r').value);
            result = factorial(n) / (factorial(rCombination) * factorial(n - rCombination));
            document.getElementById('result').innerHTML = `Combination: ${result}`;
            break;

        case 'fibonacci':
            let fib = [0, 1];
            for (let i = 2; i < n; i++) {
                fib[i] = fib[i - 1] + fib[i - 2];
            }
            result = fib.slice(0, n).join(', ');
            document.getElementById('result').innerHTML = `Fibonacci: ${result}`;
            break;

        case 'tribonacci':
            let trib = [0, 0, 1];
            for (let i = 3; i < n; i++) {
                trib[i] = trib[i - 1] + trib[i - 2] + trib[i - 3];
            }
            result = trib.slice(0, n).join(', ');
            document.getElementById('result').innerHTML = `Tribonacci: ${result}`;
            break;

        default:
            document.getElementById('result').innerHTML = 'Invalid computation type';
    }
}
