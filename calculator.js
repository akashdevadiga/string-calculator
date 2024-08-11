function add(data) {
    let str = data.trim();

    if (!str) {
        return 0;
    }

    str = str.replace(/\n/g, ',');

    if (!str.includes(",")) {
        return parseInt(str);
    }

    const resArr = str.split(",").map((val) => parseInt(val));

    return resArr.reduce((acc, num) => acc + num, 0);
}

console.log("res: ", add("1\n2 \n3, 4"));

module.exports = {
    add
};