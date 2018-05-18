// Here's an example of unit test specification.
// For unit testing, we need:
// 1) a test suite - it allows to specify the expected results of tests;
// 2) a test runner, that will load and run the tests according to the specs;
// optionally 3) a reporter, that will format the results nicely

// In this training, you're going to use a very simple setup of Jasmine as a test suite and Karma as a test runner, to test JS features and the code you write.

/************************/

// 'describe' is used to group related tests, e.g. all tests for a module, a plugin, a piece of functionality etc.
describe('Test Specification Example', function () {

    // 'it' is where you perform individual tests. It is a custom to describe each test as a simple sentence;
    // e.g.: let's assume there's a function to test, that returns a date - test description could be:
    // it('returns current date in YYYY-MM-DD format', ...
    it('tests variables for equality, truthiness, etc.', function () {

        // The test consist of *expectations*, that check the value of expression passed to expect() function.
        // Jasmine has numerous matchers that can be used: .toBe(), .toEqual, .toBeMoreThan() etc.

        expect(true).toBe(true);
        expect(false).not.toBe(true);

        var a = 12;
        expect(a).toEqual(12);

        // EXERCISE 1: set up and run the tests. Notice how this one fails if you uncomment the line below.
        var foo = {
            a: 12,
            b: 34
        };
        var bar = {
            a: 12,
            b: 34
        };
        expect(foo).toEqual(bar);
        // expect(foo).toBe(bar);           // UNCOMMENT this line to see how the test fails
        // Why? Two objects are NOT the same entity, even if they look exactly the same

        var message = 'foo bar baz';
        expect(message).toMatch(/bar/);

        var a = {
            foo: 'foo'
        };
        expect(a.foo).toBeDefined();

        var a = null;
        expect(a).toBeNull();

        var a, foo = 'foo';
        expect(foo).toBeTruthy();
        expect(a).toBeFalsy();

        var a = [ 'foo', 'bar', 'baz' ];
        expect(a).toContain('bar');

        var pi = 3.1415926,
        e = 2.78;
        expect(e).toBeLessThan(pi);

        expect(this.bar).toBe(undefined);
    });
});
