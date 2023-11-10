class cartitemC extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback(){
    this.render();
  }
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