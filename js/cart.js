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