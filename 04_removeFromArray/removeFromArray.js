const removeFromArray = function(array, ...itemsToRemove) {
    for (i = 0; i < itemsToRemove.length; i++) {
        let removeIndex = array.findIndex((item) => item === 
                itemsToRemove[i]);
        if (removeIndex === -1) {
            continue;
        }
        array.splice(removeIndex, 1);
    }
    return array;
};

// console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
