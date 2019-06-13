function runMochaTests() {
    window.mocha.setup('bdd');
    var assert = chai.assert;
    //Test cases
    describe('Initial Page Load', function() {
        describe('Form Elements', function() {
            it('There is a form with id wordSearchForm', function() {
                assert.equal($('form#wordSearchForm').length, 1);
            });
            it('There is a input of type file with id inputFile', function() {
                assert.equal($('input[type=file]#inputFile').length, 1);
            });
            it('There is a button with id solveWordSearch', function () {
                assert.equal($('button#solveWordSearch').length, 1);
            });
            it('The button has the text \'Solve\'', function() {
                assert.equal($('button#solveWordSearch').text(), 'Solve');
            });
        });
        describe('Elements for displaying results', function() {
            it('There is a div with id grid', function() {
                assert.equal($('div#grid').length, 1);
            });
            it('There is a div with id wordPositions', function() {
                assert.equal($('div#wordPositions').length, 1);
            });
        });
    });
    window.mocha.run();
}

$(document).ready(function() {
    if ('mocha' in window && 'chai' in window) {
        runMochaTests();
    }
});
