var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  var newArray = [];
  var i = katzDeliLine.length + 1
  katzDeliLine.push(`${name}`);
  newArray.push(`Welcome, ${name}. You are number ${i} in line.`)
  return newArray
}

function nowServing(katzDeliLine){
 

 while(katzDeliLine.length !== 0){
   var serving = katzDeliLine[0]
   return `Currently serving ${serving}.`
   return katzDeliLine.shift();
 }
 
 
 
  if(katzDeliLine.length === 0){
   return "There is nobody waiting to be served!"
 }
 
}