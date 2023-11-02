class checkoutitemC extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback(){
    this.render()
  }
  render(){
    this.innerHTML=`
<li class="list-group-item d-flex justify-content-between lh-condensed">
  <div>
    <h6 class="my-0">BBQ Pulled Pork Sandwich</h6>
    <small class="text-muted">Qty: 2</small>
  </div>
  <span class="text-muted">$12</span>
</li>
    `
  }
}

customElements.define("checkoutitem-c",checkoutitemC)