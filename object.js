const person={
    name:'lahari',
    age:21,
    hobbies :['reading','cooking','music']
};
function update(){
    person.age=22;
     person.hobbies.push('drawing');

}
update();
console.log(person);
