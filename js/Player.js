class Player {
  constructor(name, id, color, active = false) {
    this.name = name;
    this.id = id;
    this.color = color;
    this.active = active;
    this.tokens = this.createTokens(21);
  }

/**
 * Creates token objects for player
 * @param  {integer}  num - Number of token objects to be created
 */
  createTokens(num) {
    const tokens = [];
    for(let i = 0; i < num; i++) {
      let t = new Token(i, this);
      tokens.push(t);
    }
    return tokens;
  }

  /**
   * Gets all tokens that haven't been dropped.
   * @return {array} Array of unused tokens.
   */
  get unusedTokens() {
    return this.tokens.filter((token) => !token.dropped);
  }

  /**
   * Gets the active token by returning the first token in the array of unused tokens.
   * @return {object} First token object in the array of unused tokens.
   */

  get activeToken() {
    return this.unusedTokens[0];
  }

}
