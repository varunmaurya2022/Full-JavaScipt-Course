var a = 10;
function b() {
   var x = 5;
}
console.log(window.a); //Window is a global object.
console.log(a);
//console.log(x) error:-x is not defined.
console.log(this.a); //this is a global object.
