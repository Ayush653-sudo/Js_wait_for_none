//what is closure :- each function in javascript has access to it's lexical scope

// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     a = 100;
//     return y;
// }
// var z = x(); // we could do like:- x()() to execute inner function
// console.log(z);
// z();
function x(){// this will generate unexpected result use let insted of var to make local scope.
    for (var i=1;i<=5;i++){
        setTimeout(function(){
         console.log(i);
        },i*1000);
    }
    console.log("Javascript wait for none");
}
x();

// if someone restrict us to use var only and solve this problem of closure :-

// function x(){
//     for (var i=1;i<=5;i++){
//         function close(x){
//             setTimeout(function(){
//                 console.log(x);
//             },x*1000);
//         }
//         close(i);
//     }
//     console.log("Javascript wait for none");
// }
// x();

