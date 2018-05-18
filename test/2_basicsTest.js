describe('Try out writing some test specs yourself', function () {

    var a = 1;
    var b;
    var c = parseInt('aaa', 10);        // parseInt converts a string to a number - if possible
    var d = null;
    var e = [ 1, 2, 3 ];

    // EXERCISE 2: replace comments with values in order to make the test pass
    // A. What are types of these expressions?
    it('has a correct type', function () {
        expect(typeof a).toEqual(/* */);
        expect(typeof b).toEqual(/* */);
        expect(typeof c).toEqual(/* */);
        expect(typeof d).toEqual(/* */);
        expect(typeof e).toEqual(/* */);
        expect(typeof typeof c).toEqual(/* */);
    });

    // B. What will be the resulting values?
    it('has a certain value', function () {
        expect('foo' + 'bar').toEqual(/* */);
        expect('1' + 2).toEqual(/* */);
        expect('a' + 2).toEqual(/* */);
        expect('1' - 2).toEqual(/* */);
        expect('a' - 2).toEqual(/* */);
        expect('1' * 2).toEqual(/* */);
        expect(0.1 + 0.2).toEqual(/* */);       // how so?
    });

    // C. How equality works?
    it('equals', function () {
        // what will be the resulting values?
        expect(a == '1').toEqual(/* */);
        expect(a === '1').toEqual(/* */);
        expect(b == d).toEqual(/* */);
        expect().toEqual(/* */);
    });

    // D. How equality works?
    it('is truthy / false', function () {
        // uncomment and add .toBeTruthy() or .toBeFalsy() accordingly
        // e.g.: expect(1 + 2).toBeTruthy();

        // expect(-100)
        // expect('100' - 100)
        // expect('0')
        // expect('aaa' > 'ab')
        // expect(isNaN(c))
        // expect(false)
        // expect('false')
        // expect([ 'item' ])
        // expect([])
    });

    // E. Write a function named 'field' that takes two arguments: rectangle width and height, and returns its field - and make the tests pass
    it('returns rectangle\'s field', function () {
        expect(field(10, 10)).toBe(100);
        expect(field(0.5, 0.5)).toBe(0.25);
        expect(field(0, 1)).toBe(0);
    });

    // F. Write a function named 'middle' that takes an array and returns it's middle item (in case of even number of items, return item to the left of the middle point)
    it('returns middle element', function () {
        expect(middle([ 1, 2, 3 ])).toBe(3);
        expect(middle([ 1, 2 ])).toBe(1);
        expect(middle([ 'x', 'a', 'e', 'r', 't', 'w', 'k' ])).toBe('r');
        expect(middle([ 'x', 'a', 'e', [ 'r', 't', 'w', 'k' ] ])).toBe('a');
    });

    // G. Write a function named 'checkSign' that takes a number and returns a respective string: 'I am positive', 'I am negative', 'I am zero', 'I am neither' or depending on the input value
    it('assesses number sign', function () {
        expect(checkSign(5.123)).toBe('I am positive');
        expect(checkSign(0)).toBe('I am zero');
        expect(checkSign(1 - '5')).toBe('I am negative');
        expect(checkSign(1 / 0)).toBe('I am neither');
    });

    // H. Write a function named 'fib' that takes a number n as input and returns first n Fibonacci numbers as an array
    it('returns Fibonacci\'s numbers', function () {
        expect(fib(0)).toBe([]);
        expect(fib(1)).toBe([ 1 ]);
        expect(fib(2)).toBe([ 1, 1 ]);
        expect(fib(3)).toBe([ 1, 1, 2 ]);
        expect(fib(7)).toBe([ 1, 1, 2, 3, 5, 8, 13 ]);
    });

});
