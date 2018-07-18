var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  var newArray = [];
  var i = katzDeliLine.length + 1
  katzDeliLine.push(`${name}`);
  newArray.push(`Welcome, ${name}. You are number ${i} in line.`)
  return newArray
}

function nowServing(katzDeliLine){
var serving = katzDeliLine[0];
var newLine = []; 

 while(katzDeliLine.length !== 0){
   
   newLine.push(`Currently serving ${serving}.`)
   katzDeliLine.shift();
   return newLine
 }
 
 
 
  if(katzDeliLine.length === 0){
   return "There is nobody waiting to be served!"
 }
 
}

function currentLine(katzDeliLine){
  var current = [];
  var nameInLine = katzDeliLine[i];
  for(var i = 0; i>0; i++){
    return current.push(`${i}. ${nameInLine}`)
  }
  if (katzDeliLine.length === 0){return ''}
}
