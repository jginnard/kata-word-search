const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;

/**
 * Test Setup
 */
const testConfig = require('../test/config.json').simpleWordSearch;
const WordSearch = require('../models/WordSearch');
var wordSearch = new WordSearch(testConfig.inputFile);

/**
 * Run Tests
 */
describe('Read from file test', function() {
    describe('Read words from first line', function() {
        it('Number of words is equal to expected.', function() {
            assert.equal(wordSearch.words.length, testConfig.words.length);
        });
        it('All words match those expected.', function() {
            expect(wordSearch.words).to.eql(testConfig.words);
        });
    });
    describe('Read grid from lines after first line', function() {
        it('Number of grid rows equal those expected.', function() {
            assert.equal(wordSearch.grid.length, testConfig.grid.length);
        });
        it('Number of grid rows equal number of grid columns.', function() {
            assert.equal(wordSearch.grid.length, wordSearch.grid[0].length);
        });
        it('All grid elements match those expected.', function() {
            expect(wordSearch.grid).to.eql(testConfig.grid);
        });
    });
});