const fs = require('fs');

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
        if (inputFile) {
            this.readFile(inputFile);
        }
    }

    /**
     * Reads a file
     * @param {String} inputFileName 
     * @returns 
     */
    readFile (inputFileName) {
        let fileContent = fs.readFileSync(inputFileName, {encoding: 'utf8'});
        let rows = fileContent.split(/\r?\n/);
        let data = rows.map(function(row){
            return row.split(',');
        })
        this.words = data[0];
    }
}

module.exports = WordSearch;