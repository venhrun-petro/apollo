
// $(document).ready(function(){
//      console.log('true 1  11  1');
 
// }); 
console.log('2')
window.tdiff = []; fred = function(a,b){return a-b;};
window.document.onload = function(e){ 
    console.log("document.onload", e, Date.now() ,window.tdiff,  
    (window.tdiff[0] = Date.now()) && window.tdiff.reduce(fred) ); 
}
// alert('1');
// // document.addEventListener("DOMContentLoaded", function(event) { 
//   setTimeout(function(){
//     console.log('1  11  1');
//   }, 100);
  
// });