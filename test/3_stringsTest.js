// EXERCISE 3: Usually the tested code is in some other file. Use /js/3_strings.js to write your code and /test/3_stringTest.js as a test spec
// See /js/strings.js for the exercise instruction  
describe('pokemonize', function () {

    it('pokemonizes strings', function () {
        expect(pokemonize('')).toEqual('');
        expect(pokemonize('marchewka')).toEqual('MaRcHeWkA');
        expect(pokemonize('Lorem ipsum dolor')).toEqual('LoReM IpSuM DoLoR');
    });
});
