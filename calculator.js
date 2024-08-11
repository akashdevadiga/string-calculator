function add(data) {
    const str = data.trim();

    if (!str) {
        return 0;
    }

    if (!str.includes(",")) {
        return parseInt(str);
    }

    const numArr = str.split(",").map((val) => parseInt(val));

    return numArr.reduce((acc, num) => acc + num, 0);
}

console.log("res: ", add("1,2,3,4"));

module.exports = {
    add
};