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
 
const input1 = gets().split(' ')
const numberOfLines = parseInt(input1[0])
const newPeopleCount = parseInt(input1[1])

const input2 = gets().split(' ')
const lines = input2.map(x => parseInt(x));

for (let i = 0; i < newPeopleCount; i++) {
    let shortestLineIndex = 0;
    let shortestLineCount = lines[0]
    lines.forEach((count, lineIndex) => {
        const thisLineCount = lines[lineIndex];
        if (shortestLineCount > thisLineCount) {
           shortestLineIndex = lineIndex;
           shortestLineCount = thisLineCount;
        }
    });
    print(shortestLineCount);
    lines[shortestLineIndex]++;
}