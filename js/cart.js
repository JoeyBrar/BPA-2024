async function loopFood () {
  var keyValuePairs = document.cookie.split(';');
  cLength = 1;
  for(var j = 0; j < keyValuePairs.length; j++) {
    console.log("brh", keyValuePairs[j])
    if (keyValuePairs[j]=="") {
      cLength--;
    }
  }
  console.log(cLength)
  if (cLength!=0) {
    for(var i = 0; i < keyValuePairs.length; i++) {
      var c2 = keyValuePairs[i].substring(keyValuePairs[i].indexOf('=')+1).trim();
      var name = c2.split('+')[0].trim();
      await insertFoodS(name);
    }
  }
}

async function insertFoodS(food) {
  var foodName = food;
  var foodDesc = await grabDesc(food);
  var foodPrice = await grabPrice(food);
  var foodQty = await grabQuantity(food);
  var table = document.getElementById("shoppingCart");
  var row = table.insertRow(0);
  var nameAndDesc = row.insertCell(0);
  var price = row.insertCell(1);
  var qty = row.insertCell(2);
  var deleteBtn = row.insertCell(3);
  nameAndDesc.innerHTML = `
  <div class="row">
    <div class="col-md-12 text-left mt-sm-2">
        <h4 id="foodC">${foodName}</h4>
        <p class="font-weight-light">${foodDesc}</p>
    </div>
  </div>
  `;
  price.innerHTML = `$${foodPrice}`;
  price.classList.add("align-middle");
  qty.innerHTML = `
  <input type="number" class="form-control form-control-lg text-center align-middle" value="${foodQty}" min="1">
  `;
  qty.classList.add("align-middle");
  deleteBtn.innerHTML = `
  <div class="text-center">
    <button type="button" class="btn-close align-middle" aria-label="Close" onclick="deleteRow(this,'${foodName}')"></button>
  </div>
  `;
  deleteBtn.classList.add("align-middle");
}

async function grabTotal () {
  var keyValuePairs = document.cookie.split(';');
  let total = 0
  for(var i = 0; i < keyValuePairs.length; i++) {
      var name = keyValuePairs[i].substring(0, keyValuePairs[i].indexOf('=')).trim();
      var value = keyValuePairs[i].substring(keyValuePairs[i].indexOf('=')+1).trim();
      a = await grabPrice(value.split('+')[0]);
      b = await value.split('+')[1];
      total+=a*b
  }
  //console.log(total)
  return await total
}


function deleteElement (name) {
  var keyValuePairs = document.cookie.split(';');
  for(var i = 0; i < keyValuePairs.length; i++) {
    var c1 = keyValuePairs[i].substring(0, keyValuePairs[i].indexOf('=')).trim();
    var c2 = keyValuePairs[i].substring(keyValuePairs[i].indexOf('=')+1).trim();
    cs2=c2.split('+');
    if (c2==`${name}+${cs2[1]}`) {
      document.cookie = `${c1}=${c2};expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      break;
    }
  }
}



function editElement (name, quantityE) {
  var keyValuePairs = document.cookie.split(';');
  for(var i = 0; i < keyValuePairs.length; i++) {
    var c1 = keyValuePairs[i].substring(0, keyValuePairs[i].indexOf('=')).trim();
    var c2 = keyValuePairs[i].substring(keyValuePairs[i].indexOf('=')+1).trim();
    cs2 = c2.split('+');
    if (cs2[0]==name) {
      cf1=c1;
      break;
    }
  }
  document.cookie = `${cf1}=${name}+${quantityE}`;
}

async function grabPrice (name) {
  const response = await fetch ('/assets/menu/whole.json');
  const items = await response.json();
  for (let i=0;i<items.length;i++) {
    let obj = items[i];
    if (obj.name == name) {
      //console.log(obj.price)
      return obj.price
    }
  }
}

async function grabDesc (name) {
  const response = await fetch ('/assets/menu/whole.json');
  const items = await response.json();
  for (let i=0;i<items.length;i++) {
    let obj = items[i];
    if (obj.name == name) {
      //console.log(obj.price)
      return obj.description;
    }
  }
}

async function grabQuantity (name) {
  var keyValuePairs = document.cookie.split(';');
  for(var i = 0; i < keyValuePairs.length; i++) {
      var c1 = keyValuePairs[i].substring(0, keyValuePairs[i].indexOf('=')).trim();
      var c2 = keyValuePairs[i].substring(keyValuePairs[i].indexOf('=')+1).trim();
      if (c2.split('+')[0].trim() == name) {
        return Number(c2.split('+')[1])
      }
  }
}

async function deleteRow(r, name) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("shoppingCart").deleteRow(i);
  await deleteElement(name)
}

async function grabTotal () {
  var keyValuePairs = document.cookie.split(';');
  let total = 0
  for(var i = 0; i < keyValuePairs.length; i++) {
      var name = keyValuePairs[i].substring(0, keyValuePairs[i].indexOf('=')).trim();
      var value = keyValuePairs[i].substring(keyValuePairs[i].indexOf('=')+1).trim();
      a = await grabPrice(value.split('+')[0]);
      b = await value.split('+')[1];
      total+=a*b
  }
  //console.log(total)
  return await total
}