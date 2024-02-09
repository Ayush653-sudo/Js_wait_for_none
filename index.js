let a = 20;
{
    let a = 10;
    let b = 20;
    const c = 40;
}
console.log(a)
// let and const have block scope but var has global scope
//undefined -> variable has defined somewhere in program  but didn't get it's value , 
// get memory only
//means variable haven't defined inside program.

// if let and const has defined outside any block then they are considered inside script