//The ability to use function as value in another function is called as first class function.

function a(){
    console.log("a caled");
}
var b = function(param1){
    console.log(param1);
}
function xyz(){

}
b(xyz);