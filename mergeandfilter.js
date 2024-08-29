function arraymerge(arr1,arr2){
   let arr3=arr1.concat(arr2);
   let result=arr3.filter(num=>num%2===0)
   .sort((a,b)=>a-b);
   return result;
}
const array1 = [1, 2, 3, 4];
  const array2 = [5, 6, 7, 8];
  const filteredArray = arraymerge(array1, array2);
  console.log(filteredArray); 

