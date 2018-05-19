describe('functions', function () {

    // EXERCISE 5: First, fill here expected results, then write functions that perform desired operations. See /js/4_functions for specification
    // of functions to be written.
    // Congrats, you're doind Test-Driven Development!
    it('processes the amounts correctly', function () {
        expects(processAmount(100.123, toFixed)).toEqual(/* */);
        expects(processAmount('1.50735', toFixed)).toEqual(/* */);
        expects(processAmount(-1.14256e2, toFixed)).toEqual(/* */);

        expects(processAmount(240, addVat)).toEqual(/* */);
        expects(processAmount('16', addVat)).toEqual(/* */);

        expects(processAmount(45, applyDiscount)).toEqual(/* */);
        expects(processAmount(0, applyDiscount)).toEqual(/* */);
        expects(processAmount('200.00', applyDiscount)).toEqual(/* */);
        expects(processAmount('invalid amount', applyDiscount)).toEqual(/* */);
    });

});
