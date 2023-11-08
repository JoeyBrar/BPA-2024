class cartitemC extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback(){
    this.render();
    
  }
  render(){
    this.innerHTML=``
  }
}

customElements.define("cartitem-c", checkoutitemC );