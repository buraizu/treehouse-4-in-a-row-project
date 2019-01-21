class Token {
  constructor(index, owner) {
    this.owner = owner;
    this.id = `token-${index}-${owner.id}`;
    this.dropped = false;
  }

  drawHTMLToken() {
    const tokenDiv = document.createElement('div');
    document.getElementById('game-board-underlay').appendChild(tokenDiv);
    tokenDiv.setAttribute('id', this.id)
    tokenDiv.setAttribute('class', 'token')
    tokenDiv.style.backgroundColor = this.owner.color;
  }

  htmlToken() {

  }

}
