const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;

/**
 * Test Setup
 */
const testConfig = require('../test/config.json').simpleWordSearch;
const WordSearch = require('../models/WordSearch');
const finderUtil = require('../util/finderUtil');
var wordSearch = new WordSearch(testConfig.inputFile);

/**
 * Run Tests
 */
describe('Read from file test', function() {
    describe('Read words from first line', function() {
        it('Number of words is equal to expected', function() {
            assert.equal(wordSearch.words.length, testConfig.words.length);
        });
        it('All words match those expected', function() {
            expect(wordSearch.words).to.eql(testConfig.words);
        });
    });
    describe('Read grid from lines after first line', function() {
        it('Number of grid rows equal those expected', function() {
            assert.equal(wordSearch.grid.length, testConfig.grid.length);
        });
        it('Number of grid rows equal number of grid columns', function() {
            assert.equal(wordSearch.grid.length, wordSearch.grid[0].length);
        });
        it('All grid elements match those expected', function() {
            expect(wordSearch.grid).to.eql(testConfig.grid);
        });
    });
});
describe('Find words in the grid test', function() {
    describe('finderUtil function findNextLetter', function() {
        it('Given the starting point of a word and a direction, next letter position is returned', function() {
            testConfig.words.forEach(function(word) {
                let position = testConfig.wordLocations[word][0],
                nextLetter = testConfig.wordLocations[word][1],
                direction = {x: nextLetter.x - position.x, y: nextLetter.y - position.y},
                letter = word.charAt(1);
                expect(finderUtil.findNextLetter(wordSearch.grid, position, direction, letter)).to.eql(nextLetter);
            });
        });
        it('If next letter is not found, null is returned', function() {
            testConfig.words.forEach(function(word) {
                let position = testConfig.wordLocations[word][0],
                nextLetter = testConfig.wordLocations[word][1],
                direction = {x: nextLetter.x - position.x, y: nextLetter.y - position.y},
                letter = '*'; //Something that it won't find.
                assert.equal(finderUtil.findNextLetter(wordSearch.grid, position, direction, letter), null);
            });
        });
    });
    describe('finderUtil function findLetters', function() {
        it('Given the starting position of a word, return the positions of all the letters', function() {
            testConfig.words.forEach(function(word) {
                expect(finderUtil.findLetters(wordSearch.grid, testConfig.wordLocations[word][0], word)).to.eql(testConfig.wordLocations[word]);
            });
        });
        it('If word can not be found at the given start position, null is returned', function() {
            assert.equal(finderUtil.findLetters(wordSearch.grid, {x:0,y:0}, '*****'), null);
        });
    });
    describe('WordSearch method find', function() {
        it('Given a word, return it\'s position in the grid', function() {
            testConfig.words.forEach(function(word) {
                expect(wordSearch.find(word)).to.eql(testConfig.wordLocations[word]);
            });
        });
        it('If the given word is not in the grid, return null', function() {
            expect(wordSearch.find('*****')).to.eql(null);
        })
    });
    describe('WordSearch method findAllWords', function() {
        it('Positions for all found words match those expected', function() {
            expect(wordSearch.findAllWords()).to.eql(testConfig.wordLocations);
        });
    });
});