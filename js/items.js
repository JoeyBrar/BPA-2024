curNum = 1

function printAll () {
  var keyValuePairs = document.cookie.split(';');
  for(var i = 0; i < keyValuePairs.length; i++) {
      var name = keyValuePairs[i].substring(0, keyValuePairs[i].indexOf('=')).trim();
      var value = keyValuePairs[i].substring(keyValuePairs[i].indexOf('=')+1).trim();
  }
}

async function finalPrice () {
  a = await salesTax();
  b = await grabTotal();
  return a+b;
}


async function salesTax () {
  out = await grabTotal()*0.06;
  return Number(out.toFixed(2));
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

async function grabQuantity (name) {
  var keyValuePairs = document.cookie.split(';');
  for(var i = 0; i < keyValuePairs.length; i++) {
      var c1 = keyValuePairs[i].substring(0, keyValuePairs[i].indexOf('=')).trim();
      var c2 = keyValuePairs[i].substring(keyValuePairs[i].indexOf('=')+1).trim();
      console.log(c2.split('+')[1], "grabQuantity")
      if (c2.split('+')[0].trim() == name) {
        return Number(c2.split('+')[1])
      }
  }
}

async function grabOneItemPrice (name) {
  const response = await fetch ('/assets/menu/whole.json');
  const items = await response.json();
  for (let i=0;i<items.length;i++) {
    let obj = items[i];
    let qty = await grabQuantity(name);
    if (obj.name == name) {
      console.log("OIJOISJFDOISJDFOIJ")
      return Number(obj.price*qty);
    }
  }
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

function makeElement (name, quantity) {
  document.cookie = `item${curNum}=${name}+${quantity}`;
  curNum+=1
}

makeElement ("Grilled Chicken Club", 3)
makeElement ("The Classic Burger", 3)
makeElement("Buffalo Wings", 2)
editElement ("Grilled Chicken Club", 6)
deleteElement("The Classic Burger")
console.log(grabPrice("Grilled Chicken Club"), "qty: 1")
console.log(grabOneItemPrice("Grilled Chicken Club"), "qty: 6")
console.log("#1")
console.log(grabTotal(), "total price")
console.log(salesTax(), "tax @ 6%")
console.log(finalPrice(),"final price")