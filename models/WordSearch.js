const fs = require('fs');
const gridUtil = require('../util/gridUtil');
const finderUtil = require('../util/finderUtil');

/**
 * @class WordSearch
 * @classdesc Word search Object
 */
class WordSearch {
    /**
     * @constructs WordSearch
     * @description Constructs a new WordSearch given a file an isput.
     * @param {String} inputFile 
     */
    constructor(inputFile) {
        this.words = [];
        this.grid = [];
        this.wordLocations = {};
        if (inputFile) {
            this.readFile(inputFile);
            this.findAllWords();
        }
    }

    /**
     * Reads a file
     * @param {String} inputFileName
     */
    readFile(inputFileName) {
        let fileContent = fs.readFileSync(inputFileName, {encoding: 'utf8'});
        let rows = fileContent.split(/\r?\n/);
        let data = rows.map(function(row){
            return row.split(',');
        })
        this.words = data[0];
        this.grid = gridUtil.translateGrid(data.slice(1));
    }

    /**
     * Find a word in the grid
     * @param {String} word - the word to search for in the grid
     * @returns {Array} letter positions
     */
    find(word) {
        for(var y=0; y < this.grid.length; y++){
            for(var x=0; x < this.grid[y].length; x++){
                let result = finderUtil.findLetters(this.grid, {x:x,y:y}, word);
                if(result != null) {
                    return result;
                }
            }
        }
        return null;
    }
    /**
     * Find all words in the grid
     * @returns {Object} words and their positions
     */
    findAllWords() {
        this.wordLocations = {};
        for (var i = 0; i < this.words.length; i++) {
            this.wordLocations[this.words[i]] = this.find(this.words[i]);
        }
        return this.wordLocations;
    }
}

module.exports = WordSearch;