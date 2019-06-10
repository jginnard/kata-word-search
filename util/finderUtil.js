const DIRECTIONS = [{x:0,y:1},{x:1,y:1},{x:1,y:0},{x:1,y:-1},{x:0,y:-1},{x:-1,y:-1},{x:-1,y:0},{x:-1,y:-1}];

module.exports = {
    /**
     * Find the next letter of the word
     * @param {Array} grid - the grid to search
     * @param {Object} position - current position - {x:0, y:0}
     * @param {*} direction - direction from the current position - {x:0, y:0}
     * @param {*} letter - Letter to search for
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
    }
}