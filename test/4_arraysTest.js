// EXERCISE 4 - write functions described in /js/4_arrays.js so the tests pass

describe('pokemonizeAStrings', function () {

    it('pokemonizes only strings starting with a', function () {
        expect(pokemonizeAStrings([ 'array', 'marchew', '', 'SSSSS', 'alt' ])).toEqual([ 'ArRaY', 'marchew', '', 'SSSSS', 'AlT' ]);
    });
});

describe('sortByOddity', function () {

    it('sorts as expected', function () {
        var lotto = [ 1, 47, 23, 12, 39, 3, 28 ];
        var sorted = sortByOddity(lotto);
        sorted = sorted.toString();

        expect(sorted).toEqual('12,28,1,3,23,39,47');
    });
});

describe('womenOnly', function () {

    var names = [ 'Anna', 'Danuta', 'Marek', 'Józef', 'Janina', 'Jakub', 'Mariola', 'Ernest' ];

    it('allows women only', function () {
        expect(womenOnly(names)).toEqual([ 'Anna', 'Danuta', 'Janina', 'Mariola' ]);
    });
});
