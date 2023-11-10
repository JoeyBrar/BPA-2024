class checkouttotalC extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback(){
    this.render()
  }
  render(){
    this.innerHTML=`
<li class="list-group-item d-flex justify-content-between">
  <span>Total (USD)</span>
  <strong>$20</strong>
</li>
    `
  }
}

customElements.define("checkouttotal-c",checkouttotalC)