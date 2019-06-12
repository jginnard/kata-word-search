function runMochaTests() {
    window.mocha.setup('bdd');
    var assert = chai.assert;
    //Test cases
    describe('Initial Page Load', function() {
        describe('Form Elements', function() {
            it('There is a form with id wordSearchForm', function() {
                assert.equal($('form#wordSearchForm').length, 1);
            });
            it('There is a input of type file', function() {
                assert.equal($('input[type=file]').length, 1);
            });
            it('There is a button with id solveWordSearch', function () {
                assert.equal($('button#solveWordSearch').length, 1);
            });
            it('The button has the text \'Solve\'', function() {
                assert.equal($('button#solveWordSearch').text(), 'Solve');
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
