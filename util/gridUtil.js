module.exports = {
    /**
     * Translates grid by transposing rows and columns
     * @param {Array} grid - the grid to translate
     * @returns {Array} translatedGrid
     */
    translateGrid: function(grid){
        let translatedGrid = [];
        for(var x=0; x < grid.length; x++) {
            translatedGrid.push([]);
            for(var y=0; y < grid.length; y++) {
                translatedGrid[x].push(grid[y][x]);
            }
        }
        return translatedGrid;
    }
};