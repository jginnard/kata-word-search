const DIRECTIONS = [{x:0,y:1},{x:1,y:1},{x:1,y:0},{x:1,y:-1},{x:0,y:-1},{x:-1,y:-1},{x:-1,y:0},{x:-1,y:1}];

let finderUtil = {
    /**
     * Find the next letter of the word
     * @param {Array} grid - the grid to search
     * @param {Object} position - current position - {x:0, y:0}
     * @param {Object} direction - direction from the current position - {x:0, y:0}
     * @param {String} letter - Letter to search for
     * @example findNextLetter({x:0,y:0}, {x:0,y:1}, 'E')
     */
    findNextLetter: function (grid, position, direction, letter) {
        let nextLetter = {x: position.x + direction.x, y: position.y + direction.y};
        //Check that next letter is in bounds of the grid
        if (nextLetter.y >= 0 && nextLetter.y < grid.length && nextLetter.x >= 0 && nextLetter.x < grid[nextLetter.y].length) {
            //Check if next letter matches the one being searched
            if (grid[nextLetter.x][nextLetter.y] === letter) {
                return nextLetter;
            }
        }
        return null;
    },
    /**
     * 
     * @param {Array} grid - the grid to search
     * @param {Object} startPosition - position to look for word at
     * @param {String} word - the word to search for
     */
    findLetters: function(grid, startPosition, word) {
        for(var i=0; i < DIRECTIONS.length; i++){
            if (grid[startPosition.x][startPosition.y] !== word.charAt(0)) {
                return null;
            }
            let letterLocations = [];
            let position = startPosition;
            while(position != null) {
                letterLocations.push(position);
                if (letterLocations.length === word.length) {
                    return letterLocations;
                }
                position = finderUtil.findNextLetter(grid, position, DIRECTIONS[i], word.charAt(letterLocations.length));
            }
        }
        return null;
    }
};
module.exports = finderUtil;