class navbarC extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback(){
    this.render()
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
        <img src="assets/logo.png" width="30" height="37"> <!-- need to get new image -->
        &nbsp&nbspGameday Grill
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"
        aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar">
        <ul class="nav nav-pills ms-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" id="home">Home</a>
          </li>
          <li class="nav-item" id="menu">
            <a class="nav-link" href="/menu.html">Menu</a>
          </li>
          <li class="nav-item" id="reservations">
            <a class="nav-link" href="">Reservations</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="" id="events">Events</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="" id="events">Reviews</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="" id="about-us">About Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>`
  }
}

customElements.define("navbar-c",navbarC)