const assert = require('chai').assert;

/**
 * Test Setup
 */
const testConfig = require('../test/config.json').simpleWordSearch;
const WordSearch = require('../models/WordSearch');
var wordSearch = new WordSearch(testConfig.inputFile);

/**
 * Run Tests
 */
describe('Read from file test', function(){
    describe('Read words from first line', function() {
        it('Number of words is equal to expected.', function(){
            assert.equal(wordSearch.words.length, testConfig.words.length);
        });
        it('All words match those expected.', function(){
            testConfig.words.forEach(function(word, i){
                assert.equal(wordSearch.words[i], word);
            });
        });
    });
});