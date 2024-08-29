function rectarea(l,b){
    return l*b;
}
function joinstr(st1,st2)
{
   return st1+' '+st2;
}
function persondetail(name,age)
{
    return{
        name: name,
        age:age
    };
}

console.log(rectarea(5,4));
console.log(joinstr('lahari','geetha'));
console.log(persondetail('lahari',21));