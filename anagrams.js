process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = '';
var input_stdin_array = '';
var input_currentline = 0;

process.stdin.on('data', function(data) {
    input_stdin += data;
});

process.stdin.on('end', function() {
    input_stdin_array = input_stdin.split('\n');
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var a = readLine();
    var b = readLine();

    let common = {};
    for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
        common[String.fromCharCode(i)] = 0;
    }
    for (let i = 0; i < a.length; i++) {
        common[a.charAt(i)] += 1;
    }
    for (let i = 0; i < b.length; i++) {
        common[b.charAt(i)] -= 1;
    }
    let sum = 0;
    for (let char in common) {
        sum += Math.abs(common[char]);
    }
    console.log(sum);
}
