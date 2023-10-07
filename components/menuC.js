class menuC extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback(){
      this.render()
    }
    render(){
      this.innerHTML=`
    <style>
      
    </style>

    <div class="container">
      <h2>Our Menu</h2>
      <p>Our Menu consists of the best appetizers, drinks and food in the world. </p>
      <ul class="nav nav-pills">
        <li class="active menu"><a data-bs-toggle="tab" class="" href="#appetizer">Appetizers</a></li><span>&nbsp&#183&nbsp</span>
        <li class="menu"><a data-bs-toggle="tab" class="" href="#breakfast">Breakfast</a></li><span>&nbsp&#183&nbsp</span>
        <li class="menu"><a data-bs-toggle="tab" class="" href="#lunch">Lunch</a></li><span>&nbsp&#183&nbsp</span>
        <li class="menu"><a data-bs-toggle="tab" class="" href="#dinner">Dinner</a></li><span>&nbsp&#183&nbsp</span>
        <li class="menu"><a data-bs-toggle="tab" class="" href="#drinks">Drinks</a></li><span>&nbsp&#183&nbsp</span>
        <li class="menu"><a data-bs-toggle="tab" class="" href="#dessert">Dessert</a></li>
      </ul>
      <br>
      <div class="tab-content">
        <div id="appetizer" class="tab-pane fade in active">
          <h3>Appetizers</h3>
          <p>We have a large variety of appetizers handcrafted by some of the worlds best chefs.</p>
        </div>
        <div id="breakfast" class="tab-pane fade">
          <h3>Breakfast</h3>
          <p>Best breakfast in all of the world.</p>
        </div>
        <div id="lunch" class="tab-pane fade">
          <h3>Lunch</h3>
          <p>Best lunch  in all of the world.</p>
        </div>
        <div id="dinner" class="tab-pane fade">
          <h3>Dinner</h3>
          <p>Best dinner in all of the world.</p>
        </div>
        <div id="drinks" class="tab-pane fade">
          <h3>Drinks</h3>
          <p>Sweet, cold drinks for a hot day.</p>
        </div>
        <div id="dessert" class="tab-pane fade">
          <h3>Dessert</h3>
          <p>A nice final taste to end off the day.</p>
        </div>
      </div>
    </div>
    `   
    }
  }
  
  customElements.define("menu-c",menuC)