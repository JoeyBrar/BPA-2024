class navbarC extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback(){
    this.render()
    const page = this.getAttribute('page');
    console.log(page) //Returns "home"
    console.log(typeof page) //Returns "string"
    const change=this.ownerDocument.getElementById(page).classList.add("active");
    console.log(change)
  }
  render(){
    this.innerHTML=`
<style>
  .nav-pills .nav-item {
    margin-right: 5px;
}

.nav-pills .nav-item:last-child { 
    margin-right: 0px;
}

.nav-pills .nav-item .nav-link.active {
    background-color: #e92121;
    color: #fff; 
    border-radius: 0;
    transition: all 0.5s ease;
}
  
.nav-pills .nav-item .nav-link:hover {
    background-color: #c91010; 
    color: #fff; 
    border-radius: 0;
    transition: all 0.5s ease;
}

.nav-pills .nav-item .nav-link:not(active) {
    color: #000000; 
}
</style>
<nav class="navbar navbar-expand-lg navbar-light" style="background-color: #fff;">
  <div class="container-fluid">
    <a class="navbar-brand px-3" href="#"> 
      <img src="assets/logo2.png" width="30" height="30" alt="Game Day Grill">
      Game Day Grill
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"
      aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbar">
      <ul class="nav nav-pills ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="/index.html" id="home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/menu.html" id="menu">Menu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/reservation.html" id="reservations">Reservations</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/reviews.html" id="reviews">Reviews</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/aboutus.html" id="about-us">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/checkout.html" id="checkout">Checkout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>`
  }
}

customElements.define("navbar-c",navbarC)