var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  var newArray = [];
  var i = katzDeliLine.length
  katzDeliLine.push(`${name}`);
  newArray.push(`Welcome, ${name}. You are number ${i} in line.`)
  return newArray
}

