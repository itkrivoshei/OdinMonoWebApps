function sumHell(x = 322, y = 489) {
    let copyX = x.toString();
    let copyY = y.toString();
    let lastX = copyX.length - 1;
    let lastY = copyY.length - 1;
    let res = 0;
    let bag = 0;

    console.log(copyX[lastX] + copyY[lastY]);

    for (let i = 0; i < copyX.length; i++) {
        if (bag === 0 && +copyX[lastX] + +copyY[lastY] > 10) {
            bag = getFirst(+copyX[lastX] + +copyY[lastY]);
            res.push.getLast(+copyX[lastX] + +copyY[lastY]);
        } else {
            console.log(res);
            res.push.getLast(+copyX[lastX] + +copyY[lastY]);
            bag = 0;
        }
    }
    return res;
}

function getLast(int) {
    return Math.floor(int % 10)
}

function getFirst(int) {
    while (int >= 10)
        int /= 10;
    return int;
}

console.log(sumHell())