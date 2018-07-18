var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  var newArray = [];
  var i = katzDeliLine.length + 1
  katzDeliLine.push(`${name}`);
  newArray.push(`Welcome, ${name}. You are number ${i} in line.`)
  return newArray
}

function nowServing(katzDeliLine){
var serving = katzDeliLine.name[0];
var newArray = []; 

 while(katzDeliLine.length !== 0){
   
   newArray.push(`Currently serving ${serving}.`)
   katzDeliLine.shift();
   return newArray
 }
 
 
 
  if(katzDeliLine.length === 0){
   return "There is nobody waiting to be served!"
 }
 
}