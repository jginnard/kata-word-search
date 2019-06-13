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
            let grid = wordSearch.getDisplayGrid().map(function(row) {
                return row.join('');
            }).join('\n');
            $('#grid').text(grid);
            highlightWords(wordSearch);
        }).catch(function(e) {
            window.alert('Error. Please check the file and try again.');
            throw e;
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
 * Highlights word locaitons on the displayed grid
 * @param {Object} wordLocations 
 */
function highlightWords(wordSearch) {
    let wordLocations = wordSearch.getWordLocationData();
    let gridSize = wordSearch.getDisplayGrid().length;
    for (let word in wordLocations) {
        let location = wordLocations[word];
        $('#grid').append(getHighlightingElement(gridSize, location, word));
    }
}

const TRANSFORMS = {
    "-1":{
        "-1": "transform: rotate(135deg) translate(-18px,-6px);",
        "0": "transform: rotate(180deg) translate(-18px,-4px);",
        "1": "transform: rotate(225deg) translate(-22px,0px);"
    },
    "0":{
        "-1": "transform: rotate(90deg) translate(-6px,-4px);",
        "1": "transform: rotate(270deg) translate(-18px,4px);"
    },
    "1": {
        "-1": "transform: rotate(45deg) translate(-10px,0px);",
        "0": "transform: rotate(0deg) translate(-8px,4px);",
        "1": "transform: rotate(315deg) translate(-18px,6px);"
    }
};

/**
 * Get the element to highlight a given word
 * @param {number} gridSize - size of the grid, equal to height or width. 
 * @param {Object} location - location object of the word
 * @param {String} word
 */
function getHighlightingElement(gridSize, location, word) {
    let scale = 'calc((100% / ' + gridSize + ') * ';
    let top = 'top:' + scale + location[0].y + ');';
    let left = 'left:' + scale + location[0].x + ');';
    let dx = location[1].x - location[0].x;
    let dy = location[0].y - location[1].y;
    let length = (dx == 0 || dy == 0)? location.length : location.length * Math.SQRT2;
    let width = 'width:' + scale + length + ');';
    let transform = TRANSFORMS[dx][dy];
    let style = top + left + width + transform;
    let element = '<span id="' + word +'" class="highlight" style="' + style + '"></span>';
    return element;
}

function getWordPositionElement(word, wordPosition) {
    return '<div class="word-position" data-word="' + word + '">';
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