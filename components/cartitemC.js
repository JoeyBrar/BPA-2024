class cartitemC extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback(){
    this.render();
/*
    const itemName = this.getAttribute('name');
    this.querySelector("#nameX").innerHTML=`${itemName}`;

    const qty = this.getAttribute('qty');
    this.querySelector("#qtyX").innerHTML=`Qty: ${qty}`;

    const priceO = this.getAttribute('price');
    this.querySelector("#priceX").innerHTML=`$${Math.abs(parseFloat(this.getAttribute('price')) * parseFloat( this.getAttribute('qty') ) ).toFixed(2)}`;
    
    const priceW = this.getAttribute('price');
    this.querySelector("#priceX").innerHTML=`$${Math.abs(parseFloat(this.getAttribute('price')) * parseFloat( this.getAttribute('qty') ) ).toFixed(2)}`;
*/ }
  render(){
    this.innerHTML=`
<tr>
    <td data-th="Product">
        <div class="row">
            <div class="col-md-12 text-left mt-sm-2">
                <h4>Classic Chicken Sandwich</h4>
                <p class="font-weight-light">Brand &amp; Name</p>
            </div>
        </div>
    </td>
    <td class="align-middle" data-th="Price">$49.00</td>
    <td class="align-middle" data-th="Quantity">
        <input type="number" class="form-control form-control-lg text-center align-middle" value="1" min="1">
    </td>
    <td class="actions align-middle" data-th="">
        <div class="text-right">
          <button type="button" class="btn-close align-middle" aria-label="Close"></button>
        </div>
    </td>
</tr> 
    `
  }
}

customElements.define("cartitem-c", cartitemC );