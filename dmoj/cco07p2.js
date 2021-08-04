/* 
 * This is a custom version of V8 that adds six functions in order to perform I/O and aid in online judging.
 *
 * * `print(...)`: similar to Python's `print`, prints all argument separated by space followed by new line.
 * * `flush()`: flushes stdout, ensuring everything output by `print()` immediately shows up.
 * * `gets()`: similar to the Ruby equivalent, returns one line of input from `stdin`.
 * * `read(bytes)`: read `bytes` bytes from stdin as an `ArrayBuffer`.
 * * `write(buffer)`: write a typed array, `ArrayBuffer`, or a view of `ArrayBuffer` to stdout.
 * * `quit(code)`: exits the program with `code`.
 * * You can also assign to the global variable `autoflush` to control whether `print()` flushes.
 *
 */
 


// store snowflakes in a hashtable by their arm length SUM
// iterate through each snowflake and compare them to the other snowflakes with the same SUM


// 1,2,3,4

// 3,4,1,2
// 3,4,1,2,3,4,1,2
// 2,1,4,3,2,1,4,3


// returns whether the 2 snowflakes are the same

let aString = '';
let bString = '';
let spreadB = [];
function equalSnowflakes(a, b) {
    aString = a.join('-');

    spreadB = [...b, ...b];
    bString = spreadB.join('-');
    if (bString.includes(aString)) {
        return true;
    }

    spreadB.reverse();

    bString = spreadB.join('-');
    return bString.includes(aString);
}


function hasTwins() {
    const numberOfSnowflakes = parseInt(gets())

    let snowflakesBySum = {};

    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflakeInput = gets();
        const snowflake = snowflakeInput.split(' ').map((x) => parseInt(x));
        const snowflakeSum = snowflake.reduce((sum, length) => sum + length, 0);

        if (!snowflakesBySum[snowflakeSum]) {
            snowflakesBySum[snowflakeSum] = [];
        }
        const sumArray = snowflakesBySum[snowflakeSum];
        sumArray.push(snowflake);
    }
    
    const onesToCheck = Object.values(snowflakesBySum);

    for (i = 0; i < onesToCheck.length; i++) {
        const maybeTwins = onesToCheck[i];
        if (maybeTwins.length <= 1) {
            continue;
        }
        for (aIndex = 0; aIndex < maybeTwins.length; aIndex++) {
            for (bIndex = aIndex + 1; bIndex < maybeTwins.length; bIndex++) {
                const a = maybeTwins[aIndex];
                const b = maybeTwins[bIndex];
                if (equalSnowflakes(a,b)) {
                    return true;
                }
            }
        }
    }
}

// function print(s) {
//     console.log(s);
// }

// const lines = [
//     '2',
//     '1 2 3 4 5 6',
//     '4 3 2 1 6 5',
// ]
// let lineIndex = 0;
// function gets() {
//     return lines[lineIndex++];
// }

if (hasTwins()) {
    print("Twin snowflakes found.");
} else {
    print("No two snowflakes are alike.");
}