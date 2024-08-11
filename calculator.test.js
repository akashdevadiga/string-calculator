const { add } = require('./calculator');

test('input: empty string, output: 0', () => {
    expect(add("    ")).toBe(0);
});

test('single number returns that number', () => {
    expect(add("1")).toBe(1);
});

test('two numbers separated by a comma return their sum', () => {
    expect(add("1,5")).toBe(6);
});