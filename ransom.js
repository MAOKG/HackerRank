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
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    magazine = readLine().split(' ');
    ransom = readLine().split(' ');

    let m_obj = {};
    let n_obj = {};
    let isTrue = 'Yes';
    for (let i = 0; i < m; i++) {
        if (m_obj[magazine[i]] === undefined) {
            m_obj[magazine[i]] = 1;
        } else {
            m_obj[magazine[i]] += 1;
        }
    }
    for (let i = 0; i < n; i++) {
        if (n_obj[ransom[i]] === undefined) {
            n_obj[ransom[i]] = 1;
        } else {
            n_obj[ransom[i]] += 1;
        }
    }

    for (let word in n_obj) {
        if (m_obj[word] === undefined || m_obj[word] < n_obj[word]) {
            isTrue = 'No';
            break;
        }
    }

    console.log(isTrue);
}
