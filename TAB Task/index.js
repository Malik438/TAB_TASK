function findTarget(array, target) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                return [i, j];
            }
        }
    }
    return [0, 0];
}


function findTarget2(array, target) {
    const map = new Map();

    for (let i = 0; i < array.length; i++) {
        map.set(array[i], i);
    }

    for (let start = 0; start < array.length; start++) {
        const number = target - array[start];
        if (map.has(number)) {
            return [start, map.get(number)];
        }
    }
    return [0, 0];
}