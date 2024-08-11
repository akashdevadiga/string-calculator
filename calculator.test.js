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

test('multiple numbers separated by a comma return their sum', () => {
    expect(add("1,2,3,4")).toBe(10);
});

test('numbers with new lines or commas returns sum', () => {
    expect(add("1\n2,3")).toBe(6);
});
