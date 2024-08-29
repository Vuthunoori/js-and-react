function createDynamicObject(...pairs)
{
   const dynamic={};
    pairs.forEach(([key,value])=>{
        dynamic[key]=value;
    }
);
return dynamic;
}
const ans= createDynamicObject(['name:','alice'],['age:',21]);
console.log(ans);