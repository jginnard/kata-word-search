const assert = require('chai').assert;

/**
 * Test Setup
 */
const WordSearch = require('../models/WordSearch');
var wordSearch = new WordSearch('./data/wordSearch1.csv');


/**
 * Run Tests
 */
describe('Read File Test', function(){
    describe('Read Words From First Line', function() {
        it('Word 1', function(){
            assert.equal(wordSearch.words[0], "BONES");
        });
        it('Word 2', function(){
            assert.equal(wordSearch.words[1], "KHAN");
        });
        it('Word 3', function(){
            assert.equal(wordSearch.words[2], "KIRK");
        });
        it('Word 4', function(){
            assert.equal(wordSearch.words[3], "SCOTTY");
        });
        it('Word 5', function(){
            assert.equal(wordSearch.words[4], "SPOCK");
        });
        it('Word 6', function(){
            assert.equal(wordSearch.words[5], "SULU");
        });
        it('Word 7', function(){
            assert.equal(wordSearch.words[6], "UHURA");
        });

    })
});