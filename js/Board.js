class Board {
  constructor() {
    this.rows = 6;
    this.columns = 7;
    this.spaces = this.createSpaces();
  }

  /**
    * Generates 2D array of spaces.
    * @return {array}   An array of space objects
  */

  createSpaces() {
    const spaces = [];
    for(let x = 0; x < this.columns.length; x++) {
      const column = [];

      for(let y = 0; y < this.rows.length; y++) {
        const s = new Space(x, y);
        column.push(space);
      }
      spaces.push(column);
    }
    return spaces;
  }

  drawHTMLBoard() {
    for(let column of this.spaces) {   // Iterates over board columns in spaces array
      for(let space of column) {       // Space objects contained within column arrays
        space.drawSVGSpace();
      }
    }
  }
}
