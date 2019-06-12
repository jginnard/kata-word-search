const WordSearch = require('../../models/WordSearch');
/**
 * Solve wordsearch from file and display results
 */
function solveWordSearch() {
    let inputFiles = $('#inputFile')[0].files;
    if (inputFiles && inputFiles.length) {
        let wordSearch = new WordSearch();
        readFile(inputFiles[0]).then(function(content) {
            wordSearch.readString(content);
            $('#wordPositions').text(wordSearch.getAllWordLocations());
        }).catch(function() {
            window.alert('Error reading file. Please check the file and try again.');
        });
    }
}

/**
 * Read file contents and return a string
 * @param {Object} file - the file to read
 * @returns {Object} - a promise containing the content of the file as a string
 */
function readFile(file) {
    return new Promise(function(resolve, reject) {
        let reader =  new FileReader();
        reader.onload = function(e) {
            resolve(reader.result);
        };
        reader.onerror = function(e) {
            reject(e);
        };
        reader.readAsText(file, "UTF-8");
    });
}

/**
 * Initialize events in the browser
 */
function initializeEvents() {
    $('#solveWordSearch').on('click', solveWordSearch);
}

let app = {
    init : function () {
        initializeEvents();
    }
};

$(document).ready(function(){
    app.init();
});