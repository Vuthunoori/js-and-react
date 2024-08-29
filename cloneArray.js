function clonearray(arr1){
return arr1.slice();
}
function cloningarray(arr1){
    return [...arr1];
    }
    let arr1=[1,2,3,4,5];
    let arr2=[5,6,7,8,9];
console.log(clonearray(arr1));
console.log(cloningarray(arr2));