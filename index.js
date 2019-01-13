var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  return kittens.push(name)
}
function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}
function destructivelyRemoveLastKitten(){
  return kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}
function appendKitten(name){
var kittens2= [...kittens, name]
 return kittens2
}
function prependKitten(name){
 var kittens3= [name, ...kittens]
  return kittens3
}
function removeLastKitten(){
  var kittens4=kittens.slice
}
function removeFirstKitten(){
  
}