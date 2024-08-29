let hold=(function()
{
    let variable=10;
    let othervar=20;
    return {
        getvariable :function(){
        return othervar;
    }
};

})();
// console.log(variable);
console.log(hold.getvariable());




