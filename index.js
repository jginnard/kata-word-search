const WordSearch = require('./models/WordSearch');
const fs = require('fs');
const DATA_DIR = './data/';

fs.readdir(DATA_DIR, function(error, files){
    files.forEach(function(file){
        let wordSearch = new WordSearch(DATA_DIR + file);
        console.log('\n-------- Word Locations for ' + file + ' --------\n');
        console.log(wordSearch.getAllWordLocations());
    });
});