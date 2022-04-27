function sumHell(x = 322, y = 489) {
    let copyX = x.toString();
    let copyY = y.toString();
    let lastX = copyX.length - 1;
    let lastY = copyY.length - 1;
    let res = 0;
    let bag = 0;

    console.log(copyX.length);

    for (let i = 0; i < copyX.length; i++) {
        if (copyX[lastX] + copyY[lastY] > 10) {
            bag = copyX[lastX];
            res = copyX[lastX] + copyY[lastY];
        }
    }
}

sumHell()