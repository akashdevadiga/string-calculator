function add(data) {
    const str = data.trim();

    if (!str) {
        return 0;
    }

    if (!str.includes(",")) {
        return parseInt(str);
    }

    const strArr = str.split(",");

    return parseInt(strArr[0]) + parseInt(strArr[1]);
}

console.log("res: ", add("1,2"));

module.exports = {
    add
};