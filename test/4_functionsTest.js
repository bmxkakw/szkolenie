describe('functions', function () {

    // fill the results so the test passes
    it('processes the amounts correctly', function () {
        expects(processAmount(100.123, toFixed)).toEqual(100.12);
        expects(processAmount('1.50735', toFixed)).toEqual(1.51);
        expects(processAmount(-1.14256e2, toFixed)).toEqual(-114.26);

        expects(processAmount(240, addVat)).toEqual(295.2);
        expects(processAmount('16', addVat)).toEqual(19.68);

        expects(processAmount(45, applyDiscount)).toEqual(40.5);
        expects(processAmount(0, applyDiscount)).toEqual(0);
        expects(processAmount('200.00', applyDiscount)).toEqual(180);
        expects(processAmount('invalid amount', applyDiscount)).toEqual(0);
    });

});
