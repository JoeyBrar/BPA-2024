class checkoutitemC extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback(){
    this.render();
    
    const itemName = this.getAttribute('name');
    this.querySelector("#nameX").innerHTML=`${itemName}`;
    
    const price = this.getAttribute('price');
    this.querySelector("#priceX").innerHTML=`$${Math.abs(parseFloat(this.getAttribute('price')) * parseFloat( this.getAttribute('qty') ) ).toFixed(2)}`;
    
    const qty = this.getAttribute('qty');
    this.querySelector("#qtyX").innerHTML=`Qty: ${qty}`;
    
  }
  render(){
    this.innerHTML=`
      <li class="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 class="my-0" id="nameX"></h6>
          <small class="text-muted" id="qtyX"></small>
        </div>
        <span class="text-muted" id="priceX"></span>
      </li>`
  }
}

customElements.define("checkout-item-c", checkoutitemC );