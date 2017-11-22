function processData(input) {
    //Enter your code here
    const array = input.split('\n');
    const X = array[0];
    const N = array[1];

    function powerSum(curr, target) {
        if (target === 0) return 1;
        if (Math.pow(curr, N) > target) return 0;
        // if (target - Math.pow(curr, N) <= curr) return 0;
        let sum = 0;
        for (let i = curr; i <= Math.floor(Math.pow(target, 1 / N)); i++) {
            sum += powerSum(i + 1, target - Math.pow(i, N));
        }
        return sum;
    }

    console.log(powerSum(1, X));
}

process.stdin.resume();
process.stdin.setEncoding('ascii');
_input = '';
process.stdin.on('data', function(input) {
    _input += input;
});

process.stdin.on('end', function() {
    processData(_input);
});
