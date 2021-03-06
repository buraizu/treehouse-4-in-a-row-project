class Token {
  constructor(index, owner) {
    this.owner = owner;
    this.id = `token-${index}-${owner.id}`;
    this.dropped = false;
    this.columnLocation = 0;
  }

  /**
   * Draws new HTML token.
   */
  drawHTMLToken() {
    const tokenDiv = document.createElement('div');
    document.getElementById('game-board-underlay').appendChild(tokenDiv);
    tokenDiv.setAttribute('id', this.id)
    tokenDiv.setAttribute('class', 'token')
    tokenDiv.style.backgroundColor = this.owner.color;
  }

  /**
   * Gets associated htmlToken.
   * @return  {element}   Html element associated with token object.
   */
  get htmlToken() {
    return document.getElementById(this.id);
  }

  /**
   * Gets left offset of html element.
   * @return {string}   Left offset of token object's htmlToken.
   */
  get offsetLeft() {
    return this.htmlToken.offsetLeft;
  }

  /**
   * Moves html token one column to left.
   */
  moveLeft() {
    if(this.columnLocation > 0) {
      this.htmlToken.style.left = this.offsetLeft - 76;
      this.columnLocation -= 1;
    }
  }

  /**
   * Moves html token one column to right.
   */
  moveRight(columns) {
    if(this.columnLocation < columns - 1) {
      this.htmlToken.style.left = this.offsetLeft + 76;
      this.columnLocation += 1;
    }
  }

  drop(target, reset) {
    this.dropped = true;
    $(this.htmlToken).animate({
      top: (target.y * target.diameter)
    }, 750, 'easeOutBounce', reset)
  }

}
