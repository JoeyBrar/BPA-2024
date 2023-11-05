class menuC extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <div class="container">
            <h2>Our Menu</h2>
            <p>Our Menu consists of the best appetizers,
            drinks and food in the world. </p>
            <ul class="nav nav-pills">
                <li><a data-bs-toggle="tab" href="#appetizer">Appetizers</a></li><span>&nbsp&#183&nbsp</span>
                <li><a data-bs-toggle="tab" href="#salads">Salads</a></li><span>&nbsp&#183&nbsp</span>
                <li><a data-bs-toggle="tab" href="#soups">Soups</a></li><span>&nbsp&#183&nbsp</span>
                <li><a data-bs-toggle="tab" href="#burgers">Burgers & Sandwiches</a></li><span>&nbsp&#183&nbsp</span>
                <li><a data-bs-toggle="tab" href="#grilled">From the Grill</a></li><span>&nbsp&#183&nbsp</span>
                <li><a data-bs-toggle="tab" href="#sides">Sides</a></li><span>&nbsp&#183&nbsp</span>
                <li><a data-bs-toggle="tab" href="#deserts">Deserts</a></li><span>&nbsp&#183&nbsp</span>
                <li><a data-bs-toggle="tab" href="#beverages">Beverages</a></li>
            </ul><br>

            <div class="tab-content">
            <div id="appetizer" class="tab-pane fade">
                <h3>Appetizers</h3>
                <p>We have a large variety of appetizers handcrafted by some of the worlds best chefs.</p><br>
                <div class="row">
                <div class="col-sm-4">
                    <h5>Buffalo Wings</h5>
                    <p>Tender chicken wings coated in your choice of tangy barbecue,
                    spicy buffalo,
                    or honey mustard glaze. Served with celery sticks and ranch dressing <b>$4.99</b></p>
                    <button class="btn btn-outline-secondary" id="addCart" onclick="notify()">+</button>
                </div>
                <div class="col-sm-4">
                    <h5>Grilled Quesadillas</h5>
                    <p>Flour tortillas filled with melted cheese,
                    grilled veggies,
                    and your choice of seasoned chicken,
                    steak,
                    or shrimp. Served with salsa and sour cream <b>$3.95</b></p>
                    <button class="btn btn-outline-secondary" id="addCart" onclick="notify()">+</button>
                </div>
                <div class="col-sm-4">
                    <h5>Loaded Potato Skins</h5>
                    <p>Crispy potato skins stuffed with cheddar cheese,
                    crispy bacon,
                    and scallions. Served with sour cream for dipping <b>$1.99</b></p>
                    <button class="btn btn-outline-secondary" id="addCart" onclick="notify()">+</button>
                </div>
                </div><br>
                <div class="row">
                <div class="col-sm-4">
                    <h5>Grilled Veggie Platter</h5>
                    <p>A plate of assorted vegetables grilled thoroughly with light seasoning
                    <b>$2.50</b></p>
                    <button class="btn btn-outline-secondary" id="addCart" onclick="notify()">+</button>
                </div>
                <div class="col-sm-4">
                    <h5>Fried Calamari</h5>
                    <p>Fried Squid
                    <b>$3.99</b></p>
                    <br>
                    <button class="btn btn-outline-secondary" id="addCart" onclick="notify()">+</button>
                </div>
                </div>
            </div>

            <div id="salads" class="tab-pane fade">
                <h3>Salads</h3>
                <p>Ceaser's personal favorite.</p><br>
                <div class="row">
                <div class="col-sm-4">
                    <h5>Classic Caesar Salad</h5>
                    <p>Crisp romaine lettuce, croutons, and Parmesan cheese tossed in creamy Caesar dressing. <b>$3.85</b></p>
                    <br>
                    <button class="btn btn-outline-secondary" id="addCart" onclick="notify()">+</button>
                </div>
                <div class="col-sm-4">
                    <h5>Southwest Steak Salad</h5>
                    <p>Sliced grilled steak on a bed of mixed greens, topped with black beans, corn, avocado, and a zesty chipotle ranch dressing. <b>$5.98</b></p>
                    <button class="btn btn-outline-secondary" id="addCart" onclick="notify()">+</button>
                </div>
                <div class="col-sm-4">
                    <h5>Chicken Salad</h5>
                    <p>Shredded chicken, garden lettuce, cranberries, and accompanied by a variety of dressing flavors. <b>$4.79</b></p>
                    <br>
                    <button class="btn btn-outline-secondary" id="addCart" onclick="notify()">+</button>
                </div>
                </div>
            </div>

            <div id="soups" class="tab-pane fade">
                <h3>Soups</h3>
                <p>Hot n Ready.</p><br>
                <div class="row">
                <div class="col-sm-4">
                    <h5>Tomato Soup</h5>
                    <p>Velvety soup with cherry tomato and fresh basil. <b>$3.99</b></p>
                    <br>
                    <button class="btn btn-outline-secondary" id="addCart" onclick="notify()">+</button>
                </div>
                <div class="col-sm-4">
                    <h5>French Onion Soup</h5>
                    <p>Slow-cooked soup offering flavors of caramelized onion and a savory, cheesy broth. <b>$5.25</b></p>
                    <button class="btn btn-outline-secondary" id="addCart" onclick="notify()">+</button>
                </div>
                <div class="col-sm-4">
                    <h5>Seafood Chowder</h5>
                    <p>A blend of succulent crab, shrimp, and tender white fish, served as a creamy, steaming chowder. <b>$6.79</b></p>
                    <button class="btn btn-outline-secondary" id="addCart" onclick="notify()">+</button>
                </div>
                </div><br>
                <div class="row">
                <div class="col-sm-4">
                    <h5>Chicken Noodle</h5>
                    <p>A warm blend of chicken and flavourful broth. <b>$3.99</b></p>
                    <button class="btn btn-outline-secondary" id="addCart" onclick="notify()">+</button>
                </div>
                </div>
            </div>

            <div id="burgers" class="tab-pane fade">
                <h3>Burgers & Sandwiches</h3>
                <p>The biggest burgers you could ever imagine.</p><br>
                <div class="row">
                <div class="col-sm-4">
                    <h5>Signature Gameday Burger</h5>
                    <p>A hearty 1/2-pound beef patty piled high with all your game day favorites. This masterpiece features crispy bacon, cheddar cheese, jalapeños, and a drizzle of spicy homemade sauce. <b>$13.99</b></p>
                    <button class="btn btn-outline-secondary" id="addCart" onclick="notify()">+</button>
                </div>
                <div class="col-sm-4">
                    <h5>The Classic Burger</h5>
                    <p>A juicy 1/2-pound beef patty grilled to perfection, served with lettuce, tomato, onion, and your choice of cheese. Add bacon or avocado for extra flavor. <b>$10.99</b></p>
                    <br>
                    <button class="btn btn-outline-secondary" id="addCart" onclick="notify()">+</button>
                </div>
                <div class="col-sm-4">
                    <h5>Grilled Chicken Club</h5>
                    <p>Grilled chicken breast topped with bacon, Swiss cheese, lettuce, tomato, and mayo on a toasted bun.
                    <b>$10.99</b></p>
                    <br>
                    <br>
                    <button class="btn btn-outline-secondary" id="addCart" onclick="notify()">+</button>
                </div>
                </div><br>
                <div class="row">
                <div class="col-sm-4">
                    <h5>Veggie Burger</h5>
                    <p>A delicious plant-based patty grilled and served with lettuce, tomato, onion, and your choice of cheese.
                    <b>$11.99</b></p>
                    <br>
                    <button class="btn btn-outline-secondary" id="addCart" onclick="notify()">+</button>
                </div>
                <div class="col-sm-4">
                    <h5>BBQ Pulled Pork Sandwich</h5>
                    <p>Slow-cooked pulled pork tossed in tangy barbecue sauce, topped with coleslaw, and served on a toasted brioche bun.
                    <b>$9.99</b></p>
                    <button class="btn btn-outline-secondary" id="addCart" onclick="notify()">+</button>
                </div>
                </div>
            </div>

            <div id="grilled" class="tab-pane fade">
                <h3>From the Grill</h3>
                <p>Burnt to perfection.</p><br>
                <div class="row">
                <div class="col-sm-4">
                    <h5>New York Strip Steak</h5>
                    <p>A succulent 12-ounce USDA Choice strip steak cooked to your liking and served with your choice of side.
                    <b>$13.86</b></p>
                    <br>
                    <button class="btn btn-outline-secondary" id="addCart" onclick="notify()">+</button>
                </div>
                <div class="col-sm-4">
                    <h5>Grilled Salmon</h5>
                    <p>Fresh Atlantic salmon fillet seasoned and grilled to perfection, drizzled with lemon herb butter, and served with your choice of side.
                    <b>$12.50</b></p>
                    <button class="btn btn-outline-secondary" id="addCart" onclick="notify()">+</button>
                </div>
                <div class="col-sm-4">
                    <h5>Barbecue Ribs</h5>
                    <p>St. Louis-style ribs slow-smoked and basted with our signature barbecue sauce. Served with coleslaw and cornbread.
                    <b>$11.95</b></p>
                    <button class="btn btn-outline-secondary" id="addCart" onclick="notify()">+</button>
                </div>
                </div><br>
                <div class="row">
                <div class="col-sm-4">
                    <h5>Grilled Shrimp Skewers</h5>
                    <p>Jumbo shrimp skewers marinated in garlic and herbs, grilled to perfection, and served with rice pilaf and grilled vegetables.
                    <b>$14.99</b></p>
                    <button class="btn btn-outline-secondary" id="addCart" onclick="notify()">+</button>
                </div>
                <div class="col-sm-4">
                    <h5>Lobster Tail </h5>
                    <p>sizzling, succulent lobster meat grilled to perfection, seasoned lightly with a garlic and lemon drizzle.
                    <b>$17.99</b></p>
                    <br>
                    <button class="btn btn-outline-secondary" id="addCart" onclick="notify()">+</button>
                </div>
                </div>
            </div>

            <div id="sides" class="tab-pane fade">
                <h3>Sides</h3>
                <p>This will make a fine addition to my meal.</p><br>
                <div class="row">
                <div class="col-sm-4">
                    <h5>Garlic Parmesan Fries</h5>
                    <p>Crispy fries tossed in garlic and Parmesan cheese.
                    <b>$5.25</b></p>
                    <br>
                    <button class="btn btn-outline-secondary" id="addCart" onclick="notify()">+</button>
                </div>
                <div class="col-sm-4">
                    <h5>Loaded Baked Potato</h5>
                    <p>A baked potato topped with butter, sour cream, cheddar cheese, and bacon bits.
                    <b>$3.99</b></p>
                    <button class="btn btn-outline-secondary" id="addCart" onclick="notify()">+</button>
                </div>
                <div class="col-sm-4">
                    <h5>French Fries</h5>
                    <p>Crispy, fried, and salted fries served warm with your meal.
                    <b>$4.99</b></p>
                    <button class="btn btn-outline-secondary" id="addCart" onclick="notify()">+</button>
                </div>
                </div>
            </div>

            <div id="deserts" class="tab-pane fade">
                <h3>Deserts</h3>
                <p>A nice way to end the meal.</p><br>
                <div class="row">
                <div class="col-sm-4">
                    <h5>Molten Lava Cake</h5>
                    <p>A warm chocolate cake with a gooey, molten center, served with vanilla ice cream and drizzled with chocolate sauce
                    <b>$2.99</b></p>
                    <button class="btn btn-outline-secondary" id="addCart" onclick="notify()">+</button>
                </div>
                <div class="col-sm-4">
                    <h5>Cheesecake of the Day</h5>
                    <p>Ask your server for today's featured cheesecake flavor
                    <b>$3.25</b></p>
                    <br>
                    <button class="btn btn-outline-secondary" id="addCart" onclick="notify()">+</button>
                </div>
                <div class="col-sm-4">
                    <h5>Key Lime Pie</h5>
                    <p>A tangy and creamy key lime pie in a graham cracker crust, topped with whipped cream and lime zest
                    <b>$6.99</b></p>
                    <br>
                    <button class="btn btn-outline-secondary" id="addCart" onclick="notify()">+</button>
                </div>
                </div><br>
                <div class="row">
                <div class="col-sm-4">
                    <h5>Chocolate Mousse</h5>
                    <p>Tasty chocolate mousse topped with whipped cream and chocolate shavings <b>$6.49</b></p>
                    <button class="btn btn-outline-secondary" id="addCart" onclick="notify()">+</button>
                </div>
                <div class="col-sm-4">
                    <h5>Peach Cobbler</h5>
                    <p>Sweet, juicy peaches and topped with a golden, flaky crust, sprinkled with cinnamon
                    <b>$7.89</b></p>
                    <button class="btn btn-outline-secondary" id="addCart" onclick="notify()">+</button>
                </div>
                <div class="col-sm-4">
                    <h5>Fruit Platter</h5>
                    <p>An assortment of fresh berries, melon, pineapple, and grapes
                    <b>$2.99</b></p>
                    <button class="btn btn-outline-secondary" id="addCart" onclick="notify()">+</button>
                </div>
                </div>
            </div>

            <div id="beverages" class="tab-pane fade">
                <h3>Beverages</h3>
                <p>Sweet, cold drinks for a hot day.</p><br>
                <div class="row">
                <div class="col-sm-4">
                    <h5>Soft Drinks</h5>
                    <p>Choose from a variety of refreshing soft drinks, including classics like cola, lemon-lime soda, and root beer, served with plenty of ice. Free refills are included!
                    <b>$2.49</b></p>
                    <button class="btn btn-outline-secondary" id="addCart" onclick="notify()">+</button>
                </div>
                <div class="col-sm-4">
                    <h5>A selection of Craft Beers and Wines</h5>
                    <p>Explore our curated selection of craft beers and wines to complement your meal. From hoppy IPAs to rich red wines, there's a beverage to satisfy every palate. Ask you server for our current offerings.</p>
                </div>
                <div class="col-sm-4">
                    <h5>Specialty Cocktails</h5>
                    <p> Our talented mixologists craft a range of creative and delicious cocktails. From fruity and tropical to bold and smoky, our specialty cocktails are made with premium spirits and fresh ingredients. Check our drink menu for the latest concoctions. 
                </div>
                </div><br>
                <div class="row">
                <div class="col-sm-4">
                    <h5>Coffee</h5>
                    <p>Enjoy a freshly brewed cup of aromatic coffee made from our special blend of beans. Whether you prefer it black, with cream, or sweetened, our coffee is the perfect way to wrap up your meal.
                    <b>$2.99</b></p>
                    <button class="btn btn-outline-secondary" id="addCart" onclick="notify()">+</button>
                </div>
                <div class="col-sm-4">
                    <h5>Iced Tea</h5>
                    <p> Cool off with a glass of our house-brewed iced tea, available in sweetened and unsweetened varieties. Garnished with a lemon slice, it's a classic choice for a refreshing beverage.
                    <b>$2.99</b></p>
                    <button class="btn btn-outline-secondary" id="addCart" onclick="notify()">+</button>
                </div>
                <div class="col-sm-4">
                    <h5>Fruit Juice</h5>
                    <p>Quench your thirst with a selection of 100% pure fruit juices. Choose from options like orange, cranberry, or pineapple to enjoy a burst of natural fruit flavors with your meal.
                    <b>$3.49</b></p>
                    <button class="btn btn-outline-secondary" id="addCart" onclick="notify()">+</button>
                </div>
            </div>
        </div>

        <!--TOAST -->
        <div id="toast"></div>
        <!--TOAST -->

        <style>
        #toast {
            position: absolute;
            bottom: 15px;
            right: 15px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            overflow: hidden;
            padding: 30px;
            }

        .toastContent {
            width: 400px; 
            height:80px;
            background: #e92121;
            color: white;
            margin: 10px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
            display: flex;
            align-items: center;
            transform: translateX(100%);
            animation: slideFromRight 0.2s linear forwards;
        }
        @keyframes slideFromRight {
            100%{
                transform: translate(0);
            }
        }
        
        a:hover {
            color: #000000;
            /* color: #e92121; */
            transition: all 0.3s ease;
        }

        /* navpill animation */
        /* .tab-pane.active {
            animation: slide-down 0.2s ease-out;
        }

        @keyframes slide-down {
            0% { opacity: 0; transform: translateY(100%); }
            100% { opacity: 1; transform: translateY(0); }
        } */
        </style>
        `
    }

}

customElements.define("menu-c", menuC)