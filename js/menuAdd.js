var alterID=1
function incrementFood (name) {
  var keyValuePairs = document.cookie.split(';');
  var alterQty = null;
  var alterName="";
  var insidealterID = ""
  for(var i = 0; i < keyValuePairs.length; i++) {
    console.log(name, i)
    var c1 = keyValuePairs[i].substring(0, keyValuePairs[i].indexOf('=')).trim();
    var c2 = keyValuePairs[i].substring(keyValuePairs[i].indexOf('=')+1).trim();
    var cName = c2.split('+')[0].trim()
    var cQty = Number(c2.split('+')[1]) 
    if (name == cName) {
      insidealterID = c1;
      alterName=cName;
      alterQty=cQty;
      break;
    }
  }
  if (alterName == "") {
    document.cookie = `item${alterID}=${name}+${1}`;
  } else {
    document.cookie = `${insidealterIDalterID}=${alterName}+${cQty+1}`;
  }
  console.log(alterID)
  alterID+=1;
}