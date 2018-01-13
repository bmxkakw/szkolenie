describe('examples', function () {

    it('equals', function () {
        expect(true).toBe(true);
        expect(false).not.toBe(true);

        var a = 12;
        expect(a).toEqual(12);

        var foo = {
            a: 12,
            b: 34
        };
        var bar = {
            a: 12,
            b: 34
        };
        expect(foo).toEqual(bar);

        var message = "foo bar baz";
        expect(message).toMatch(/bar/);

        var a = {
            foo: "foo"
        };
        expect(a.foo).toBeDefined();

        var a = null;
        expect(a).toBeNull();

        var a, foo = "foo";
        expect(foo).toBeTruthy();
        expect(a).toBeFalsy();

        var a = ["foo", "bar", "baz"];
        expect(a).toContain("bar");

        var pi = 3.1415926,
        e = 2.78;
        expect(e).toBeLessThan(pi);

        expect(this.bar).toBe(undefined);
    });
});
