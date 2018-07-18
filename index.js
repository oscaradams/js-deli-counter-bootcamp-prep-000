var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  var newArray = [];
  var i = katzDeliLine.length + 1
  katzDeliLine.push(`${name}`);
  newArray.push(`Welcome, ${name}. You are number ${i} in line.`)
  return newArray
}

function nowServing(katzDeliLine){
 var serving = katzDeliLine[0]
 if(katzDeliLine.length === 0){
   return "There is nobody in line"
 }
 else {
   return `Now serving ${serving}`
   katzDeliLine.shift()
 }
 
}