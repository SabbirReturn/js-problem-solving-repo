let instructor=[
    {name:'Nodi', age:28, position:'Senior'},
    {name:'Akil', age:26, position:'Junior'},
    {name:'Sabbir', age:30, position:'Senior'}
]

let name = instructor.filter(ins=> ins.position === 'Senior');
console.log(name);