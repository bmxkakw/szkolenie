var arr = [ 1, 2, 3, 4, 5 ];

arr.forEach(function (element, index) {
    console.log(index, element);
});

var arr2 = arr.map(function(element, index) {
    return element * 2;
});
console.log(arr2);

var arr3 = arr.filter(function (element, index) {
    return element % 2 === 0;
});
console.log(arr3);

var arr4 = arr.reduce(function (dotychczasowyAku, kolejnyEl) {
    return dotychczasowyAku + kolejnyEl;
}, 0);
console.log(arr4);

// var value = arr
//     .filter(...)
//     .map(...)
//     .reduce();
