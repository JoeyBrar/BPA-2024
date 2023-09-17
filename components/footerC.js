class footerC extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback(){
    this.render()
  }
  render(){
    this.innerHTML=`
<div class="container align-items-center">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p class="col-md-4 mb-0 text-body-secondary text-center justify-content-center mx-auto">© 2023 Game Day Grill, Inc</p>
    <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <img src="/assets/logo.png" alt="Game Day Grill" style="max-width:50%">
    </a>
    <ul class="nav col-md-4 justify-content-center align-items-center text-center mx-auto">
      <li class="nav-item"><a href="/index.html" class="nav-link px-2 text-body-secondary text-center text-sm-start">Home</a></li>
      <li class="nav-item"><a href="/menu.html" class="nav-link px-2 text-body-secondary text-center text-sm-start">Menu</a></li>
      <li class="nav-item"><a href="/reservation.html" class="nav-link px-2 text-body-secondary text-center text-sm-start">Reservations</a></li>
      <li class="nav-item"><a href="/aboutus.html" class="nav-link px-2 text-body-secondary text-center text-sm-start">About Us</a></li>
      <li class="nav-item"><a href="/checkout.html" class="nav-link px-2 text-body-secondary text-center text-sm-start">Checkout</a></li>
    </ul>
  </footer>
</div>
    `
  }
}

customElements.define("footer-c",footerC)