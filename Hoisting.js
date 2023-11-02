// // console.log("Connected");
// // var x = 7;
// // function getname() {
// //    console.log("Hello");
// // }
// // getname();
// // console.log(x);


// getName();
// console.log(getName);
// console.log(x);
// var x = 7;
// function getName() {
//    console.log("hello");
// }
var x = 10;
function getname() {
   console.log(x);
   console.log("Hello javascript Hoisting!");
   var x = 7;

   console.log(x);
}
getname();
console.log(getname);
console.log(x);